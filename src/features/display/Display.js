import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timer from './Timer.js';
import {
  selectExhale,
  selectHold,
  selectInhale,
  selectHold2,
} from '../selectors/selectorSlice';
import { selectActive, switchActive } from './displaySlice';

export default function Display() {
  const active = useSelector(selectActive);
  const inhale = useSelector(selectInhale);
  const hold = useSelector(selectHold);
  const hold2 = useSelector(selectHold2);
  const exhale = useSelector(selectExhale);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '40px' }}>
      <div
        onClick={() => dispatch(switchActive())}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          height: '200px',
          width: '200px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
        {active ? (
          <Timer inhale={inhale} hold={hold} exhale={exhale} hold2={hold2} />
        ) : (
          'Click to Start'
        )}
      </div>
    </div>
  );
}
