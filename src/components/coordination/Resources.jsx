import React, { useState } from 'react';

const Resources = () => {
  const [resources, setResources] = useState(['Venue', 'Equipment']);
  const [allocation, setAllocation] = useState({});

  const allocateResource = (resource, event) => {
    setAllocation({ ...allocation, [event]: resource });
  };

  return (
    <div className="resources-container p-4">
      <h2 className="text-xl font-bold mb-2">Resource Allocation</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index} className="mb-1">
            {resource}
            <button
              onClick={() => allocateResource(resource, `Event ${index + 1}`)}
              className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Allocate to Event {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h3 className="text-lg font-semibold mt-2">Allocations</h3>
        <ul>
          {Object.keys(allocation).map((event, index) => (
            <li key={index} className="mb-1">
              {event}: {allocation[event]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
