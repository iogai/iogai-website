// Render the configured statistic immediately, including in server HTML.
// Keeping the existing interface avoids changing callers. Trust metrics
// should not briefly display zero or depend on animation to be accurate.
export function CountUp({ value, unit }: { value: string; unit?: string }) {
  return (
    <span>
      {value}
      {unit ? <span className="text-ink-3">{unit}</span> : null}
    </span>
  );
}
