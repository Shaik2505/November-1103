import React, { useState } from 'react';

const Performers = () => {
  const [performers, setPerformers] = useState(['Performer 1', 'Performer 2']);
  const [assignments, setAssignments] = useState({});

  const assignPerformer = (performer, slot) => {
    setAssignments({ ...assignments, [slot]: performer });
  };

  return (
    <div className="performers-container p-4">
      <h2 className="text-xl font-bold mb-2">Performer Assignments</h2>
      <ul>
        {performers.map((performer, index) => (
          <li key={index} className="mb-1">
            {performer}
            <button
              onClick={() => assignPerformer(performer, `Slot ${index + 1}`)}
              className="ml-2 bg-green-500 text-white px-2 py-1 rounded"
            >
              Assign to Slot {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h3 className="text-lg font-semibold mt-2">Assignments</h3>
        <ul>
          {Object.keys(assignments).map((slot, index) => (
            <li key={index} className="mb-1">
              {slot}: {assignments[slot]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Performers;
