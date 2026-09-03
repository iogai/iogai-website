// Mono-ish uppercase label with a blue dot (dot comes from .label::before).
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="label">{children}</span>;
}
