import { useState, useEffect } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const clearToken = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
  };

  return { token, clearToken };
};

export { useAuth };