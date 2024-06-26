import React from "react";
import { useState } from "react";
import { CustomerReviews } from "../../scripts/reviews";

import "./reviews-styled.css";

const Reviews = () => {
  let rMessage, rName, rLocation;
  const reviewsLength = CustomerReviews.length - 1;
  const [review, setReview] = useState(0);

  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation();
  };

  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation();
  };

  const handleReviewsUpdation = () => {
    const reviewMessage = CustomerReviews[review];
    rName = reviewMessage.name;
    rLocation = reviewMessage.location;
    rMessage = reviewMessage.message;
  };

  handleReviewsUpdation();

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients word</p>

        <p className="rw-text-format">
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">{rMessage}</span>
          <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{rName}</p>
            <p className="rw-reviewer-place">{rLocation}</p>
          </div>

          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              onClick={backBtnClick}
            >
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              onClick={frontBtnClick}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
