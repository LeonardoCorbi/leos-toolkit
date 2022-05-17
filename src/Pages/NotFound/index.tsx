import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    // window.location.pathname = 'google.com';
  }, []);
  return (<h1>Page not found</h1>);
};

export default NotFound;
