import * as React from 'react';

import myDogPicture from '../../../assets/images/my-dog.JPG';

import './AnimalViewer.scss';

export default () => (
  <div className="animal-viewer">
    <div className="animal-details">
      <img src={myDogPicture} className="picture" alt="Moohhh"/>
      <div className="description">Border collies are bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</div>
    </div>
    <button>I want another one !</button>
  </div>
);