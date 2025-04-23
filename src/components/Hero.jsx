import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-200 dark:bg-[#212121] text-gray-800 dark:text-gray-200">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg text-gray-900 mb-4 dark:text-gray-400">WELCOME TO MY PORTFOLIO</h2>
          
          {/* Make sure everything is in one line */}
          <h1 className="text-6xl font-bold mb-4 text-gray-700 dark:text-white">
            Hi, I'm <div className="text-[#66b58f]">Abdul Makdoom</div>
          </h1>

          <h2 className="text-3xl mb-6 font-bold text-[#66b58f] dark:text-[#66b58f]">
            <span className="font-bold text-4xl">a</span>
            <span className="text-gray-900 font-bold text-4xl dark:text-gray-300">
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

          <p className="text-gray-600 mb-8 dark:text-gray-400">
            Passionate MERN Stack Developer with expertise in both Frontend and Backend development. Continuously exploring new technologies and embracing challenges to build innovative, scalable, and efficient web solutions.
          </p>

          <div className="flex gap-60 gap-x-30">
            <p className="font-semibold mb-4 ml-4">FIND ME HERE</p>
            <p className="font-semibold">LEARNING</p>
          </div>

          <div className="flex gap-20 gap-x-40">
            <div className="flex gap-4">
              <a href="https://github.com/Abdulmakdoom" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#cbcbcb] dark:bg-gray-700 rounded-md hover:shadow-lg transition-all hover:-translate-y-2">
                <FaGithub className="w-10 h-10 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/abdul-makdoom-253893237" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#cbcbcb] dark:bg-gray-700 rounded-md hover:shadow-lg transition-all hover:-translate-y-2">
                <FaLinkedin className="w-10 h-10 text-blue-500" />
              </a>
            </div>

            <div className="mr-10 flex gap-4 btnShadow mr-7 hover:text-[#66b58f]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#cbcbcb] dark:bg-gray-700 shadow-md rounded-md hover:shadow-lg transition-all hover:-translate-y-2 hover:text-[#66b58f]"
              >
                <FaReact className="w-10 h-10 text-sky-400/80 dark:text-sky-400/80" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#cbcbcb] dark:bg-gray-700 shadow-md rounded-md hover:shadow-lg transition-all hover:-translate-y-2 hover:text-[#66b58f]"
              >
                <FaNodeJs className="w-10 h-10 text-green-700/90 dark:text-green-700/90" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#cbcbcb] dark:bg-gray-700 shadow-md rounded-md hover:shadow-lg transition-all hover:-translate-y-2 hover:text-[#66b58f]"
              >
                <FaJs className="w-10 h-10 text-yellow-300/90 dark:text-yellow-300/90" />
              </a>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
           initial={{ opacity: 0, y: 10, scale: 0.8 }}
           animate={{ opacity: 1, y: 0, scale: 1.3 }}
           transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.2, rotateX: 4, rotateY: 4, y: -8 }}
           className="relative perspective-1000"
         >
           <div className="bg-white p-4 rounded-lg shadow-lg dark:bg-[#212121] transition-all duration-500 ease-in-out hover:shadow-gray-600 w-3/5 mx-auto border border-gray-300 border-10"> {/* Adjust border width here */}
             <motion.img 
               src="https://media-hosting.imagekit.io/8262c3a69bb142f5/[freepicdownloader.com]-web-development-programmer-code-testing-augmented-reality-illustration-medium.jpg?Expires=1840037674&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jcZvhqsFWhtRrb1YLGafUx-mDOvDED~0o3EBmAqJjBPm0DS6hZKwfaXjS1~5U1r5oCyz12IktKY0plp29VlRBlImKn3vt5NFPnXebAJ2g~Ci5jTOOpjFEhfZuhta3qPCEjva1hA0ssNZfexnSrYg2V4S-nGHaJI9oN~bCyURI4hh82KRKkc5PGkU~rwdtsyamCWZgdiZqF5VvlIuk0wEq7WUM~M1wMYUEJw0OFgzeTXM6M1fCzS-82~~MPNAGd6tlPkWiaxWZNq1bdH~-Ad4S7MZDSNDTKVjjxRqSzp8QkF0ri4-VvAYSpx1h7AQUSSP2ugEV-33llxWI8Vann~31A__" 
               alt="Developer" 
               //className="w-full h-64 max-w-xs mx-auto rounded-md object-cover"
              // whileHover={{ scale: 1.05, y: -5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




