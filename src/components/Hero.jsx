import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 sm:py-20 bg-gray-200 dark:bg-[#212121] text-gray-800 dark:text-gray-200 mt-10 sm:mt-0">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-sm sm:text-base text-gray-900 mb-2 dark:text-gray-400">
            WELCOME TO MY PORTFOLIO
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-white mb-2">
            Hi, I'm <span className="text-[#66b58f]">Abdul Makdoom</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-[#66b58f]">
            <span className="mr-2">a</span>
            <span className="text-gray-900 dark:text-gray-300 inline-block">
              <Typewriter
                words={[
                  ' MERN Stack Developer',
                  ' Frontend Developer',
                  ' Backend Developer',
                  ' Software Developer',
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
            Passionate MERN Stack Developer with expertise in both Frontend and Backend. I love building beautiful, performant, and scalable web apps.
          </p>

          {/* Social & Tech Icons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-6 sm:gap-16">
            <div>
              <p className="font-semibold text-sm mb-2">FIND ME HERE</p>
              <div className="flex gap-4 justify-center sm:justify-start">
                <a href="https://github.com/Abdulmakdoom" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#cbcbcb] dark:bg-gray-700 rounded-md hover:shadow-md transition hover:-translate-y-1">
                  <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 dark:text-gray-300" />
                </a>
                <a href="https://www.linkedin.com/in/abdul-makdoom-253893237" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#cbcbcb] dark:bg-gray-700 rounded-md hover:shadow-md transition hover:-translate-y-1">
                  <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-sm mb-2">LEARNING</p>
              <div className="flex gap-4 justify-center sm:justify-start">
                <div className="p-3 bg-[#cbcbcb] dark:bg-gray-700 rounded-md hover:shadow-md transition hover:-translate-y-1">
                  <FaReact className="w-6 h-6 sm:w-8 sm:h-8 text-sky-400/80" />
                </div>
                <div className="p-3 bg-[#cbcbcb] dark:bg-gray-700 rounded-md hover:shadow-md transition hover:-translate-y-1">
                  <FaNodeJs className="w-6 h-6 sm:w-8 sm:h-8 text-green-700/90" />
                </div>
                <div className="p-3 bg-[#cbcbcb] dark:bg-gray-700 rounded-md hover:shadow-md transition hover:-translate-y-1">
                  <FaJs className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300/90" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1, rotateX: 4, rotateY: 4, y: -8 }}
          className="w-full"
        >
          <div className="bg-white dark:bg-[#212121] p-4 rounded-xl shadow-md border border-gray-300 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
            <motion.img
              src="https://media-hosting.imagekit.io/8262c3a69bb142f5/[freepicdownloader.com]-web-development-programmer-code-testing-augmented-reality-illustration-medium.jpg?Expires=1840037674&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jcZvhqsFWhtRrb1YLGafUx-mDOvDED~0o3EBmAqJjBPm0DS6hZKwfaXjS1~5U1r5oCyz12IktKY0plp29VlRBlImKn3vt5NFPnXebAJ2g~Ci5jTOOpjFEhfZuhta3qPCEjva1hA0ssNZfexnSrYg2V4S-nGHaJI9oN~bCyURI4hh82KRKkc5PGkU~rwdtsyamCWZgdiZqF5VvlIuk0wEq7WUM~M1wMYUEJw0OFgzeTXM6M1fCzS-82~~MPNAGd6tlPkWiaxWZNq1bdH~-Ad4S7MZDSNDTKVjjxRqSzp8QkF0ri4-VvAYSpx1h7AQUSSP2ugEV-33llxWI8Vann~31A__"
              alt="Developer"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;




