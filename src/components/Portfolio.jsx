import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: 'VideoTube - Full-Stack Video Streaming Platform',
      description: 'Developed a full-stack web application similar to YouTube, allowing users to upload, view, and manage video content with secure authentication and seamless video streaming.',
      image: 'https://media-hosting.imagekit.io/72ca59a0fa534988/Screenshot%202025-04-23%20at%2011.19.14%E2%80%AFPM.png?Expires=1840038633&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=z4AduFEBdCO-b6zuCmQwHsbOfvZvi9mpXCzWnuMUbqEZiKlwlIXUV2Tpda6JuTNxYSocmigXi8HiKmKZ4i9R6thb9Qi58zbAQ0NBZL43WoZdDCGSTMlcuUzTPtVaMcjyh730DoLo0bTHGOTv4~MkjHvR5usi0JpHgCPG18cvouELUm9ldgOmvkgbaFSp6VtTKYPF4DY8mvyTh0eotgrtw6fQTR4yspfry-H3UXY5IDJblpNKEccjusgFYLcnbihKuGwl5dbaFZ29gfB~M8kyMZ96KSxpkzVhay63xDOG-9lZugRTTx48JDmU~6EkMgb6UbPK7HMDf2GsVh0WhBwB1w__',
      tech: ['React.js', 'MongoDB', 'Express', 'Node.js', 'JWT', 'Bcrypt', 'Cloudinary', 'Atlas Database'],
      github: 'https://github.com/Abdulmakdoom/videotube',
      demo: 'https://videotube-frontend-one.vercel.app/'
    },
    {
      title: 'WandeLust Hotel Viewing App',
      description: 'Developed a Full-stack web application for users to view and add hotel details, with authentication and secure sessions.',
      image: 'https://i.postimg.cc/Kjn4VbP1/Screenshot-2025-02-22-at-6-27-30-PM.png',
      tech: ['MongoDB', 'Express', 'Node.js', 'JWT', 'Cloudinary', 'Atlas Database'],
      github: 'https://github.com/Abdulmakdoom/Wanderlust_Clone',
      demo: 'https://wanderlust-clone-eqq7.onrender.com/'
    },
    {
      title: 'Coming Soon',
      description: 'Coming soon! A new project is in development with exciting features. Stay tuned for more updates.',
      image: 'https://img.freepik.com/free-vector/coming-soon-text-grunge-background_91128-1643.jpg?t=st=1745428589~exp=1745432189~hmac=dc3eecdbe750f9b017c2d5651f9bf716b717b5a587c01d4d70ff909d81e361ec&w=2000',
      tech: ['Coming soon...'],
      github: 'https://github.com/Abdulmakdoom/',
      demo: ''
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-200 dark:bg-[#212121] dark:text-white">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-emerald-500 mb-2">FEATURED PROJECTS</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Recent Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-[#212121] shadow-2xl bg-cyan-200 shadow-lg shadow-cyan-100/30 rounded-lg shadow-2xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-[#212121] p-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-contain w-full h-full aspect-video"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-500 hover:text-emerald-600 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition-colors"
                  >
                    <FaGithub className="text-gray-700 dark:text-gray-300" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Abdulmakdoom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-100 text-emerald-500 px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-800" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


