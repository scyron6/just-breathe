import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectExhale } from './selectorSlice';
import { makeInactive } from '../display/displaySlice';

function Exhale() {
  const seconds = useSelector(selectExhale);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Exhale</h1>
      <div>
        <button
          aria-label='Decrement value'
          onClick={() => {
            dispatch(makeInactive());
            dispatch(decrement('EXHALE'));
          }}>
          -
        </button>
        <span>{seconds}</span>
        <button
          aria-label='Increment value'
          onClick={() => {
            dispatch(makeInactive());
            dispatch(increment('EXHALE'));
          }}>
          +
        </button>
      </div>
    </div>
  );
}

export default Exhale;
