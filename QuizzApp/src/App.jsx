import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddQuizz from './components/AddQuizz'
import Quizz from './components/Quizz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddQuizz />
      <Quizz />
    </>
  )
}

export default App
