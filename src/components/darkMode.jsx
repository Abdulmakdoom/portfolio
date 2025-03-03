import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importing the moon and sun icons

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled on initial load
    if (localStorage.getItem('darkMode') === 'true') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md bg-gray-300 dark:bg-[#212121] flex items-center justify-center"
    >
      {/* Conditionally render the sun or moon icon based on dark mode state */}
      {isDarkMode ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-800 dark:text-white" />
      )}
    </button>
  );
};

export default DarkModeToggle;
