import axios from 'axios';
import { Ticket, Configuration, ActivityLog } from '../utils/types';

const API_BASE_URL = 'http://localhost:8080/api';

export const getAvailableTickets = async (): Promise<Ticket[]> => {
  const response = await axios.get(`${API_BASE_URL}/tickets/available`);
  return response.data;
};

export const updateConfiguration = async (
    config: Configuration
  ): Promise<void> => {
    await axios.put(`${API_BASE_URL}/configuration/save`, config);
  };

  export const startSystem = async (): Promise<void> => {
    await axios.post(`${API_BASE_URL}/configuration/start`);
  };
  
  export const stopSystem = async (): Promise<void> => {
    await axios.post(`${API_BASE_URL}/configuration/stop`);
  };
  export const getActivityLogs = async (): Promise<ActivityLog[]> => {
    const response = await axios.get(`${API_BASE_URL}/logs`);
    return response.data;
  };

export const getConfiguration = async (): Promise<Configuration> => {
    const response = await axios.get(`${API_BASE_URL}/configuration/current`);
    return response.data;
  };