import * as React from 'react';

import './Animal.scss';

export default ({ image, alt, description, onSelectAnimal }) => (
  <div className="animal-container">
    <img className="animal" src={image} alt={alt} onClick={onSelectAnimal}/>
    <span className="description">
      {description}
    </span>
  </div>
);