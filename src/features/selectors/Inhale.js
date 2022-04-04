import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectInhale } from './selectorSlice';
import { makeInactive } from '../display/displaySlice';

export function Inhale() {
  const seconds = useSelector(selectInhale);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Inhale</h1>
      <div>
        <button
          aria-label='Decrement value'
          onClick={() => {
            dispatch(makeInactive());
            dispatch(decrement('INHALE'));
          }}>
          -
        </button>
        <span>{seconds}</span>
        <button
          aria-label='Increment value'
          onClick={() => {
            dispatch(makeInactive());
            dispatch(increment('INHALE'));
          }}>
          +
        </button>
      </div>
    </div>
  );
}
