import React, { useState, useEffect } from "react";

export default function MovieForm({ setMovies }) {
  const [movieData, setMovieData] = useState({
    movie_name: "",
    image: "",
    rating: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovieData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1> Rate a Movie </h1>
      {/*       <form className="movie-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="movie_name">Movie Title:</label>
          <input
            type="text"
            id="movie_name"
            name="movie_name"
            value={movieData.movie_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={movieData.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={movieData.rating}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Rating</button>
      </form> */}
    </>
  );
}
