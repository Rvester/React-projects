
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
const apiKey = '98e3fb1f' 
  
let [movie, setMovie] = useState("")


const getMovie = async (movieName) => {
  //.then((res) => res.json())
  //.then((data) => console.log(data))
  const response = await fetch (`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
  const data = await response.json()
  setMovie(data)
}

useEffect(() => {
  //getMovie(Math.floor(Math.random()  * (apiKey.length)))
})

return (
    <div className="App">
      <MovieDisplay movie = {movie}/>
      <Form getMovie = {getMovie}/>
    </div>
  );
}

export default App;
