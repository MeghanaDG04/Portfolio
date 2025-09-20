import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Experienced in building complete web applications using modern frameworks and technologies."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Open Source Passion",
      description: "Active contributor to open-source projects, helping build better tools for the developer community."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Strong foundation in data structures, algorithms, and system design for efficient solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-black transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a dedicated <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science and Engineering student</span> at 
                  Mangalore Institute of Technology and Engineering with a strong passion for creating meaningful digital experiences.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  With solid foundations in <span className="font-semibold text-purple-600 dark:text-purple-400">programming, data structures, and problem solving</span>, 
                  I love tackling complex problems and building solutions that make a real impact.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey spans from <span className="font-semibold text-green-600 dark:text-green-400">full-stack development</span> to 
                  active participation in open-source communities, where I contribute to projects that help developers worldwide.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Current CGPA: 8.94
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Maintaining academic excellence while actively participating in internships, 
              open-source contributions, and building impactful projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;