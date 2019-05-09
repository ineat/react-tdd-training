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

    expect(steps.get(0).props.className).toEqual('step-indicator active');
    expect(steps.get(1).props.className).toEqual('step-indicator');
    expect(steps.get(2).props.className).toEqual('step-indicator');
  });

  it('Should highlight the second step when the given active step index is 2.', () => {
    const wrapper = shallow(<Progressbar  activeStepIndex={2}/>);

    const steps = wrapper.find('.step-indicator');

    expect(steps.get(0).props.className).toEqual('step-indicator');
    expect(steps.get(1).props.className).toEqual('step-indicator active');
    expect(steps.get(2).props.className).toEqual('step-indicator');
  });

  it('Should highlight the third step when the given active step index is 3.', () => {
    const wrapper = shallow(<Progressbar  activeStepIndex={3}/>);

    const steps = wrapper.find('.step-indicator');

    expect(steps.get(0).props.className).toEqual('step-indicator');
    expect(steps.get(1).props.className).toEqual('step-indicator');
    expect(steps.get(2).props.className).toEqual('step-indicator active');
  });
});