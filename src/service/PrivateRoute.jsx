import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute() {
  const { password, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loading-container">
        <h2 className="loading"></h2>
      </div>
    );
  }

  return password ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;