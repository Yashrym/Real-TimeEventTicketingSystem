import React from 'react';
import { startSystem, stopSystem } from '../api';

const ControlPanel: React.FC = () => {
  const handleStartSystem = async () => {
    await startSystem();
    // Display a success message or update the UI as needed
  };

  const handleStopSystem = async () => {
    await stopSystem();
    // Display a success message or update the UI as needed
  };

  return (
    <div>
      <button onClick={handleStartSystem}>Start System</button>
      <button onClick={handleStopSystem}>Stop System</button>
    </div>
  );
};

export default ControlPanel;