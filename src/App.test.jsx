import * as React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import AnimalSelector from './components/ui/AnimalSelector';
import BreedSelector from './components/ui/BreedSelector';
import Step from './components/ui/Step';
import { getBreeds as getBreedsMock, getPictureAndDescription as getPictureAndDescriptionMock } from './api/animal';
import AnimalViewer from './components/ui/AnimalViewer';

jest.mock('./api/animal');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('State', () => {
    it('Should initialize the step to 1.', () => {
      expect(wrapper.state('stepIndex')).toEqual(1);
    });

    it('Should initialize the selected type to an empty string.', () => {
      expect(wrapper.state('selectedType')).toEqual('');
    });

    it('Should initialize breeds to an empty array.', () => {
      expect(wrapper.state('breeds')).toEqual([]);
    });

    it('Should initialize the selected breed with an object composed of "id", img" and "description" set to empty string.', () => {
      expect(wrapper.state('selectedBreed')).toEqual({
        id: '',
        img: '',
        description: ''
      })
    });
  });

  describe('steps', () => {
    it('Shoud display the first step and hide the others when the active index is 1.', () => {
      const steps = wrapper.find(Step);

      expect(steps.get(0).props.active).toEqual(true);
      expect(steps.get(1).props.active).toEqual(false);
      expect(steps.get(2).props.active).toEqual(false);
    });

    it('Shoud display the second step and hide the others when the active index is 2.', () => {
      wrapper.setState({ stepIndex: 2 });
      const steps = wrapper.find(Step);

      expect(steps.get(0).props.active).toEqual(false);
      expect(steps.get(1).props.active).toEqual(true);
      expect(steps.get(2).props.active).toEqual(false);
    });

    it('Shoud display the third step and hide the others when the active index is 3.', () => {
      wrapper.setState({ stepIndex: 3 });
      const steps = wrapper.find(Step);

      expect(steps.get(0).props.active).toEqual(false);
      expect(steps.get(1).props.active).toEqual(false);
      expect(steps.get(2).props.active).toEqual(true);
    });
  });

  describe('BreedSelector', () => {
    it('Should pass the "breeds" state into props of BreedSelector.', () => {
      const expectedBreeds = [
        {
          id: '1',
          name: 'NAME-1',
          description: 'Cool pet'
        },
        {
          id: '2',
          name: 'NAME-2',
          description: 'Cool pet 2'
        },
      ];
      wrapper.setState({ breeds: expectedBreeds });

      expect(wrapper.find(BreedSelector).prop('breeds')).toEqual(expectedBreeds);
    });
  });

  describe('AnimalViewer', () => {
    it('Should pass the "imgUrl" state into props of AnimalViewer.', () => {
      const expectedImgUrl = 'arg.jpg';

      wrapper.setState({
        selectedBreed: {
          img: expectedImgUrl,
          description: ''
        }
      });

      expect(wrapper.find(AnimalViewer).prop('img')).toEqual(expectedImgUrl);
    });

    it('Should pass the "description" state into props of AnimalViewer.', () => {
      const expectedDescription = 'nice cat';

      wrapper.setState({
        selectedBreed: {
          img: '',
          description: expectedDescription
        }
      });

      expect(wrapper.find(AnimalViewer).prop('description')).toEqual(expectedDescription);
    });
  });

  describe('selectAnimal', () => {
    beforeEach(() => {
      getBreedsMock.mockResolvedValue({});
    });

    it('Should get all breeds from given animal and store them in the state.', done => {
      const givenType = 'a thing';
      const expectedBreeds = [
        {
          id: '1',
          name: 'NAME-1',
          description: 'Cool pet'
        }
      ];
      getBreedsMock.mockImplementation(type => {
        if (type === givenType) {
          return Promise.resolve(expectedBreeds);
        }
      });

      wrapper.find(AnimalSelector).prop('onSelectAnimal')(givenType);

      setTimeout(() => {
        expect(wrapper.state('breeds')).toEqual(expectedBreeds);
        done();
      });
    });

    it('Should save the selected type.', done => {
      const expectedType = 'cat';
      wrapper.find(AnimalSelector).prop('onSelectAnimal')(expectedType);

      setTimeout(() => {
        expect(wrapper.state('selectedType')).toEqual(expectedType);
        done();
      });
    });

    it('Should display the second step.', done => {
      const expectedStep = 2;
      wrapper.find(AnimalSelector).prop('onSelectAnimal')('arg');

      setTimeout(() => {
        expect(wrapper.state('stepIndex')).toEqual(expectedStep);
        done();
      });
    });
  });

  describe('selectBreed', () => {
    beforeEach(() => {
      getPictureAndDescriptionMock.mockResolvedValue({});
    });

    it('Should get random picture and description from selected breed and store it in the state.', done => {
      const givenType = 'a thing';
      const expectedBreed = 'breed-id';
      const expectedImage = 'nice picture';
      const expectedDescription = 'random description';

      getPictureAndDescriptionMock.mockImplementation((type, breed) => {
        if (type === givenType && breed === expectedBreed) {
          return Promise.resolve({
            img: expectedImage,
            description: expectedDescription
          });
        }
      });

      wrapper.setState({ selectedType: givenType });
      wrapper.find(BreedSelector).prop('onSelectBreed')(expectedBreed);

      setTimeout(() => {
        expect(wrapper.state('selectedBreed').img).toEqual(expectedImage);
        expect(wrapper.state('selectedBreed').description).toEqual(expectedDescription);
        expect(wrapper.state('selectedBreed').id).toEqual(expectedBreed);
        done();
      });
    });

    it('Should display the third step.', done => {
      const expectedStep = 3;
      wrapper.find(BreedSelector).prop('onSelectBreed')('arg');

      setTimeout(() => {
        expect(wrapper.state('stepIndex')).toEqual(expectedStep);
        done();
      })
    });
  });

  describe('getNewPicture', () => {
    it('Should get another random picture from selected breed.', done => {
      const givenType = 'a thing';
      const givenBreed = 'breed-id';
      const expectedImage = 'nice picture';

      getPictureAndDescriptionMock.mockImplementation((type, breed) => {
        if (type === givenType && breed === givenBreed) {
          return Promise.resolve({
            id: givenBreed,
            img: expectedImage,
            description: ''
          });
        }
      });

      wrapper.setState({ selectedType: givenType });
      wrapper.setState({
        selectedBreed: {
          id: givenBreed,
          img: 'other-image'
        }
      });
      wrapper.find(AnimalViewer).prop('onReloadImage')();

      setTimeout(() => {
        expect(wrapper.state('selectedBreed').img).toEqual(expectedImage);
        done();
      });
    });
  });
});
