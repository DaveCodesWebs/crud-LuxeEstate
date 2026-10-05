
export default function Error({error, fetchData}){
    return(
        <div className="dashboard-container">
                <header className="dashboard-header">
                  <div className="header-brand">
                    <div className="logo-icon">🟩</div>
                    <div>
                      <h1 className="header-title">LuxeEstate</h1>
                      <p className="header-subtitle">
                        Professional Property Management
                      </p>
                    </div>
                  </div>
                </header>
                <main className="dashboard-content">
                  <div className="alert-box error">
                    <div className="alert-icon">⚠️</div>
                    <div className="alert-content">
                      <h3>System Error</h3>
                      <p>{error}</p>
                      <button className="btn btn-primary" onClick={() => fetchData()}>
                        Try Again
                      </button>
                    </div>
                  </div>
                </main>
              </div>
    )
}