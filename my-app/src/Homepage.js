import React from 'react';

const HomePage = ({ onStart, onShowControls }) => {
  return (
    <div className="HomePage">
      <h1>Welcome to Dr. OctoSplunker!</h1>
      <p>In this game, you will be tasked with finding a word out of hundreds of words floating around the screen. 
        You will be able to use several filters given by a queue to highlight and filter words on the screen.
        Use the filters to find words based on their starting letters, ending letters, or length.
        Quickly do so before the time runs out!
      </p>
      <button onClick={onStart}>Play</button>
      <button onClick={onShowControls}>Controls</button>
    </div>
  );
};

export default HomePage;