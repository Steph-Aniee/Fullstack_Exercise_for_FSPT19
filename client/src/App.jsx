import React from "react";
import "./App.css";
import MovieCard from "../components/movieCard";
import MovieForm from "../components/movieForm";

function App() {
  return (
    <>
      <MovieForm />
      <MovieCard />
    </>
  );
}

export default App;
