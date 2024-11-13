import { createSlice } from '@reduxjs/toolkit';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        quizData: null,
        loading: false,
        error: null,
    },
    reducers: {
        startLoading: (state) => { state.loading = true; },
    setQuizData: (state, action) => {
        state.quizData = action.payload;
        state.loading = false;
    },
    setError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    },
},
});

export const { startLoading, setQuizData, setError } = quizSlice.actions;

export const generateQuiz = (topic) => async (dispatch) => {
    dispatch(startLoading());
    try {
        console.log(`Generating quiz on topic: ${topic}`);
      
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Generate a quiz on the topic: "${topic}" in JSON format with keys "topic" and "questions", where "questions" is an array of objects each containing "text" and "options". Provide only JSON data.`;
      
      const result = await model.generateContent([prompt]);
      const responseText = result.response.text();
      console.log("Response:", responseText);
      let quizData = result.response.text();
      quizData = quizData.replace(/^```json|```$/g, '').trim(); 
      console.log("Quiz generated:", quizData);
      dispatch(setQuizData(JSON.parse(quizData)));
    } catch (error) {
      console.error("Error generating quiz:", error);
      dispatch(setError("Failed to generate quiz. Please try again."));
    }
  };
  

export default quizSlice.reducer;
