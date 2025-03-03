import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiGit,
  SiTypescript
} from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
];

const Skills = () => {
  return (
   <section id="skills" className="py-20 bg-gray-200 dark:bg-[#212121]">
  <div className="max-w-[1300px] mx-auto px-4">
    <div className="text-center mb-12">
      <p className="text-emerald-500 mb-2">TECHNOLOGIES I WORK WITH</p>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">My Tech Stack</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            //className="bg-white p-6 rounded-lg shadow-xl ring-2 text-center hover:bg-[#66b58f] hover:shadow-xl transition-all dark:bg-[#212121] dark:hover:bg-[#66b58f]"
            className="bg-gray-100 p-6 rounded-lg shadow-2xl bg-cyan-200 shadow-lg shadow-cyan-100/30 text-center hover:bg-[#66b58f] hover:shadow-xl transition-all dark:bg-[#212121] dark:hover:bg-[#66b58f]"
          >
            <div className="transition-transform duration-300 transform hover:-translate-y-4">
              <Icon className="w-16 h-16 mx-auto mb-4" style={{ color: skill.color }} />
              <h3 className="text-lg font-medium dark:text-white">{skill.name}</h3>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

  );
};

export default Skills;


