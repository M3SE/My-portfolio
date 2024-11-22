import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import Overview from './components/Overview';
import ProjectGallery from './components/ProjectGallery';
import SkillsSummary from './components/SkillsSUmmary';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Journey from './components/Journey';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Overview />
      <Journey/>
      <ProjectGallery/>
      <SkillsSummary/>
      <ContactForm/>
    </div>
  );
};

export default App
