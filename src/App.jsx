import React, { Component } from 'react';

import ProgressBar from './components/ui/Progressbar';
import AnimalSelector from './components/ui/AnimalSelector';
import BreedSelector from './components/ui/BreedSelector';
import AnimalViewer from './components/ui/AnimalViewer';
import Step from './components/ui/Step';


import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h3>Random Animal Pictures</h3>
        </header>
        <ProgressBar />
        <main>
          <Step description="Select your animal">
            <AnimalSelector />
          </Step>
          <Step description="Select your breed">
            <BreedSelector />
          </Step>
          <Step description="Enjoy your picture">
            <AnimalViewer />
          </Step>
        </main>
      </div>
    );
  }
}

export default App;
