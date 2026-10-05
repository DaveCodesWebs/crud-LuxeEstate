export default function Loading() {
  return (
    <div className="dashboard-container skeleton-active">
      <header className="dashboard-header">
        <div className="header-brand">
          <div className="logo-icon">🟩</div>

          <div className="header-title-group-skeleton">
            <div className="skeleton-line skeleton-title-sm"></div>
            <div className="skeleton-line skeleton-text-sm"></div>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="content-header">
          <div className="skeleton-line skeleton-heading"></div>
          <div className="skeleton-line skeleton-btn"></div>
        </div>

        <div className="content-filter-bar">
          <div className="skeleton-line skeleton-input"></div>
          <div className="skeleton-line skeleton-select"></div>
        </div>

        <div className="table-card">
          <div className="skeleton-table">
            <div className="skeleton-table-header"></div>

            {[1,2,3,4,5].map(i => (
              <div key={i} className="skeleton-table-row">
                <div className="skeleton-line skeleton-checkbox"></div>
                <div className="skeleton-line skeleton-id"></div>
                <div className="skeleton-line skeleton-title"></div>
                <div className="skeleton-line skeleton-price"></div>
                <div className="skeleton-line skeleton-location"></div>
                <div className="skeleton-line skeleton-category"></div>
                <div className="skeleton-line skeleton-status"></div>
                <div className="skeleton-line skeleton-actions"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}