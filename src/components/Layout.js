// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container mt-5">
      <header className="mb-4">
        <h1 className="text-center">Intergalactic Trade Network</h1>
      </header>
      {children}
    </div>
  );
};

export default Layout;
