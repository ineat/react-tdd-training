import * as React from 'react';

import './BreedSelector.scss';

export default ({ breeds, onSelectBreed }) => (
  <div className="breed-selector">
    {
      breeds.map(breed => (
        <div className="breed" key={ breed.id } onClick={() => onSelectBreed(breed.id)}>
          { breed.name }
        </div>
      ))
    }
  </div>
);