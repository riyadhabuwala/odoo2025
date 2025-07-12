import '../css_comp/Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        User Dashboard
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Card */}
        <div className="dashboard-topcard">
          <div className="dashboard-avatar"></div>

          <div className="dashboard-stats">
            <div className="dashboard-stat-box">Points: 80</div>
            <div className="dashboard-stat-box">Swaps: 5</div>
            <div className="dashboard-stat-box">Listings: 3</div>
            <div className="dashboard-stat-box">Purchases: 2</div>
          </div>

          <div className="dashboard-welcome">
            Welcome back, Jigna! Ready to explore more swaps?
          </div>
        </div>

        {/* Listings */}
        <h2 className="section-title">My Listings</h2>
        <div className="dashboard-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="dashboard-card">Item {i}</div>
          ))}
        </div>

        {/* Purchases */}
        <h2 className="section-title">My Purchases</h2>
        <div className="dashboard-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="dashboard-card">Item {i}</div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        © 2025 SwapIt. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
