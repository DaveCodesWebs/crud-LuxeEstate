export default function Header() {
  return (
    <header className="dashboard-header">
      <div className="header-brand">
       

        <div>
          <h1 className="header-title">LuxeEstate</h1>
          <p className="header-subtitle">
            Professional Property Management
          </p>
        </div>
      </div>

      <div className="header-profile">
        <div className="avatar">JD</div>
        <span className="profile-name">John Doe</span>
      </div>
    </header>
  );
}