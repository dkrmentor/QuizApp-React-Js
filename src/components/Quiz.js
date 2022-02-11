import React, { useState } from 'react';

export default function Quiz() {
  const questions = [
    {
      questionText: "What is 2 + 2 ?",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "8", isCorrect: false },
        { answerText: "4", isCorrect: true },
        { answerText: "3", isCorrect: false },
      ],
    },
    {
      questionText: "What is 4 - 2 ?",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "2", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "3", isCorrect: false },
      ],
    },
    {
      questionText: " What is 2 * 2 ?",
      answerOptions: [
        { answerText: "4", isCorrect: true },
        { answerText: "8", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "3", isCorrect: false },
      ],
    },
    {
      questionText: " What is 4 / 2 ?",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "8", isCorrect: false },
        { answerText: "2", isCorrect: true },
        { answerText: "3", isCorrect: false },
      ],
    },
    {
      questionText: "What is 4 % 2 ?",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "0", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "3", isCorrect: false },
      ],
    },
    {
      questionText: "ALgebra is the branch of Math?",
      answerOptions: [
        { answerText: "yes", isCorrect: true },
        { answerText: "no", isCorrect: false },
      ],
    },
    {
      questionText: "What is the value of x in x + 15 = 3 ?",
      answerOptions: [
        { answerText: 5, isCorrect: false },
        { answerText: -12, isCorrect: true },
        { answerText: 4, isCorrect: false },
        { answerText: 33, isCorrect: false },
      ],
    },
    {
      questionText: "What is the value of y in 4y = 24?",
      answerOptions: [
        { answerText: 5, isCorrect: false },
        { answerText: 8, isCorrect: false },
        { answerText: 6, isCorrect: true },
        { answerText: 33, isCorrect: false },
      ],
    },
  ];
	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}




// https://www.youtube.com/watch?v=Lya-qYiDqIA&t=261s