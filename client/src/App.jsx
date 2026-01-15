import React, { useState } from 'react';
import Intro from './pages/Intro/Intro';
import Home from './pages/Home/Home';
import Bio from './pages/Bio/Bio';

import About from './pages/About/About';
import Projects from './pages/projects/Projects';
import Service from './pages/Service/Service';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete ? (
        <Intro onComplete={() => setIntroComplete(true)} />
      ) : (
        <div className="relative w-full">
          <Home />

          <Bio />
          <About />
          <Projects />
          <Service />
        </div>
      )}
    </>
  );
}