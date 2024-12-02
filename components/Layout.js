import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Navbar />
      {/* Main Content */}
      <main
        style={{
          marginLeft: '220px', // Matches sidebar width
          flex: 1,
          overflowY: 'auto', // Allow scrolling within main content
          padding: '20px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;