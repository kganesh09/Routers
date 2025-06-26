import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRoutes from './Routes/AdminRoutes';
import UserRoutes from './Routes/UserRoutes';
import GeneralRoutes from './Routes/GeneralRoutes';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Home from './pages/Home';
import Reports from './pages/Reports';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/" element={<GeneralRoutes />}>
          <Route index element={<Home />} />
          <Route path="reports" element={<Reports />} />
          <Route path="view-only" element={<div>View Only</div>} />
        </Route>

        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
