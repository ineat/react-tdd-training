import * as React from 'react';
import { mount, shallow } from 'enzyme';

import Animal from '.';

describe('Animal', () => {
  const onSelectAnimalMock = jest.fn();
  const props = {
    image: 'dat image',
    alt: 'Arg arg!',
    description: 'I love dat',
    onSelectAnimal: () => onSelectAnimalMock('Arg')
  };

  it('Should render.', () => {
    expect(mount(<Animal {...props} />)).toMatchSnapshot();
  });

  describe('Check props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Animal {...props} />);
    });

    it('Should call "onSelectAnimal" when clicking on it.', () => {
      wrapper.find('.animal').simulate('click');

      expect(onSelectAnimalMock).toHaveBeenCalled();
    });

    it('Should display the description.', () => {
      const text = wrapper.find('.description').text();

      expect(text).toEqual(props.description);
    });

    it('Should display the image by using given image and given alt text.', () => {
      const { src, alt } = wrapper.find('.animal').props();

      expect(src).toEqual(props.image);
      expect(alt).toEqual(props.alt);
    });
  });
});