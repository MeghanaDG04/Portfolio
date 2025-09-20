import { Project, Experience, Education, Skill, Achievement, Certification } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Flight Management System',
    description: 'A comprehensive flight booking and management system with admin panel, user authentication, and booking management.',
    technologies: ['Java', 'Spring MVC', 'MySQL', 'HTML/CSS', 'JavaScript'],
    githubUrl: 'https://github.com/MeghanaDG04/Flight_Management_System.git',
    imageUrl: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=500',
    featured: true
  },
  {
    id: '2',
    title: 'GreenVolt',
    description: 'Sustainable energy management app shortlisted in UNISYS Ideathon Top 20. Features energy tracking and optimization.',
    technologies: ['Flutter', 'Node.js', 'SQLite'],
    githubUrl: 'https://github.com/MeghanaDG04/GreenVolt.git',
    imageUrl: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=500',
    featured: true
  },
  {
    id: '3',
    title: 'Recipedia',
    description: 'Recipe sharing platform with user authentication, recipe CRUD operations, and social features.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    githubUrl: 'https://github.com/MeghanaDG04/RECIPEDIA.git',
    liveUrl: 'https://recipedia-frontend-q872.onrender.com/',
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
    featured: false
  },
  {
    id: '4',
    title: 'MindFit',
    description: 'Mental health and fitness tracking application with mood tracking and wellness insights.',
    technologies: ['Java', 'Spring MVC', 'MySQL'],
    githubUrl: 'https://github.com/MeghanaDG04/MindFit.git',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9emjCYgEjfrJdxpvgzWCcAvVB6euR3ICjew&s',
    featured: false
  },
  {
    id: '5',
    title: 'Aqua-Flow Analytics Platform',
    description: 'The Aqua-Flow Analytics Platform is an AI-powered solution designed to monitor drainage and sewage systems in real-time. ',
    technologies: ['Python', 'Flask', 'HTML', ' CSS'],
    githubUrl: 'https://github.com/MeghanaDG04/Aqua_Flow_Analysis_Platform_Project.git',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9elsydFlGbnETShZdx2BSnseEGs4GktVbRA&s',
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Infosys Springboard',
    role: 'Java Development Intern',
    duration: 'Jan 2024 - Mar 2024',
    description: [
      'Developed REST APIs using Java and Spring Boot framework',
      'Implemented database operations with MySQL for data persistence',
      'Collaborated with team members on enterprise-level projects',
      'Gained hands-on experience with industry-standard development practices'
    ],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Maven']
  },
  {
    id: '2',
    company: 'EY Systems',
    role: 'Full-Stack Development Intern',
    duration: 'Feb 2025 - March 2025',
    description: [
      'Built full-stack applications using MERN stack (MongoDB, Express.js, React.js, Node.js)',
      'Implemented state management with Redux for complex application workflows',
      'Deployed applications to cloud platforms with CI/CD pipelines',
      'Optimized application performance and implemented responsive design'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Cloud Deployment']
  },
  {
    id: '3',
    company: 'GirlScript Summer of Code 2025',
    role: 'Project Admin',
    duration: 'July 2025 - Present',
    description: [
      'Leading project coordination and community management initiatives',
      'Mentoring contributors and managing open-source project workflows',
      'Organizing technical workshops and coding sessions',
      'Facilitating collaboration between diverse development teams'
    ],
    technologies: ['Project Management', 'Git', 'GitHub', 'Community Building']
  },
  {
    id: '4',
    company: 'Open Source Connect 2025',
    role: 'Open Source Contributor',
    duration: 'Aug 2025 - Sep 2025',
    description: [
      'Contributing features and bug fixes to various open-source projects',
      'Improving project documentation and developer experience',
      'Participating in code reviews and collaborative development',
      'Building tools and utilities for the open-source community'
    ],
    technologies: ['Git', 'GitHub']
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Mangalore Institute of Technology and Engineering',
    degree: 'Bachelor of Engineering in Computer Science',
    duration: '2022 - 2026',
    grade: 'CGPA: 8.94',
    description: 'Specializing in software development, data structures, algorithms, and problem solving'
  },
  {
    id: '2',
    institution: 'The New English PU College',
    degree: 'Pre-University Course',
    duration: '2020 - 2022',
    grade: '95.67%',
    description: 'Physics, Chemistry, Mathematics, Computer Science'
  },
  {
    id: '3',
    institution: 'St. Thomas English Medium School',
    degree: 'Secondary School Certificate',
    duration: '2020',
    grade: '96.16%',
    description: 'All subjects with distinction'
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Java', 'C', 'JavaScript', 'SQL', 'HTML', 'CSS']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React.js', 'Node.js', 'Express.js', 'Spring MVC', 'Flutter', 'Bootstrap', 'Tailwind CSS']
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB', 'SQLite']
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Eclipse', 'Firebase']
  }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'UNISYS Ideathon Top 20',
    description: 'GreenVolt project was shortlisted among top 20 innovative solutions in sustainability category',
    date: '2024',
    icon: '🏆'
  },
  {
    id: '2',
    title: 'UNISYS Innovation Program',
    description: 'Selected for AquaFlow Analysis project in the innovation program for water management solutions',
    date: '2024',
    icon: '💡'
  },
  {
    id: '3',
    title: 'Pragati Path - Infosys Cohort 3',
    description: 'Selected for the prestigious Pragati Path program focusing on emerging technologies',
    date: '2025',
    icon: '🎯'
  },
  {
    id: '4',
    title: 'CodeClash 2025 - Rank 449',
    description: 'Achieved rank 449 in competitive programming contest among thousands of participants',
    date: '2025',
    icon: '⚡'
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'NPTEL Programming in Java',
    issuer: 'NPTEL',
    date: '2023',
    
  },
  {
    id: '2',
    name: 'Introduction to IOT',
    issuer: 'NPTEL',
    date: '2023',
    
  },
  {
    id: '3',
    name: 'Programming in Java ',
    issuer: 'Infosys Springboard',
    date: '2024',
  
  },
  {
    id: '4',
    name: 'Google IT Support Certificate',
    issuer: 'Coursera',
    date: '2023',
    
  },
  {
    id: '5',
    name: 'Postman API Expert',
    issuer: 'Postman',
    date: '2024',
    
  },
  {
    id: '6',
    name: 'Code 160',
    issuer: 'GeeksforGeeks',
    date: '2024',
  },
  {
    id: '7',
    name: 'Multi-Agent Collaborative Systems',
    issuer: 'IUCEE',
    date: '2024',
  },
  {
    id: '8',
    name: 'Basics of React',
    issuer: 'Code360',
    date: '2025',
  },
  {
    id: '9',
    name: 'Java part 1 & part 2',
    issuer: 'Code360',
    date: '2025',
  }
];
