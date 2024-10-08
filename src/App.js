
import React, { useState, useEffect } from 'react';
import QRCodeDisplay from './components/QRCodeDisplay';
import Question from './components/Question';
import AnswerOptions from './components/AnswerOptions';
import PlayerInput from './components/PlayerInput';
import ResultMessage from './components/ResultMessage';
import GameOver from './components/GameOver';
import questions from './data/questions';
import './index.css';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      setIsGameStarted(false);
      setWinner(playerName);
    }
  }, [currentQuestionIndex]);

  const handlePlayerJoin = (name) => {
    setPlayerName(name);
    setIsGameStarted(true);
  };

  const handleAnswerSelect = (selectedOption) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
      setResultMessage(`Congratulations, ${playerName}!`);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setResultMessage('');
      }, 2000);
    } else {
      setResultMessage(`Wrong answer! Try again.`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App">
      {!isGameStarted ? (
        <>
          <QRCodeDisplay />
          <PlayerInput onSubmit={handlePlayerJoin} />
        </>
      ) : (
        <>
          {currentQuestion ? (
            <>
              <Question 
                question={currentQuestion.question} 
                options={currentQuestion.options} 
              />
              <AnswerOptions 
                options={currentQuestion.options} 
                onSelect={handleAnswerSelect} 
              />
              <ResultMessage message={resultMessage} />
            </>
          ) : (
            <GameOver winner={winner} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
