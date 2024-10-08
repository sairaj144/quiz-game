
import React from 'react';

const AnswerOptions = ({ options, onSelect }) => (
  <div className="answer-options">
    {Object.entries(options).map(([key, value]) => (
      <button key={key} onClick={() => onSelect(key)}>
        {key}: {value}
      </button>
    ))}
  </div>
);

export default AnswerOptions;
