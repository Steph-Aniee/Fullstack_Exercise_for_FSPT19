import { React, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieForm from "./components/MovieForm";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <MovieForm setMovies={setMovies} />
      <MovieCard movies={movies} setMovies={setMovies} />
    </>
  );
}

export default App;
