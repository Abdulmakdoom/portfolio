import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import DarkModeToggle from './darkMode';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm dark:bg-[#313131] dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <FaCode className="text-[#66b58f] text-xl sm:text-2xl" />
            <span className="text-xl sm:text-2xl font-bold text-[#66b58f]">Abdul Makdoom</span>
          </motion.div>

          {/* Nav Links (Hidden on small screens) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {['home', 'skills', 'portfolio', 'blog', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="nav-link text-gray-800 dark:text-white hover:text-[#66b58f] dark:hover:text-[#66b58f]"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </motion.div>

          {/* Right Side: Always visible (Name, DarkMode, Resume) */}
          <div className="flex items-center space-x-4 mr-9 sm:mr-0">
            <DarkModeToggle/>
            <motion.a
              href="https://drive.google.com/file/d/1OiKcMEUfTRkuavR5I3ei09AoVx5AU4yL/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#66b58f] text-white text-sm sm:text-base rounded-md hover:bg-[#248255] transition-colors"
            >
              Resume
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
