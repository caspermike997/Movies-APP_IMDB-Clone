import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './MovieCard'

function App() {

const server= "https://api.themoviedb.org/3/movie"
const API_KEY = "8e7a7d97fefd8b47be7bd7039b7aeb23"
const API_URL =`${server}/popular?api_key=${API_KEY}&language=en-US&page=1`


const API_SEARCH ="https://api.themoviedb.org/3/movie?api_key=8e7a7d97fefd8b47be7bd7039b7aeb23"

  const [movies, setMovies]  = useState([])

  useEffect (() =>{
      fetch(API_URL)
      .then(res => res.json())
      .then(data  => setMovies(data.results))
  },[])
console.log(movies);

  return (
    <div className='App'>
      <div className='search-nav'>
        <div>
          <h1>Movies</h1>
        </div>

        <div>
          <form>
            <input type="text" />
            <button>Search</button>
          </form>
        </div>
      </div>


      <div className='movies'>
        {movies.map((movie) =>(
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  )
}

export default App
