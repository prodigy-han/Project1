import React from 'react';
import './CountryCard.css';

const CountryCard = ({ country, imageUrl, visitUrl }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <h3 className="card-title">{country}</h3>
      </div>
      <a href={visitUrl} target="_blank" rel="noopener noreferrer">
        <button className="visit-button">Visit {country}</button>
      </a>
    </div>
  );
};

export default CountryCard;