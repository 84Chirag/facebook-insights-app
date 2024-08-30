// src/components/LoginButton.js

import React from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

function LoginButton({ onLogin }) {
  const responseFacebook = (response) => {
    if (response.accessToken) {
      const { accessToken, userID } = response;

      // Send the access token to your backend to log in the user
      axios.post('/api/facebook-login', {
        accessToken,
        userId: userID,
      })
      .then(res => {
        // Handle the response, e.g., update state, inform parent component
        onLogin(res.data);
      })
      .catch(err => {
        console.error('Error logging in with Facebook:', err);
      });
    } else {
      console.error('Facebook login failed:', response);
    }
  };

  return (
    <FacebookLogin
      appId = {process.env.FACEBOOK_APP_ID} // replace with your app ID
      autoLoad={false} // Set to true if you want to auto-load the login dialog
      fields="name,email,picture"
      callback={responseFacebook}
      icon="fa-facebook"
    />
  );
}

export default LoginButton;
