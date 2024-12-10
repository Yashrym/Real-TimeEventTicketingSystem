import React, { useState, useEffect } from 'react';
import { getActivityLogs } from '../api';
import { ActivityLog } from '../utils/types';

const LogDisplay: React.FC = () => {
  const [logs, setLogs] = useState<ActivityLog[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const activityLogs = await getActivityLogs();
      setLogs(activityLogs);
    };
    fetchLogs();
    // Implement a polling mechanism or WebSockets to update logs in real-time
  }, []);

  return (
    <div>
      <h2>Activity Log</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogDisplay;