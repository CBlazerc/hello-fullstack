export default function EmptyState() {
  return (
    <div className="empty-state">
      <svg
        className="empty-illustration"
        viewBox="0 0 160 120"
        aria-hidden="true"
      >
        <rect
          x="25"
          y="20"
          width="110"
          height="80"
          rx="10"
        />
        <path d="M45 45h70M45 65h45M45 85h65" />
        <circle cx="117" cy="82" r="15" />
        <path d="m112 82 4 4 7-8" />
      </svg>

      <h2>No data to display</h2>
      <p>
        There are currently no records matching this view.
      </p>
    </div>
  );
}