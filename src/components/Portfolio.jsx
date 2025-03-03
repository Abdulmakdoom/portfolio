import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: 'WandeLust Hotel Viewing App',
      description: 'Developed a Full-stack web application for users to view and add hotel details, with authentication and secure sessions.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6ac113d1-b624-42ea-b333-adb249356c73.jpeg',
      tech: ['MongoDB', 'Express', 'Node.js', 'Cloudinary', 'Atlas Database'],
      github: 'https://github.com/Abdulmakdoom/Wanderlust_Clone',
      demo: 'https://wanderlust-clone-eqq7.onrender.com/'
    },
    {
      title: 'WandeLust Hotel Viewing App',
      description: 'Developed a Full-stack web application for users to view and add hotel details, with authentication and secure sessions.',
      image: 'https://i.postimg.cc/Kjn4VbP1/Screenshot-2025-02-22-at-6-27-30-PM.png',
      tech: ['MongoDB', 'Express', 'Node.js', 'Cloudinary', 'Atlas Database'],
      github: 'https://github.com/Abdulmakdoom/Wanderlust_Clone',
      demo: 'https://wanderlust-clone-eqq7.onrender.com/'
    },
    {
      title: 'WandeLust Hotel Viewing App',
      description: 'Developed a Full-stack web application for users to view and add hotel details, with authentication and secure sessions.',
      image: 'https://i.postimg.cc/Kjn4VbP1/Screenshot-2025-02-22-at-6-27-30-PM.png',
      tech: ['MongoDB', 'Express', 'Node.js', 'Cloudinary', 'Atlas Database'],
      github: 'https://github.com/Abdulmakdoom/Wanderlust_Clone',
      demo: 'https://wanderlust-clone-eqq7.onrender.com/'
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
                  className="object-contain w-full h-full"
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


