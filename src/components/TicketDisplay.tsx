import React, { useState, useEffect } from 'react';
import { getAvailableTickets } from '../api';
import { Ticket, TicketStatus } from '../utils/types';

const TicketDisplay: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const availableTickets = await getAvailableTickets();
      setTickets(availableTickets);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Available Tickets</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event Name</th>
            <th>Price</th>
            <th>Event Time</th>
            <th>Seat Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.eventName}</td>
              <td>{ticket.price}</td>
              <td>{ticket.eventTime}</td>
              <td>{ticket.seatNumber}</td>
              <td>{TicketStatus[ticket.status]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketDisplay;