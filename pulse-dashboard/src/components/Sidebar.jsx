const navItems = [
  {
    label: "Overview",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Accounts",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c.8-4.1 3.4-6 8-6s7.2 1.9 8 6" />
      </svg>
    ),
  },
  {
    label: "Alerts",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
  {
    label: "Reports",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M7 15l4-5 3 3 5-7" />
      </svg>
    ),
  },
  {
    label: "Team",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c.6-4 2.5-6 6-6s5.4 2 6 6" />
        <path d="M15 14c3.5 0 5.2 1.8 6 5" />
      </svg>
    ),
  },
  {
    label: "Settings",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20h-2.6v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.6-1H6v-2.6h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V5h2.6v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1V14h-.1a1.7 1.7 0 0 0-1.6 1Z" />
      </svg>
    ),
  },
];

export default function Sidebar({
  activeItem,
  onNavigate,
  collapsed,
  onToggleCollapse,
}) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">N</div>

        {!collapsed && <span>Northstar</span>}
      </div>

      <nav aria-label="Main navigation">
        <ul className="nav-list">
          {navItems.map((item) => {
            const isActive = item.label === activeItem;

            return (
              <li key={item.label}>
                <button
                  className={`nav-item ${
                    isActive ? "nav-item-active" : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={collapsed ? item.label : undefined}
                  title={collapsed ? item.label : undefined}
                  onClick={() => {
                    if (
                      item.label === "Overview" ||
                      item.label === "Reports"
                    ) {
                      onNavigate(item.label.toLowerCase());
                    }
                  }}
                >
                  {item.icon}

                  {!collapsed && (
                    <span>{item.label}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        className="sidebar-toggle"
        onClick={onToggleCollapse}
        aria-label={
          collapsed
            ? "Expand sidebar"
            : "Collapse sidebar"
        }
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          {collapsed ? (
            <path d="m9 5 7 7-7 7" />
          ) : (
            <path d="m15 5-7 7 7 7" />
          )}
        </svg>

        {!collapsed && <span>Collapse</span>}
      </button>
    </aside>
  );
}