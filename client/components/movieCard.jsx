import React, { useState, useEffect } from "react";
import star from "../src/assets/star.png";

const MovieCard = ({ movieAdded, setMovieAdded }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/api/movies");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovies();
    setMovieAdded(false);
  }, [movieAdded]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <span key={i} className="text-warning">
          <img src={star} style={{ width: "2rem" }} />
        </span>
      );
    }
    return stars;
  };

  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(`/api/movies/${movieId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Remove the deleted movie from the movies array
      setMovies((prevMovies) =>
        prevMovies.filter((movie) => movie.id !== movieId)
      );

      console.log("Movie deleted successfully!");
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className="card movie-card">
          <div className="row">
            <div className="col-md-4">
              <img
                src={movie.image}
                alt={`${movie.movie_name} poster`}
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{movie.movie_name}</h2>
                <div className="rating">{renderStars(movie.rating)}</div>
                <button
                  onClick={() => handleDelete(movie.id)}
                  className="btn btn-danger delete-btn"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
