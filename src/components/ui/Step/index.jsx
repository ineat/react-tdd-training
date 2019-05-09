import * as React from 'react';

import './Step.scss';

export default ({ title, children, active}) => {
  const sectionClass = active ? 'section active' : 'section hidden';
  return (
    <section className={sectionClass}>
      <div className="section-title">{title}</div>
      {children}
    </section>
  );
};