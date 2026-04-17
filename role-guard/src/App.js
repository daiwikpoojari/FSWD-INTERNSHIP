import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleGuard from './components/RoleGuard';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import Unauthorized from './pages/Unauthorized';

function App() {
  const user = { role: 'user' }; 

  return (
    <Router>
      <Routes>
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<RoleGuard allowedRoles={['user', 'admin']} userRole={user.role} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<RoleGuard allowedRoles={['admin']} userRole={user.role} />}>
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;