// src/components/SkillsSummary.jsx
import React from 'react';
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiSqlite,
  SiGit,
  SiDocker,
  SiSpring,
  SiHugo,
  SiJunit5,
  SiBootstrap,
  SiTailwindcss,
  SiJira,
  SiFigma,
  SiAmazonwebservices,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const SkillsSummary = () => {
  const skills = {
    "Front-End": [
      { name: "React", icon: <SiReact /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    "Back-End": [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Sqlite", icon: <SiSqlite /> },
      { name: "Spring Boot", icon: <SiSpring /> },
      { name: "Java", icon: <FaJava /> },
    ],
    "Tools & DevOps": [
      { name: "Git", icon: <SiGit /> },
      { name: "AWS", icon: <SiAmazonwebservices /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "JUnit", icon: <SiJunit5 /> },
      { name: "Hugo", icon: <SiHugo /> },
      { name: "Jira", icon: <SiJira /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
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
                  <li key={i} className="flex items-center justify-center space-x-2 text-md">
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
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
