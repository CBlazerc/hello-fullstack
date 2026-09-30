export default function KpiCard({
  label,
  figure,
  delta,
  direction,
  sparkline = false,
}) {
  const bars = [32, 58, 42, 76, 64];

  return (
    <article className="kpi-card">
      <div className="kpi-top">
        <span className="kpi-label">{label}</span>

        <span
          className={`delta delta-${direction}`}
        >
          {direction === "up" ? "↑" : "↓"} {delta}
        </span>
      </div>

      <div className="kpi-bottom">
        <strong className="kpi-figure">{figure}</strong>

        {sparkline && (
          <div
            className="sparkline"
            aria-label="Five point trend"
          >
            {bars.map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}