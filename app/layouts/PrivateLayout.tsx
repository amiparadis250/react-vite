import { Outlet, Link } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <div>
      <header>
        <h1>Private Layout</h1>
        <nav>
          <Link to="/profile">Profile</Link> | 
          <Link to="/settings">Settings</Link> | 
          <button>Logout</button>
        </nav>
      </header>
      <main>
        <Outlet /> {/* Renders child routes */}
      </main>
      <footer>
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
};

export default PrivateLayout;