import React, { useState, useEffect } from "react";
import Review from "../Review/Review";
import "./Reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://polar-caverns-73348.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section id="testimonials">
      <div className="testimonial-heading">
        Clients<span>comments</span>
      </div>

      <div className="testimonial-box-container">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
