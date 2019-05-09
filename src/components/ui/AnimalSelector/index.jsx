import * as React from 'react';

import dogLogo from '../../../assets/images/dog.png';
import catLogo from '../../../assets/images/cat.png';

import './AnimalSelector.scss';

export default () => (
  <div className="animal-selector">
    <div className="animal-container">
      <img className="animal" src={catLogo} alt="Meow!" />
      <span className="description">
        I love cats
      </span>
    </div>
    <div className="animal-container">
      <img className="animal" src={dogLogo} alt="Wouf!" />
      <span className="description">
        I love dogs
      </span>
    </div>
  </div>
);