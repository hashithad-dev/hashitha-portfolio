import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import type { Project } from '../types';
import banana from '../assets/Banana Game.png';
import medical from '../assets/channeling-management.jpg';
import dogs from '../assets/Dogs Nutri.jpg';
import employee from '../assets/employee-management-system.png';
import rest from '../assets/Resturant.webp';

const projects: Project[] = [
 
  {
    title: 'Employee Management System',
    description: 'Developed a responsive animative website for employees',
    tech: ['Java'],
    github: 'https://github.com/Hashitha7/Employee-Management-System.git',
    image: employee,
  },
  {
    title: 'Resturant Website',
    description: 'Developed a responsive animative Resturant Website ',
    tech: ['HTML', 'CSS', 'PHP', 'JavaScript'],
    github: 'https://github.com/Hashitha7/Restaurant.git',
    image: rest,
  },
  {
    title: 'Dog Nurition mobile application',
    description: 'Developed a mobile application for Dogs',
    tech: [ 'Java'],
    github: 'https://github.com/Hashitha7/Dog-Nurition-App.git',
    image: dogs,
  },
  {
    title: 'Medical Channeling  System',
    description: 'Developed a web-based e-channeling and medical details sharing system.',
    tech: ['HTML', 'PHP', 'CSS', 'JavaScript','SCSS',],
    github: 'https://github.com/Hashitha7/Medical-Channeling-System.git',
    image: medical,
  },
 
 
  {
    title: 'Banana Game',
    description: 'Developed a Banana API Game',
    tech: ['HTML', 'CSS', 'React','Springboot','Javascript','Java'],
    github: 'https://github.com/Hashitha7/banana-nexus-game.git',
    image: banana,
  },

];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Show only the first 3 projects initially, show all if "Show More" is clicked
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Auto-sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length); // Loop back to 0 when it reaches the end
    }, 3000); // Change project every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="inline-block p-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg mb-4"
          >
            <Star className="w-6 h-6 text-primary-light dark:text-primary-dark" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-block text-primary-light dark:text-primary-dark border border-primary-light dark:border-primary-dark px-6 py-3 rounded-lg transition duration-200
                         hover:bg-primary-light hover:border-primary-light hover:text-white 
                         dark:hover:bg-primary-dark dark:hover:border-primary-dark dark:hover:text-white"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="ml-2">GitHub</span>
          </motion.a>
          {project.website && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="ml-2">View Page</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
