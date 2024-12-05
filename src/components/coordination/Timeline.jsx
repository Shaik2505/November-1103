import React, { useState } from 'react';

const Timeline = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="timeline-container p-4">
      <h2 className="text-xl font-bold mb-2">Event Timeline</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="mb-1">{event}</li>
        ))}
      </ul>
      <button
        onClick={() => addEvent('New Event')}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Event
      </button>
    </div>
  );
};

export default Timeline;
