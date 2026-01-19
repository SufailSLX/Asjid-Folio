import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Intro from './pages/Intro/Intro';
import Home from './pages/Home/Home';
import Bio from './pages/Bio/Bio';

import About from './pages/About/About';
import Projects from './pages/projects/Projects';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete ? (
        <Intro onComplete={() => setIntroComplete(true)} />
      ) : (
        <div className="relative w-full">
          <Toaster position="top-center" reverseOrder={false} />
          <Home />

          <Bio />
          <About />
          <Projects />
          <Service />
          <Contact />
        </div>
      )}
    </>
  );
}