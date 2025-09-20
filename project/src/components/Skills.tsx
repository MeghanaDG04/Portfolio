import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillColors = [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-green-500 to-green-600',
    'from-orange-500 to-orange-600',
    'from-pink-500 to-pink-600',
    'from-indigo-500 to-indigo-600',
    'from-red-500 to-red-600',
    'from-teal-500 to-teal-600',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
  Technical Skills
</h2>
<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
<p className="text-xl text-black max-w-3xl mx-auto">
  A comprehensive toolkit of modern technologies and frameworks
</p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {skillCategory.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${skillColors[skillIndex % skillColors.length]} rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300`}></div>
                    <div className="relative px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-300">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skill Level Animation */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Proficiency Level</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {categoryIndex === 0 ? 'Advanced' : categoryIndex === 1 ? 'Intermediate' : 'Proficient'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skillColors[categoryIndex % skillColors.length]}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { 
                      width: categoryIndex === 0 ? '85%' : categoryIndex === 1 ? '75%' : '80%' 
                    } : { width: 0 }}
                    transition={{ duration: 1.5, delay: categoryIndex * 0.2 + 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl max-w-3xl mx-auto text-black">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-black">
              Always Learning
            </h3>
            <p className="dark:text-gray-300 text-black">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              Currently exploring advanced React patterns, cloud technologies, 
              and modern DevOps practices to stay at the forefront of development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;