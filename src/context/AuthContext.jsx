import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiry = localStorage.getItem('expiry');

    if (token && expiry && new Date().getTime() < Number(expiry)) {
      setLoggedIn(true);
    } else {
      handleLogout(); 
    }
  }, []);

  const handleLogin = () => {
    const expiry = new Date().getTime() + 3600000; 
    localStorage.setItem('token', 'sampleToken123');
    localStorage.setItem('expiry', expiry);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiry');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
