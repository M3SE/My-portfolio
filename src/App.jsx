import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import Overview from './components/Overview';
import ProjectGallery from './components/ProjectGallery';
import SkillsSummary from './components/SkillsSUmmary';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div className="App">
      <Overview />
      <ProjectGallery/>
      <SkillsSummary/>
      <ContactForm/>
    </div>
  );
};

export default App
