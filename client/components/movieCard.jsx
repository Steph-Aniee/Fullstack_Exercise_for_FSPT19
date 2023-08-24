import React, { useState, useEffect } from "react";
import star from "../src/assets/star.png";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  /*   const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <span key={i} className="text-warning">
          <img src={star} style={{ width: "2rem" }} />
        </span>
      );
    }
    return stars;
  }; */

  const handleDelete = async () => {};

  return <div></div>;
};

export default MovieCard;
