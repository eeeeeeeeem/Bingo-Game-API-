import React, { useState } from 'react';
import axios from 'axios';

const BingoCard = ({ cardData }) => {
  const [isWinner, setIsWinner] = useState(null);

  const checkWin = async () => {
    try {
      const response = await axios.get(`http://www.hyeumine.com/checkwin.php`, {
        params: { playcard_token: cardData.playcard_token },
      });
      setIsWinner(response.data === 1 ? 'This card is a winner!' : 'This card did not win');
    } catch (error) {
      console.error('Error checking win:', error);
      setIsWinner('Failed to check the card. Try again.');
    }
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '200px', textAlign: 'center' }}>
      <h3>Bingo Card</h3>
      <pre style={{ textAlign: 'left' }}>{JSON.stringify(cardData, null, 2)}</pre>
      <button onClick={checkWin}>Check Win</button>
      {isWinner && <p>{isWinner}</p>}
    </div>
  );
};

export default BingoCard;
