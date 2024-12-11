import React from 'react';
import ConfigurationForm from './components/ConfigurationForm';
import TicketDisplay from './components/TicketDisplay';
import ControlPanel from './components/ControlPanel';
import LogDisplay from './components/LogDisplay';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="main-topic">Real Time Ticketing System</h1>
      <ConfigurationForm />
      <div className="centered-content">
        <div className="shared-style">
          <TicketDisplay />
        </div>
        <ControlPanel />
        <div className="shared-style">
          <LogDisplay />
        </div>
      </div>
    </div>
  );
};

export default App;