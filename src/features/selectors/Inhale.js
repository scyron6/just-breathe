import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectInhale } from './selectorSlice';
import { makeInactive } from '../display/displaySlice';
import styles from '../counter/Counter.module.css';

export function Inhale() {
  const seconds = useSelector(selectInhale);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Inhale</h3>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => {
            dispatch(makeInactive());
            dispatch(decrement('INHALE'));
          }}>
          -
        </button>
        <span className={styles.value}>{seconds}</span>
        <button
          className={styles.button}
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
