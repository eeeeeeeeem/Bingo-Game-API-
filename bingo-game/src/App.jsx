import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import axios from 'axios';

const App = () => {
  const [gameCode, setGameCode] = useState('HEelhJos'); // default game code
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');

  // Fetch new card from API
  const getNewCard = async () => {
    try {
      const response = await axios.get(`http://www.hyeumine.com/getcard.php`, {
        params: { bcode: gameCode },
      });
      if (response.data !== 0) {
        setCards([...cards, response.data]);
        setError(''); // Clear any previous errors
      } else {
        setError('Invalid Game Code');
      }
    } catch (err) {
      console.error('Error fetching card:', err);
      setError('Failed to fetch card. Please try again.');
    }
  };

  return (
    <div>
      <h1>Bingo Game</h1>
      <input 
        type="text" 
        value={gameCode} 
        onChange={(e) => setGameCode(e.target.value)} 
        placeholder="Enter Game Code" 
      />
      <button onClick={getNewCard}>Get New Card</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <GameBoard cards={cards} />
    </div>
  );
};

export default App;
