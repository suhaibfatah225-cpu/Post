import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(localStorage.getItem('userToken'));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('userData');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem('userToken', token);
    } else {
      localStorage.removeItem('userToken');
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('userData', JSON.stringify(user));
    } else {
      localStorage.removeItem('userData');
    }
  }, [user]);

  const setToken = (newToken) => {
    setTokenState(newToken);
  };

  const saveUser = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setTokenState(null);
    setUser(null);
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, user, setToken, saveUser, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};