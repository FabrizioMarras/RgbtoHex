import React from 'react';
import './App.css';
import ColorConverter from './components/ColorConverter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ColorConverter />
    </div>
  );
};

export default App;
