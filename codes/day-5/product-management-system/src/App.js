import './App.css';
import DashBoard from './components/common/dashboard/DashBoard';
import NavigationRoutes from './routes/NavigationRoutes';
import React from 'react';

function App() {
  return (
    <div>
      <DashBoard />
      <NavigationRoutes />
    </div>
  );
}

export default App;