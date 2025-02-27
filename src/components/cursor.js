// src/components/Cursor.js
import { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);
  
  return (
    <div 
      className="fixed w-16 h-16 rounded-full bg-blue-600 pointer-events-none mix-blend-difference z-50"
      style={{ 
        left: `${position.x - 32}px`, 
        top: `${position.y - 32}px`,
        transition: 'transform 0.1s ease-out'
      }}
    />
  );
};

export default Cursor;