import * as React from 'react';
import { shallow, mount } from 'enzyme';

import AnimalSelector from '.';
import Animal from '../Animal';

describe('Animal selector', () => {
  const props = { onSelectAnimal: jest.fn() };
  it('Should render.', () => {
    expect(mount(<AnimalSelector {...props} />)).toMatchSnapshot();
  });

  it('Should call "onSelectAnimal" with "cat" type for first image.', () => {
    const wrapper = shallow(<AnimalSelector {...props} />);
    wrapper.find(Animal).at(0).prop('onSelectAnimal')();

    expect(props.onSelectAnimal).toHaveBeenCalledWith('cat');
  });

  it('Should call "onSelectAnimal" with "dog" type for second image.', () => {
    const wrapper = shallow(<AnimalSelector {...props} />);
    wrapper.find(Animal).at(1).prop('onSelectAnimal')();

    expect(props.onSelectAnimal).toHaveBeenCalledWith('dog');
  });
});