import React from 'react';
import './CardItem.css';

export const CardItem = ({ title, imageId }) => {
  return (
    <div className="cardContainer">
      <p className="cardTitle">{title}</p>
      <img src={`https://picsum.photos/id/${imageId}/200`} alt="idol" />
    </div>
  );
};
