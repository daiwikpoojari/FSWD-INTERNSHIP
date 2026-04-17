import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState("Connecting...");

  useEffect(() => {
    // Calling our Backend API
    axios.get('http://localhost:5000/api/status')
      .then(res => setData(res.data.message))
      .catch(err => setData("Connection failed ❌"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stack Connection Test</h1>
      <p>Status: <strong>{data}</strong></p>
    </div>
  );
}

export default App;