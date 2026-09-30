import { useMemo, useState } from "react";
import EmptyState from "./EmptyState";

const columns = [
  {
    key: "account",
    label: "Account",
  },
  {
    key: "owner",
    label: "Owner",
  },
  {
    key: "plan",
    label: "Plan",
  },
  {
    key: "activity",
    label: "Last activity",
  },
  {
    key: "status",
    label: "Status",
  },
];

export default function DataTable({
  rows,
  searchQuery,
}) {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  function handleSort(column) {
    if (sortColumn === column) {
      setSortDirection((direction) =>
        direction === "asc" ? "desc" : "asc"
      );
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  }

  /*
   * Derived state:
   *
   * We do NOT do:
   *
   * const [filteredRows, setFilteredRows] = useState(...)
   *
   * Instead, the visible data is derived from the source
   * rows + search query + sorting state.
   */
  const filteredRows = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return rows;
    }

    return rows.filter((row) =>
      columns.some((column) =>
        String(row[column.key])
          .toLowerCase()
          .includes(query)
      )
    );
  }, [rows, searchQuery]);

  const sortedRows = useMemo(() => {
    if (!sortColumn) {
      return filteredRows;
    }

    return [...filteredRows].sort((a, b) => {
      const aValue = String(a[sortColumn]).toLowerCase();
      const bValue = String(b[sortColumn]).toLowerCase();

      const comparison = aValue.localeCompare(bValue, undefined, {
        numeric: true,
        sensitivity: "base",
      });

      return sortDirection === "asc"
        ? comparison
        : -comparison;
    });
  }, [
    filteredRows,
    sortColumn,
    sortDirection,
  ]);

  /*
   * This catches both cases:
   *
   * 1. The actual data array is empty.
   * 2. Search filtering produced zero rows.
   */
  if (sortedRows.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => {
              const isSorted =
                sortColumn === column.key;

              return (
                <th
                  key={column.key}
                  scope="col"
                  aria-sort={
                    isSorted
                      ? sortDirection === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <button
                    className="table-sort-button"
                    onClick={() =>
                      handleSort(column.key)
                    }
                  >
                    <span>{column.label}</span>

                    <span
                      className={`sort-indicator ${
                        isSorted
                          ? "sort-indicator-active"
                          : ""
                      }`}
                      aria-hidden="true"
                    >
                      {isSorted
                        ? sortDirection === "asc"
                          ? "↑"
                          : "↓"
                        : "↕"}
                    </span>
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {sortedRows.map((row) => (
            <tr key={row.id}>
              <td>
                <strong>{row.account}</strong>
              </td>

              <td>{row.owner}</td>

              <td>{row.plan}</td>

              <td>{row.activity}</td>

              <td>
                <span
                  className={`status-pill status-${row.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <span className="status-dot" />
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}