import React, { useEffect, useState } from 'react';
import { getActivityLogs } from '../api'; // REST API call to fetch existing logs
import useWebSocketLogs from '../utils/useWebSocketLogs'; // WebSocket hook for real-time updates
import { ActivityLog } from '../utils/types';

const LogDisplay: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  // WebSocket for real-time updates
  const socketUrl = 'ws://localhost:8080/websocket/logs'; // Replace with your WebSocket server URL
  const { logs: liveLogs } = useWebSocketLogs(socketUrl);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const activityLogs = await getActivityLogs();
        setLogs(activityLogs.map((log: ActivityLog) => log.message));
      } catch (error) {
        console.error('Error fetching activity logs:', error);
        // Handle error gracefully (e.g., show a message to the user)
      }
    };
    fetchLogs();
  }, []);

  // Merge live WebSocket logs with initially fetched logs
  const allLogs = [...logs, ...liveLogs];

  return (
    <div>
      <h2>Activity Log</h2>
      <ul>
        {allLogs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogDisplay;
