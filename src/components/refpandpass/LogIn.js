// src/components/refpandpass/Login.js
import React, { useRef, useState } from 'react';
import Welcome from './Welcome';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [userDetails, setUserDetails] = useState(null);

  const handleLogin = () => {
    setUserDetails({
      email: emailRef.current.value,
      password: emailRef.current.value,
    });
  };

  return (
    <div>
      <input type="email" ref={emailRef} placeholder="Enter Email" />
      <input type="password" ref={passwordRef} placeholder="Enter Password" />
      <button onClick={handleLogin}>Login</button>
      {userDetails && <Welcome userDetails={userDetails} />}
    </div>
  );
}

export default Login;

