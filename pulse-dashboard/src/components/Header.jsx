export default function Header({
  title,
  theme,
  onToggleTheme,
  searchQuery,
  onSearchChange,
}) {
  return (
    <header className="header-bar">
      <div className="header-title">
        <h1>{title}</h1>
        <span className="header-date">
          Tuesday, September 30
        </span>
      </div>

      <div className="header-actions">
        <label className="search-wrapper">
          <span className="sr-only">Search</span>

          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>

          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
          />
        </label>

        <button
          className="notification-button"
          aria-label="Notifications"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>

          <span className="notification-badge">3</span>
        </button>

        <div className="user-block">
          <div className="avatar-placeholder">JD</div>

          <div className="user-details">
            <strong>Jordan Davis</strong>
            <span className="role-tag">Admin</span>
          </div>
        </div>

        <button
          className={`theme-switch ${
            theme === "dark" ? "theme-switch-on" : ""
          }`}
          onClick={onToggleTheme}
          aria-label={`Switch to ${
            theme === "dark" ? "light" : "dark"
          } theme`}
          aria-pressed={theme === "dark"}
        >
          <span />
        </button>
      </div>
    </header>
  );
}