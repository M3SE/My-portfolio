// src/components/ProjectGallery.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGallery = () => {
  // Example data (replace with your actual project data)
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my work and skills.",
      techStack: "React, Tailwind CSS, Node.js",
      liveDemo: "https://your-live-demo-link.com",
      githubLink: "https://github.com/your-github-link",
    },
    {
      title: "E-commerce Store",
      description: "An online store with product listings, shopping cart, and checkout.",
      techStack: "React, Redux, Firebase",
      liveDemo: "https://your-ecommerce-live-demo.com",
      githubLink: "https://github.com/your-ecommerce-github",
    },
    // Add more projects here
  ];

  return (
    <section id = "projects" className="p-6 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              liveDemo={project.liveDemo}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
