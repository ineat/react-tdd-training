import * as React from 'react';
import { shallow } from 'enzyme';

import Step from '.';

describe('Step', () => {
  const props = {
    title: 'Random title',
    active: true
  };
  it('Should display given title.', () => {
    const wrapper = shallow(
      <Step {...props}>
        <div>Coucou</div>
      </Step>
    );
    expect(wrapper.find('.section-title').text()).toEqual(props.title);
  });

  it('Should hide the given section when the active prop is set to false.', () => {
    const hiddenProps = {
      ...props,
      active: false
    }
    const wrapper = shallow(
      <Step {...hiddenProps}>
        <div>Coucou</div>
      </Step>
    );
    expect(wrapper.find('.section').hasClass('hidden')).toBe(true);
    expect(wrapper.find('.section').hasClass('active')).toBe(false);
  });

  it('Should display the given section when the active prop is set to true.', () => {
    const wrapper = shallow(
      <Step {...props}>
        <div>Coucou</div>
      </Step>
    );
    expect(wrapper.find('.section').hasClass('active')).toBe(true);
    expect(wrapper.find('.section').hasClass('hidden')).toBe(false);
  });
});