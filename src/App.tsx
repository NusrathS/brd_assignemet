import React from 'react';
import './App.css';
import EmployeeNavBar from './components/EmployeeNavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <EmployeeNavBar /> {/* Render the EmployeeNavBar component */}
    </div>
  );
};

export default App;
