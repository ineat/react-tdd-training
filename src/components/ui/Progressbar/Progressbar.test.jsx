import * as React from 'react';
import { mount, shallow } from 'enzyme';

import Progressbar from '.';

describe('Progressbar', () => {
  it('Should render.', () => {
    expect(mount(<Progressbar activeStepIndex={1} />)).toMatchSnapshot();
  });

  it('Should highlight the first step when the given active step index is 1.', () => {
    const wrapper = shallow(<Progressbar activeStepIndex={1} />);

    const steps = wrapper.find('.step-indicator');

    expect(steps.at(0).hasClass('active')).toEqual(true);
    expect(steps.at(1).hasClass('active')).toEqual(false);
    expect(steps.at(2).hasClass('active')).toEqual(false);
  });

  it('Should highlight the second step when the given active step index is 2.', () => {
    const wrapper = shallow(<Progressbar activeStepIndex={2}/>);

    const steps = wrapper.find('.step-indicator');

    expect(steps.at(0).hasClass('active')).toEqual(false);
    expect(steps.at(1).hasClass('active')).toEqual(true);
    expect(steps.at(2).hasClass('active')).toEqual(false);
  });

  it('Should highlight the third step when the given active step index is 3.', () => {
    const wrapper = shallow(<Progressbar activeStepIndex={3}/>);

    const steps = wrapper.find('.step-indicator');

    expect(steps.at(0).hasClass('active')).toEqual(false);
    expect(steps.at(1).hasClass('active')).toEqual(false);
    expect(steps.at(2).hasClass('active')).toEqual(true);
  });
});