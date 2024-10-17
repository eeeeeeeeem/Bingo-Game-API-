import React from 'react';
import BingoCard from './BingoCard';

const GameBoard = ({ cards }) => {
  return (
    <div>
      <h2>Game Board</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <BingoCard key={index} cardData={card} />
          ))
        ) : (
          <p>No cards yet. Get a new card to start playing!</p>
        )}
      </div>
    </div>
  );
};

export default GameBoard;
