import * as React from 'react';
import { mount, shallow } from 'enzyme';

import Animal from '.';

describe('Animal', () => {
  const onSelectAnimalMock = jest.fn();
  const props = {
    img: 'dat image',
    alt: 'Arg arg!',
    description: 'I love dat',
    onSelectAnimal: () => onSelectAnimalMock('Arg')
  };

  it('Should render.', () => {
    expect(mount(<Animal {...props} />)).toMatchSnapshot();
  });

  it('Should call "onSelectAnimal" when clicking on it.', () => {
    const wrapper = shallow(<Animal {...props} />);

    wrapper.find('.animal').simulate('click');

    expect(onSelectAnimalMock).toHaveBeenCalled();
  });
});