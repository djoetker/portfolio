import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute() {
  const { password } = useAuth();

  return password ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;