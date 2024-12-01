import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const questions = [
  {
    question: "What is the capital city of Zambia?",
    options: ["Kitwe", "Livingstone", "Lusaka", "Ndola"],
    answer: "Lusaka",
  },
  {
    question: "When did Zambia gain independence?",
    options: ["1960", "1964", "1970", "1980"],
    answer: "1964",
  },
  {
    question: "What is Zambia's main export product?",
    options: ["Copper", "Gold", "Coal", "Sugar"],
    answer: "Copper",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Zambian Quiz App</h1>
        {showScore ? (
          <div>
            <p>
              You scored {score} out of {questions.length}!
            </p>
            <button onClick={restartQuiz}>Play Again</button>
          </div>
        ) : (
          <div>
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
