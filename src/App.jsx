import React, { Component } from 'react';

import ProgressBar from './components/ui/Progressbar';
import AnimalSelector from './components/ui/AnimalSelector';
import BreedSelector from './components/ui/BreedSelector';
import AnimalViewer from './components/ui/AnimalViewer';
import Step from './components/ui/Step';
import { getBreeds, getPictureAndDescription } from './api/animal';

import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stepIndex: 1,
      selectedType: '',
      breeds: [],
      selectedBreed: {
        id: '',
        img: '',
        description: ''
      }
    };
  }
  render() {
    return (
      <div className="app">
        <header>
          <h3>Random Animal Pictures</h3>
        </header>
        <ProgressBar activeStepIndex={this.state.stepIndex} />
        <main>
          <Step title="Select your animal" active={this.state.stepIndex === 1}>
            <AnimalSelector onSelectAnimal={this.selectAnimal}/>
          </Step>
          <Step title="Select your breed" active={this.state.stepIndex === 2}>
            <BreedSelector breeds={this.state.breeds} onSelectBreed={this.selectBreed}/>
          </Step>
          <Step title="Enjoy your picture" active={this.state.stepIndex === 3}>
            <AnimalViewer
              img={this.state.selectedBreed.img}
              description={this.state.selectedBreed.description}
              onReloadImage={this.getNewPicture} />
          </Step>
        </main>
      </div>
    );
  }

  selectAnimal = (selectedType) => {
    getBreeds(selectedType).then(breeds => {
      this.setState({
        selectedType,
        stepIndex: 2,
        breeds
      });
    });
  }

  selectBreed = (selectedBreedId) => {
    getPictureAndDescription(this.state.selectedType, selectedBreedId).then(({ img, description }) => {
      this.setState({
        selectedBreed: {
          id: selectedBreedId,
          description,
          img
        },
        stepIndex: 3
      });
    });
  }

  getNewPicture = () => {
    getPictureAndDescription(this.state.selectedType, this.state.selectedBreed.id).then(({ img }) => {
      this.setState({
        selectedBreed: {
          ...this.state.selectedBreed,
          img
        },
      });
    });
  }
}

export default App;
