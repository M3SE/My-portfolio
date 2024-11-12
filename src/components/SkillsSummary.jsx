// src/components/SkillsSummary.jsx
import React from 'react';

const SkillsSummary = () => {
  // Example skills (replace with your actual skills)
  const skills = {
    "Front-End": ["React", "HTML/CSS", "JavaScript"],
    "Back-End": ["Node.js", "Express", "MongoDB"],
    "Tools & DevOps": ["Git", "AWS", "Docker"],
  };

  return (
    <section className="p-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillsList], index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {skillsList.map((skill, i) => (
                  <li key={i} className="text-md">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSummary;
