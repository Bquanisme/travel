import React from "react";
import RangeSlider from "./Slider";
import Category from "./Category";
import Cuisine from "./Cuisine";
import StarRating from "./StarRating";

const Place = () => {
  return (
    <div>
      <div>
        <h3>Category</h3>
        <div className="Category">
            <Category />
        </div>
      </div>
      <br />
      <div>
        <h3>Cuisine</h3>
        <div className="cuisine">
            <Cuisine/>
        </div>
      </div>
      <br />
      <div>
        <h3>Price Range</h3>
        <br />
        <RangeSlider />
      </div>
      <br />
      <div>
        <h3>Star Rating</h3>
        <div className="star-rating">
          <StarRating />
        </div>
      </div>
    </div>
  );
};
export default Place;
