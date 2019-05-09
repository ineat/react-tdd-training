import AnimalSelector from ".";
import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Animal from '../Animal';

describe('Animal selector', () => {
  const props = {
    onSelectAnimal: jest.fn()
  };

  it('Should render.', () => {
    expect(mount(<AnimalSelector {...props} />));
  });

  it('Should call "onSelectAnimal" with "cat" type for first image.', () => {
    const wrapper = shallow(<AnimalSelector {...props} />);

    wrapper.find(Animal).get(0).props.onSelectAnimal();

    expect(props.onSelectAnimal).toHaveBeenCalledWith('cat');
  });

  it('Should call "onSelectAnimal" with "dog" type for second image.', () => {
    const wrapper = shallow(<AnimalSelector {...props} />);

    wrapper.find(Animal).get(1).props.onSelectAnimal();

    expect(props.onSelectAnimal).toHaveBeenCalledWith('dog');
  });
});