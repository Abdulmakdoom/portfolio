
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import DarkModeToggle from './darkMode';  // Import DarkModeToggle component

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm dark:bg-[#313131] dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <FaCode className="text-[#66b58f] text-2xl" />
            <span className="text-2xl font-bold text-[#66b58f]">{'Abdul Makdoom'}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <a 
              href="#home" 
              className="nav-link text-gray-800 dark:text-white hover:text-[#66b58f] dark:hover:text-[#66b58f]"
            >
              Home
            </a>
            <a 
              href="#skills" 
              className="nav-link text-gray-800 dark:text-white hover:text-[#66b58f] dark:hover:text-[#66b58f]"
            >
              Skills
            </a>
            <a 
              href="#portfolio" 
              className="nav-link text-gray-800 dark:text-white hover:text-[#66b58f] dark:hover:text-[#66b58f]"
            >
              Projects
            </a>
            <a 
              href="#blog" 
              className="nav-link text-gray-800 dark:text-white hover:text-[#66b58f] dark:hover:text-[#66b58f]"
            >
              Blog
            </a>
            <a 
              href="#contact" 
              className="nav-link text-gray-800 dark:text-white hover:text-[#66b58f] dark:hover:text-[#66b58f]"
            >
              Contact
            </a>
          </motion.div>

          <div className="flex items-center ml-5 space-x-20">
            {/* Dark Mode Toggle Button */}
            <div className="mr-6">
              <DarkModeToggle />
            </div>

            {/* Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1OiKcMEUfTRkuavR5I3ei09AoVx5AU4yL/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-2 bg-[#66b58f] text-white rounded-md hover:bg-[#248255] transition-colors"
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
