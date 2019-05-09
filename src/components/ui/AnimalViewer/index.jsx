import * as React from 'react';

import './AnimalViewer.scss';

export default ({ img, description, onReloadImage }) => (
  <div className="animal-viewer">
    <div className="animal-details">
      <img src={img} className="picture" alt="Moohhh"/>
      <div className="description">{description || 'No description'}</div>
    </div>
    <button className="reload-button" onClick={onReloadImage}>I want another one !</button>
  </div>
);