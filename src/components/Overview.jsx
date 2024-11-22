import React from "react";
import profileImage from "../assets/IMG_3116.jpg";

const Overview = () => {
  return (
    <section
  id="home"
  className="relative flex flex-col items-center justify-center text-center h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-[#1E2A22] text-white px-6"
>
  {/* Profile Image */}
  <div className="flex flex-col items-center">
    <div className="w-80 h-90 rounded-full overflow-hidden mb-6 shadow-[0_0_20px_10px] shadow-gray-500">
      <img src={profileImage} alt="Your Profile" className="w-full h-full object-cover"/>
    </div>
  </div>

  {/* Intro Text */}
  <div className="text-center">
    <h1 className="text-4xl md:text-6xl font-serif text-[#FFD700] mb-4">
      Full-Stack Developer
    </h1>
    <p className="text-lg md:text-xl font-sans text-gray-300 max-w-xl mx-auto">
      Specializing in{" "}
      <span className="text-yellow-500 font-semibold">All Things Code</span>.
      Passionate about crafting high-quality, visually engaging websites &
      applications bringing ideas to life.
    </p>
  </div>

  {/* Call to Action */}
  <div className="flex space-x-4 mt-6">
    <a
      href="#projects"
      className="px-6 py-3 bg-[#D4AF37] text-white font-semibold rounded-md hover:bg-[#C19A5B] transition duration-300"
    >
      Contact Me
    </a>
    <a
      href="#contact"
      className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition duration-300"
    >
      Download CV
    </a>
  </div>

  {/* Spotify Widget */}
<div className="mt-8">
  <div className="p-4">
    <p className="text-gray-400 text-sm mb-2">Currently Listening To:</p>
    <div className="flex items-center space-x-2">
      <span className="text-green-500 text-xl">🎵</span>
      <p className="text-gray-300 font-medium">Big Naughty – Lovers Rock</p>
    </div>
  </div>
</div>
</section>

  );
};

export default Overview;
