import React, { useState } from "react";
import "./App.css";
import MovieCard from "../components/movieCard";
import MovieForm from "../components/movieForm";

function App() {
  const [movieAdded, setMovieAdded] = useState(false);

  return (
    <>
      <MovieForm setMovieAdded={setMovieAdded} />
      <MovieCard movieAdded={movieAdded} setMovieAdded={setMovieAdded} />
    </>
  );
}

export default App;
