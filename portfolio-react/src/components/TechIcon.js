import React from 'react';

function TechIcon({ children }) {
  return (
    <div style={{
      width: 'clamp(2rem, 4vw, 2.5rem)',
      height: 'clamp(2rem, 4vw, 2.5rem)',
      background: '#1a1a1a',
      border: '1px solid #374151',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
      fontWeight: 600,
      color: '#ffffff'
    }}>
      {children}
    </div>
  );
}

export default TechIcon;
