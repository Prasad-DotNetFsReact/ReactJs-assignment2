// src/components/refpandpass/Welcome.js
import React from 'react';

function Welcome({ userDetails }) {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Email: {userDetails.email}</p>
      <p>Password: {userDetails.password}</p>
    </div>
  );
}

export default Welcome;
