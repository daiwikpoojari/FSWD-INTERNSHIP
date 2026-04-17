import { Navigate, Outlet } from 'react-router-dom';

const RoleGuard = ({ allowedRoles, userRole }) => {
  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default RoleGuard;