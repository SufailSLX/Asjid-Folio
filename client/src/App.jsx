import React, { useState } from 'react';
import Intro from './pages/Intro/Intro';
import Home from './pages/Home/Home';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete ? (
        <Intro onComplete={() => setIntroComplete(true)} />
      ) : (
        <Home />
      )}
    </>
  );
}