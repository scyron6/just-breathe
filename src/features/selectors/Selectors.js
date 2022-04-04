import React, { Fragment } from 'react';
import { Inhale } from './Inhale';
import Hold from './Hold';
import Exhale from './Exhale';

const Selectors = () => {
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <Inhale />
      <Hold />
      <Exhale />
      <Hold num={2} />
    </div>
  );
};

export default Selectors;
