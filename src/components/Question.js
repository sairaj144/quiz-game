import React from 'react';

const Question = ({ question, options }) => (
  <div>
    <h3>{question}</h3>
    <ul>
      {Object.entries(options).map(([key, value]) => (
        <li key={key}>{key}: {value}</li>
      ))}
    </ul>
  </div>
);

export default Question;
