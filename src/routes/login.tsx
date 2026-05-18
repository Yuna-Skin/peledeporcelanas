import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: (search.redirect as string) || "/",
  }),
  beforeLoad: async ({ search }) => {
    if (typeof window === "undefined") return;
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      throw redirect({ to: search.redirect });
    }
  },
  component: LoginPage,
});

type Mode = "signin" | "signup";

function LoginPage() {
  const navigate = useNavigate();
  const search = Route.useSearch();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) navigate({ to: search.redirect });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate, search.redirect]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);

    try {
      if (mode === "signin") {
        const { error: err } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (err) throw err;
        navigate({ to: search.redirect });
      } else {
        const { data, error: err } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: { name: name.trim() || undefined },
            emailRedirectTo: window.location.origin,
          },
        });
        if (err) throw err;
        if (data.session) {
          navigate({ to: search.redirect });
        } else {
          setInfo(
            "Conta criada! Verifique seu email para confirmar e depois faça login.",
          );
          setMode("signin");
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro inesperado.";
      setError(translate(message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-5 py-10">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
            Desafio 28 Dias · Yuna Skin
          </p>
          <h1 className="font-serif italic text-3xl text-foreground leading-tight">
            {mode === "signin" ? "Entre na sua conta" : "Crie sua conta"}
          </h1>
          <div className="mx-auto my-4 h-px w-12 bg-primary/50" />
          <p className="text-sm text-foreground/70">
            {mode === "signin"
              ? "Acesse sua biblioteca de bônus."
              : "Cadastre-se para acessar os bônus."}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-card border border-border rounded-2xl p-6 shadow-[0_15px_40px_-15px_oklch(0.45_0.05_20/0.3)]"
        >
          {mode === "signup" && (
            <div>
              <label className="block text-xs font-medium text-foreground/80 mb-1.5">
                Nome
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Seu nome"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-foreground/80 mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="voce@email.com"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-foreground/80 mb-1.5">
              Senha
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2">
              {error}
            </p>
          )}
          {info && (
            <p className="text-xs text-foreground/80 bg-primary/10 border border-primary/20 rounded-md px-3 py-2">
              {info}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60 transition"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {mode === "signin" ? "Entrar" : "Criar conta"}
          </button>

          <button
            type="button"
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setError(null);
              setInfo(null);
            }}
            className="w-full text-xs text-foreground/60 hover:text-foreground transition"
          >
            {mode === "signin"
              ? "Não tem conta? Criar conta"
              : "Já tem conta? Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

function translate(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("invalid login credentials")) return "Email ou senha inválidos.";
  if (m.includes("email not confirmed")) return "Confirme seu email antes de entrar.";
  if (m.includes("user already registered")) return "Este email já está cadastrado.";
  if (m.includes("password should be")) return "A senha deve ter pelo menos 6 caracteres.";
  return message;
}
