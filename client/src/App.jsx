import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout.jsx';
import NotFound from './pages/NotFound.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AdminPrivateRoute from './components/AdminPrivateRoute.jsx';

function App() {
  return (
    <Routes>
      {/* Main public route */}
      <Route path="/" element={<MainLayout />} />
      
      {/* Admin login route */}
      <Route path="/admin/login" element={<AdminLogin />} />
      
      {/* Protected admin routes */}
      <Route path="/admin/dashboard" element={<AdminPrivateRoute />}>
        <Route index element={<AdminDashboard />} />
      </Route>
      
      {/* Redirect /admin to /admin/dashboard */}
      <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
      
      {/* 404 Not Found route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
