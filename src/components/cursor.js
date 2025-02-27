// src/components/Cursor.js
import { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if device is touch-enabled
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    
    // Only show cursor on non-touch devices
    if (!isTouchDevice()) {
      setIsVisible(true);
      
      const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
      window.addEventListener('mousemove', updatePosition);
      return () => window.removeEventListener('mousemove', updatePosition);
    }
  }, []);
  
  // Don't render anything on touch devices
  if (!isVisible) return null;
  
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