import React from "react";
// import PropTypes from 'prop-types';
import "./style.css";



const AnimeCard = props => (
  


<div className="card"  onClick={() => props.clickCount(props.id)}>
<div className="img-container">
  <img src={props.image} className="card-img-top" alt="..." />
  </div>
  <div className="card-body">
<h5 className="card-title">Name: {props.name}</h5>
<p className="card-text">Series: {props.series}</p>
    
  </div>
</div>
);

export default AnimeCard;
