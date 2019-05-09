import * as React from 'react';
import { mount, shallow } from 'enzyme';

import AnimalViewer from '.';

describe('Animal viewer', () => {
  const defaultProps = {
    img: 'my-dog.jpg',
    description: 'Nice animal',
    onReloadImage: jest.fn()
  }
  it('Should render.', () => {
    expect(mount(<AnimalViewer { ...defaultProps } />));
  });

  it('Should call "onReloadImage" prop when clicking on button.', () => {
    const wrapper = shallow(<AnimalViewer { ...defaultProps } />);

    wrapper.find('.reload-button').prop('onClick')();

    expect(defaultProps.onReloadImage).toHaveBeenCalled();
  });

  it('Should display "No description" when no description are provided.', () => {
    const props = {
      ...defaultProps,
      description: null
    };
    const wrapper = shallow(<AnimalViewer { ...props } />);

    expect(wrapper.find('.description').text()).toEqual('No description');
  });

  it('Should display the description when the description is provided.', () => {
    const wrapper = shallow(<AnimalViewer { ...defaultProps } />);

    expect(wrapper.find('.description').text()).toEqual(defaultProps.description);
  });
});