import * as React from 'react';

import Animal from '../Animal';
import dogLogo from '../../../assets/images/dog.png';
import catLogo from '../../../assets/images/cat.png';

import './AnimalSelector.scss';

export default ({ onSelectAnimal }) => (
  <div className="animal-selector">
    <Animal image={catLogo} alt="Meow!" description="I love cats" onSelectAnimal={() => onSelectAnimal('cat')}/>
    <Animal image={dogLogo} alt="Wouf!" description="I love dogs" onSelectAnimal={() => onSelectAnimal('dog')}/>
  </div>
);