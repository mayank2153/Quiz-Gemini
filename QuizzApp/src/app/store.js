// store.js
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/Quizz/QuizzSlice';

const store = configureStore({
  reducer: {
    quiz: quizReducer, // Ensure `quiz` matches what you use in `useSelector`
  },
});

export default store;
