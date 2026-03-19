// Assignment of 9th March

import React, { useState } from 'react';

function MoodTracker() {
  const [mood, setMood] = useState('Neutral');

  const moodStyles = {
    Happy: { color: '#FFD700', emoji: '😊' },
    Sad: { color: '#4682B4', emoji: '😢' },
    Energetic: { color: '#32CD32', emoji: '⚡' },
    Neutral: { color: '#000000', emoji: '😐' }
  };

  return (
    <div style={{ 
      backgroundColor: moodStyles[mood].color, 
      height: '100vh', 
      textAlign: 'center', 
      padding: '50px',
      transition: '0.5s'
    }}>
      <h1>Current Mood: {mood} {moodStyles[mood].emoji}</h1>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setMood('Happy')}>Happy</button>
        <button onClick={() => setMood('Sad')}>Sad</button>
        <button onClick={() => setMood('Energetic')}>Energetic</button>
        <button onClick={() => setMood('Neutral')}>Reset</button>
      </div>
    </div>
  );
}

export default MoodTracker;