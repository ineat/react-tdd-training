import * as React from 'react';

import './Animal.scss';

export default ({ image, alt, description }) => (
  <div className="animal-container">
    <img className="animal" src={image} alt={alt}/>
    <span className="description">
      {description}
    </span>
  </div>
);