import React from 'react';
import { startSystem, stopSystem } from '../api';

const ControlPanel: React.FC = () => {
  const handleStartSystem = async () => {
    try {
      await startSystem();
      // Display a success message or update the UI as needed
    } catch (error) {
      console.error('Error starting the system:', error);
      // Display an error message
    }
  };

  const handleStopSystem = async () => {
    try {
      await stopSystem();
      // Display a success message or update the UI as needed
    } catch (error) {
      console.error('Error stopping the system:', error);
      // Display an error message
    }
  };

  return (
    <div className="control-panel">
      <button className='start-button' onClick={handleStartSystem}>Start System</button>
      <button className='stop-button' onClick={handleStopSystem}>Stop System</button>
    </div>
  );
};

export default ControlPanel;