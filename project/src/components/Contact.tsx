import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'meghanadgaonkar04@gmail.com',
      href: 'mailto:meghanadgaonkar04@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/meghana',
      href: 'https://github.com/MeghanaDG04',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/meghana',
      href: 'https://www.linkedin.com/in/meghana-gaonkar-415653282/',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
  Get In Touch
</h2>
<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
<p className="text-xl text-black max-w-3xl mx-auto">
  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
</p>
</motion.div>

<div className="max-w-4xl mx-auto">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="space-y-8"
  >
    <div>
      <h3 className="text-3xl font-bold mb-6 text-black">
        Let's Connect
      </h3>
      <p className="text-lg text-black mb-8 leading-relaxed">
        Whether you're looking for a developer for your next project, want to collaborate 
        on open-source contributions, or just want to say hello, I'd love to hear from you!
      </p>
      
      <div className="flex items-center mb-6 text-black">
        <MapPin size={20} className="mr-3 text-blue-600" />
        <span>Mangalore, Karnataka, India</span>
      </div>
    </div>


            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {info.label}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
