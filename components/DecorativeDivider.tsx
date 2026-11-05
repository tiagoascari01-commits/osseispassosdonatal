export function DecorativeDivider({ className = "", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  const lineColor = isDark ? "bg-natal-dourado/35" : "bg-natal-dourado-escuro/40";
  const borderColor = isDark ? "border-natal-dourado/35" : "border-natal-dourado-escuro/40";

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className={`h-px w-12 ${lineColor}`} />
      <div className={`w-2 h-2 rotate-45 border ${borderColor}`} />
      <div className={`h-px w-12 ${lineColor}`} />
    </div>
  );
}
