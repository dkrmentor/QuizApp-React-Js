import React, { useState } from "react";

export default function Quiz() {
  // {array}
  const questions = [
    {
      question: "What is 2 + 2 ?",
      answersOption: [
        { answer: 5, isCorrect: false },
        { answer: 8, isCorrect: false },
        { answer: 4, isCorrect: true },
        { answer: 33, isCorrect: false },
      ],
    },
    {
      question: "What is 4 - 2 ?",
      answersOption: [
        { answer: 5, isCorrect: false },
        { answer: 2, isCorrect: true },
        { answer: 4, isCorrect: false },
        { answer: 33, isCorrect: false },
      ],
    },
    {
      question: " What is 2 * 2 ?",
      answersOption: [
        { answer: 4, isCorrect: true },
        { answer: 8, isCorrect: false },
        { answer: 4, isCorrect: false },
        { answer: 33, isCorrect: false },
      ],
    },
    {
      question: " What is 4 / 2 ?",
      answersOption: [
        { answer: 5, isCorrect: false },
        { answer: 8, isCorrect: false },
        { answer: 2, isCorrect: true },
        { answer: 33, isCorrect: false },
      ],
    },
    {
      question: "What is 4 % 2 ?",
      answersOption: [
        { answer: 5, isCorrect: false },
        { answer: 0, isCorrect: true },
        { answer: 4, isCorrect: false },
        { answer: 33, isCorrect: false },
      ],
    },
    {
      question: "ALgebra is the branch of Math?",
      answersOption: [
        { answer: "yes", isCorrect: true },
        { answer: "no", isCorrect: false },
      ],
    },
    {
      question: "What is the value of x in x + 15 = 3 ?",
      answersOption: [
        { answer: 5, isCorrect: false },
        { answer: -12, isCorrect: true },
        { answer: 4, isCorrect: false },
        { answer: 33, isCorrect: false },
      ],
    },
    {
      question: "What is the value of y in 4y = 24?<",
      answersOption: [
        { answer: 5, isCorrect: false },
        { answer: 8, isCorrect: false },
        { answer: 6, isCorrect: true },
        { answer: 33, isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setcurrentQuestion] = useState(0);

  const handleAns = () =>{
      const nxtquestion = currentQuestion + 1;
      setcurrentQuestion(nextQuestion)
  }
  return (
    <>
      <div className="container">
        {false ? (
          <div className="score-section">
            You scored 1 out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Q1</span> / {questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].question}</div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answersOption.map((answersOption) => {
                <button> answersOption.answer </button>;
              })}
            </div>
          </>
        )}
      </div>
    
    </>
  );
}

// {https://youtu.be/Lya-qYiDqIA}
