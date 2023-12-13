import React from "react";

export default function Cart(props){
    return(
      
            <div className="cards">
               {props.openSpots === 0 && <div className="card--badge">Sold Out</div>}
               {props.openSpots > 0 && <div className="card--badge">Online</div>}
                <img src={`./images/${props.coverImg}`}  className="card--image"></img>

                <div className="card--text">
                    <span><img src="./images/star.png" className="card--star"></img></span>
                    <span>{props.stats.rating}</span>
                    <span>({props.stats.reviewCount}) •</span>
                    <span>{props.location}</span>
                    
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--price"><b>From ${props.price}</b> /person</p>



            </div>

       
    )

}