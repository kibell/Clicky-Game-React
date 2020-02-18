import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

const propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
 
}

const animeCard = ({
  name,
  image,
  series
 
}) => (
  <React.Fragment>
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />  
              
      </div> 
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Series:</strong> {series}
          </li>
          </ul>
    </div>
    </div>
    </ React.Fragment>
    
);

animeCard.propTypes = propTypes;

export default animeCard;
