import React from "react";

const CardTravel = ({travel}) => {
    return ( 
        <div className="allboxes">
            <div className="box-size">
                <div> 
                    <img src={travel.coverSrc} className="img-travel"/>
                </div>
                <div className="title-rating"> 
                    <h3>{travel.title}</h3>
                    <p className="changeColor">🌟{travel.rating}</p>
                </div>
                <div className="title-rating"> 
                    <div className="display">
                        <b>{travel.serviceTime}</b>
                        <p >Delivery Fee {travel.deliveryFee}</p>
                    </div>
                    <b>${travel.price}</b>
                </div>
            </div>
        </div>
    );
}
 
export default CardTravel;