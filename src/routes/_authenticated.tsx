import { createFileRoute, Outlet, redirect, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Loader2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ location }) => {
    if (typeof window === "undefined") return;
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      throw redirect({
        to: "/login",
        search: { redirect: location.href },
      });
    }
  },
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    let active = true;

    const check = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate({ to: "/login" });
        return;
      }

      const { data, error } = await supabase
        .from("access_control")
        .select("has_access")
        .eq("user_id", sessionData.session.user.id)
        .maybeSingle();

      if (!active) return;

      if (error) {
        console.error("[access_control]", error);
        setHasAccess(false);
      } else {
        setHasAccess(Boolean(data?.has_access));
      }
      setChecking(false);
    };

    check();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate({ to: "/login" });
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/login" });
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-md text-center">
          <h1 className="font-serif italic text-3xl text-foreground mb-3">
            Acesso pendente
          </h1>
          <p className="text-sm text-foreground/70 mb-6">
            Sua conta ainda não tem acesso aos bônus liberado. Entre em contato
            com o suporte para liberar.
          </p>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 z-50 inline-flex items-center gap-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-border px-3 py-1.5 text-xs font-medium text-foreground/80 hover:text-foreground hover:bg-card transition"
        aria-label="Sair"
      >
        <LogOut className="h-3.5 w-3.5" />
        Sair
      </button>
      <Outlet />
    </div>
  );
}
