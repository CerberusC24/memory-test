import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div
      onClick={() => props.handleClick(props.id)}     
      className="card m-2"
      id="click-item">
      <div className="img-container">
        <img 
        alt={props.name} 
        src={props.image}/>
      </div>
    </div>
  );
}

export default CharacterCard;