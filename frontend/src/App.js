import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [backendMessage, setBackendMessage] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <div className="App">
      {token ? (
        <div>
          <h2>Welcome, User!</h2>
          {/* Render authenticated components here */}
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
