export const LOGO_URL =
  "https://res.cloudinary.com/dqsuj0pjy/image/upload/v1779080514/FastBurn_3_z6feak.png";

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <img
      src={LOGO_URL}
      alt="Yuna Skin"
      className={className}
      draggable={false}
    />
  );
}
