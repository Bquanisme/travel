import React from "react";
import { ratingList } from "./LeftData";

const StarRating = ({onStar}) => {
    return (
        ratingList.map(star => {
            return(
                <div className="star-rating" key={star.id}>
                    <button onClick={() => onStar(star.value)}>{star.label}</button>
                </div>
            )
        })
    )
}
export default StarRating
