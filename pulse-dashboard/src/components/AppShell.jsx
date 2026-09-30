import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function AppShell({
  children,
  activeItem,
  title,
  onNavigate,
  sidebarCollapsed,
  onToggleSidebar,
  theme,
  onToggleTheme,
  searchQuery,
  onSearchChange,
}) {
  return (
    <div
      className={`app-shell ${
        sidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >

        <a className="skip-link" href="#main-content">
            Skip to content
        </a>

        <Sidebar
            activeItem={activeItem}
            onNavigate={onNavigate}
            collapsed={sidebarCollapsed}
            onToggleCollapse={onToggleSidebar}
        />

        <Header
            title={title}
            theme={theme}
            onToggleTheme={onToggleTheme}
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
        />

        <main id="main-content" className="main-content">
            {children}
        </main>

        <Footer />
    </div>
  );
}