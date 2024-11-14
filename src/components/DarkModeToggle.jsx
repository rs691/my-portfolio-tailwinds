import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className='dark:bg-gray-800'>
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed top-8 right-8 p-3 bg-gray-700 dark:bg-gray-500 text-white rounded-full focus:outline-none"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>


    
    </div>
  );
}

export default DarkModeToggle;
