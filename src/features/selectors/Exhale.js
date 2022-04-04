import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectExhale } from './selectorSlice';
import { makeInactive } from '../display/displaySlice';
import styles from '../counter/Counter.module.css';

function Exhale() {
  const seconds = useSelector(selectExhale);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Exhale</h3>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => {
            dispatch(makeInactive());
            dispatch(decrement('EXHALE'));
          }}>
          -
        </button>
        <span className={styles.value}>{seconds}</span>
        <button
          className={styles.button}
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
