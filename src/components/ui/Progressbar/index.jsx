import * as React from 'react';

import './Progressbar.scss';

export default ({ activeStepIndex }) => {
  const getStepIndicatorClass = (index, activeIndex) =>
    index === activeIndex ? 'step-indicator active' : 'step-indicator';

  const steps = [{
    index: 1,
    label: 'Animal'
  }, {
    index: 2,
    label: 'Breed'
  }, {
    index: 3,
    label: 'Picture'
  }];

  return (
    <ul id="progressbar">
      {
        steps.map(step =>
          <li className={getStepIndicatorClass(step.index, activeStepIndex)} key={step.index}>
            {step.label}
          </li>
        )
      }
    </ul>
  );
};