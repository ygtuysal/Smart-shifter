import React from 'react';
import DotLoader from './DotLoader';

const FullScreenLoader: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 9999,
      }}
    >
      <DotLoader
        colors={['#ffffff', '#ffffff', '#ffffff']}
        size={10}
        duration={0.5}
      />
    </div>
  );
};

export default FullScreenLoader;
