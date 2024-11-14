import { useState, useEffect } from 'react';

function LightModeToggle() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isLightMode);
  }, [isLightMode]);

  return (
    <button
      onClick={() => setIsLightMode(!isLightMode)}
      className="fixed top-8 right-8 p-3bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-gray-800 dark:to-gray-900 rounded-full focus:outline-none"
    >
      {isLightMode ? '☀️' : '🌙'}
    </button>
  );
}

export default LightModeToggle;
