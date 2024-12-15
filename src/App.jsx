import { useState } from 'react'
import MovieForm from './components/Movie/MovieForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieForm />
    </>
  )
}

export default App
