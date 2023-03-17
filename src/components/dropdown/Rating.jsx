import React, { useState } from "react";
import '../Styles/solo.css';

const RatingStars = () => {
  const [rating, setRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-div">
      {stars.map((star, index) => (
        <span className="span-star" key={index} onClick={() => setRating(star)}>
          {star <= rating ? "⭐" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
