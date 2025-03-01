import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', background: '#f4f4f4', padding: '10px' }}>
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li><Link to="/dashboard">Overview</Link></li>
            <li><Link to="/dashboard/analytics">Analytics</Link></li>
            <li><Link to="/dashboard/settings">Settings</Link></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '10px' }}>
        <Outlet /> {/* Renders child routes */}
      </main>
    </div>
  );
};

export default DashboardLayout;