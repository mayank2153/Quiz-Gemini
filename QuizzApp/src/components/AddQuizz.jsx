import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addQuizz } from '../features/Quizz/QuizzSlice'
import { generateQuiz } from '../features/Quizz/QuizzSlice';

function AddQuizz() {

    const [topic, setTopic] = useState('');
    const dispatch = useDispatch();

    const addQuizzHandler= (e) => {
        e.preventDefault();
        if (topic) {
          dispatch(generateQuiz(topic));
        }
      };

  return (
    <>
        <form onSubmit={addQuizzHandler} className='space-x-3 mt-12' >
        <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter quiz topic"
      />
      <button type="submit">Generate Quiz</button>
        </form>
    </>
  )
}

export default AddQuizz
