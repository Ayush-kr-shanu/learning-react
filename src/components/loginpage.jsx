import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!username || !password) {
        setError('Please enter username and password');
        return;
      }
  
      console.log('Username:', username);
      console.log('Password:', password);
      setError('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error && <p>{error}</p>}
      </form>
    );
  }
  
export default LoginForm;