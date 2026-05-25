function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Panel Administrativo</h1>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Ventas</h2>
          <p>RD$250,000</p>
        </div>

        <div className="dashboard-card">
          <h2>Boletos</h2>
          <p>1,250</p>
        </div>

        <div className="dashboard-card">
          <h2>Eventos</h2>
          <p>32</p>
        </div>

        <div className="dashboard-card">
          <h2>Usuarios</h2>
          <p>4,530</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;