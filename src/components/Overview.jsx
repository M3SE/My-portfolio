// src/components/Overview.jsx
import React from 'react';

const Overview = () => {
  return (
    <section className="p-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Hi, I'm Simon Chang</h1>
        <p className="text-lg md:text-xl mb-4">
          Full-Stack Developer skilled in React, Node.js, and more.
        </p>
        <p className="text-md md:text-lg">
          Passionate about building impactful applications and user-centric experiences.
        </p>
      </div>
    </section>
  );
};

export default Overview;