import { useState } from "react";
import AppShell from "./components/AppShell";
import KpiCard from "./components/KpiCard";
import DataTable from "./components/DataTable";
import StateShowcase from "./components/StateShowcase";
import { overviewRows, reportRows, kpis } from "./data/data";

function Overview({
  rows,
  setRows,
  searchQuery,
  onNavigate,
}) {
  return (
    <>
      <section className="kpi-grid" aria-label="Key performance indicators">
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.label}
            label={kpi.label}
            figure={kpi.figure}
            delta={kpi.delta}
            direction={kpi.direction}
            sparkline={kpi.sparkline}
          />
        ))}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Activity</p>
            <h2>Recent accounts</h2>
          </div>

          <button
            className="button button-secondary"
            onClick={() => setRows([])}
          >
            Clear data
          </button>
        </div>

        <DataTable
          rows={rows}
          searchQuery={searchQuery}
        />
      </section>

      <StateShowcase
        onNavigate={onNavigate}
        onClearData={() => setRows([])}
        onRestoreData={() => setRows(overviewRows)}
      />
    </>
  );
}

function Reports({
  rows,
  setRows,
  searchQuery,
}) {
  return (
    <section className="content-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Analytics</p>
          <h2>Generated reports</h2>
        </div>

        <button
          className="button button-primary"
          onClick={() => setRows([])}
        >
          Clear report data
        </button>
      </div>

      <DataTable
        rows={rows}
        searchQuery={searchQuery}
      />

      {rows.length === 0 && (
        <button
          className="button button-secondary restore-button"
          onClick={() => setRows(reportRows)}
        >
          Restore report data
        </button>
      )}
    </section>
  );
}

export default function App() {
  // 1. View switching
  const [currentView, setCurrentView] = useState("overview");

  // 2. Theme
  const [theme, setTheme] = useState("light");

  // 3. Sidebar collapse
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // 5. Search
  const [searchQuery, setSearchQuery] = useState("");

  // 6. Actual table data
  const [overviewData, setOverviewData] = useState(overviewRows);
  const [reportData, setReportData] = useState(reportRows);

  const activeRows =
    currentView === "overview"
      ? overviewData
      : reportData;

  const setActiveRows =
    currentView === "overview"
      ? setOverviewData
      : setReportData;

  const pageTitle =
    currentView === "overview"
      ? "Overview"
      : "Reports";

  function handleNavigate(view) {
    if (view === "overview" || view === "reports") {
      setCurrentView(view);
      setSearchQuery("");
    }
  }

  return (
    <div data-theme={theme}>
      <AppShell
        activeItem={currentView === "overview" ? "Overview" : "Reports"}
        title={pageTitle}
        onNavigate={handleNavigate}
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={() =>
          setSidebarCollapsed((collapsed) => !collapsed)
        }
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
          )
        }
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      >
        {currentView === "overview" ? (
          <Overview
            rows={activeRows}
            setRows={setActiveRows}
            searchQuery={searchQuery}
            onNavigate={handleNavigate}
          />
        ) : (
          <Reports
            rows={activeRows}
            setRows={setActiveRows}
            searchQuery={searchQuery}
          />
        )}
      </AppShell>
    </div>
  );
}