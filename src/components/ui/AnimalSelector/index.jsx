import * as React from 'react';

import dogLogo from '../../../assets/images/dog.png';
import catLogo from '../../../assets/images/cat.png';

import './AnimalSelector.scss';
import Animal from '../Animal';

export default () => (
  <div className="animal-selector">
    <Animal image={catLogo} alt="Meow!" description="I love cats"/>
    <Animal image={dogLogo} alt="Wouf!" description="I love dogs"/>
  </div>
);