import { useContext, useEffect, useState } from 'react'
import { Context } from './context';
import MovieList from './components/Movie/MovieList';
import MovieForm from './components/Movie/MovieForm';
export default function App() {
  const [isLoading, setIsLoading] = useState(false)

  const { state, dispatch } = useContext(Context)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=2')
      .then(response => response.json())
      .then(json => {
        const newArr = json
        dispatch({ type: 'GET_DATA', payload: newArr })
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, []);
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieForm />
      <MovieList />
    </>
  )
}
