import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const QuizDisplay = () => {
  const { quizData, loading, error } = useSelector((state) => state.quiz);
  console.log("Quiz data in frontend:", quizData);
  console.log("Stringified quiz in frontend:", JSON.stringify(quizData, null, 2));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  if (loading) return <p className="text-gray-500">Loading quiz...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    return <p className="text-gray-500">No quiz available. Please enter a topic.</p>;
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];
  console.log("Current question:", currentQuestion);
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto text-black">
      <h2 className="text-2xl font-bold mb-4">Quiz on {quizData.topic}</h2>
      <div className="bg-gray-100 p-6 rounded-lg">
        <p className="text-lg font-medium mb-2">{currentQuestion.text}</p>
        {console.log("question in code:",currentQuestion.text)}
        <ul className="space-y-2">
          {currentQuestion.options.map((option, i) => (
            <li key={i} className="flex items-center">
              <input type="radio" name="answer" className="mr-2" />
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between mt-4">
        {currentQuestionIndex > 0 && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handlePrevQuestion}
          >
            Previous
          </button>
        )}
        {currentQuestionIndex < quizData.questions.length - 1 && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleNextQuestion}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizDisplay;
