import * as React from 'react';

import './Step.scss';

export default ({ title, children }) => (
  <section>
    <div className="section-title">{title}</div>
    {children}
  </section>
);