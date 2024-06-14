// src/components/TestConnection.jsx

import React, { useState, useEffect } from 'react';

const TestConnection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make API request when component mounts
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Test Connection</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>Data from Server:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TestConnection;
