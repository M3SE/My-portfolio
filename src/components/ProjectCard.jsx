// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, techStack, liveDemo, githubLink }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-5 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl opacity-0 translate-y-5 animate-fadeIn">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Tech Stack: {techStack}</p>
      <div className="flex justify-center space-x-4">
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Live Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
