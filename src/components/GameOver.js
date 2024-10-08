import React from 'react';

const GameOver = ({ winner }) => (
  <div>
    <h2>Game Over!</h2>
    {winner && <h3>Congratulations, {winner}!</h3>}
  </div>
);

export default GameOver;
