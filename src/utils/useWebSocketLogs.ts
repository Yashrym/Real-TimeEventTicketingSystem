import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

const useWebSocketLogs = (socketUrl: string) => {
  const [logs, setLogs] = useState<string[]>([]);
  const { sendMessage, lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setLogs((prevLogs) => [...prevLogs, lastMessage.data]);
    }
  }, [lastMessage]);

  return { logs, sendMessage };
};

export default useWebSocketLogs;
