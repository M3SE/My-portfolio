// src/components/ExperienceTimeline.jsx
import React from 'react';

const ExperienceTimeline = () => {
  // Example data (replace with your actual experience and projects)
  const experiences = [
    {
      title: "Full-Stack Development Bootcamp",
      date: "January 2024 - June 2024",
      description:
        "Completed a rigorous 6-month bootcamp focused on full-stack development, covering technologies like React, Node.js, Express, and MongoDB.",
    },
    {
      title: "Personal Portfolio Project",
      date: "July 2024",
      description:
        "Developed a personal portfolio website using React and Vite to showcase my skills and projects.",
    },
    {
      title: "E-commerce Application (Bootcamp Capstone Project)",
      date: "May 2024",
      description:
        "Built a fully-functional e-commerce platform with a shopping cart, product pages, and payment integration. Used React, Express, and MongoDB.",
    },
    // Add more experiences here
  ];

  return (
    <section className="p-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Experience & Learning Journey</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500 mr-4"></div>
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
