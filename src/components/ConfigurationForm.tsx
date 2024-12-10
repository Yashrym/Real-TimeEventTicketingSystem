import React, { useState, useEffect } from 'react';
import { updateConfiguration, getConfiguration } from '../api';
import { Configuration } from '../utils/types';

const ConfigurationForm: React.FC = () => {
  const [formData, setFormData] = useState<Configuration>({
    id: 0,
    maxTicketCapacity: 0,
    totalTicketCapacity: 0,
    ticketReleaseRate: 0,
    ticketRetrievalRate: 0,
  });

  useEffect(() => {
    const fetchConfiguration = async () => {
      const config = await getConfiguration();
      setFormData(config);
    };
    fetchConfiguration();
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateConfiguration(formData);
    // Display a success message or update the UI as needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="number"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="maxTicketCapacity">Max Ticket Capacity:</label>
        <input
          type="number"
          id="maxTicketCapacity"
          name="maxTicketCapacity"
          value={formData.maxTicketCapacity}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="totalTicketCapacity">Total Ticket Capacity:</label>
        <input
          type="number"
          id="totalTicketCapacity"
          name="totalTicketCapacity"
          value={formData.totalTicketCapacity}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ticketReleaseRate">Ticket Release Rate (ms):</label>
        <input
          type="number"
          id="ticketReleaseRate"
          name="ticketReleaseRate"
          value={formData.ticketReleaseRate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ticketRetrievalRate">Ticket Retrieval Rate (ms):</label>
        <input
          type="number"
          id="ticketRetrievalRate"
          name="ticketRetrievalRate"
          value={formData.ticketRetrievalRate}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Save Configuration</button>
    </form>
  );
};

export default ConfigurationForm;