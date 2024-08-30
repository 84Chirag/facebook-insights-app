// src/App.js

import React, { useState } from 'react';
import LoginButton from './components/LoginButton';
import PageInsights from './components/PageInsights';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <h1>Facebook Page Insights</h1>
      {!user ? (
        <LoginButton onLogin={setUser} />
      ) : (
        <div>
          <h2>Welcome, {user.name}</h2>
          <img src={user.picture.data.url} alt="User Profile" />
          <PageInsights accessToken={user.accessToken} pageId="your-page-id" />
        </div>
      )}
    </div>
  );
}

export default App;
