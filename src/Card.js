import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="Card">
      <div className="Card-image">
        <img src={props.img} alt={props.name} width="200px" height="300px" />
      </div>
      <div className="Card-data">
        <h1 className="Card-title">{props.name}</h1>
        <div>{props.year}</div>
        <div>Rating: {props.rating}</div>
        <div className="Card-overview">{props.overview}</div>
        <hr />
        <div className="Card-info">More info</div>
      </div>
    </div>
  );
};

export default Card;
