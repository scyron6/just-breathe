import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selectHold, selectHold2 } from './selectorSlice';
import { makeInactive } from '../display/displaySlice';
import styles from '../counter/Counter.module.css';

function Hold({ num }) {
  const hold = useSelector(selectHold);
  const hold2 = useSelector(selectHold2);
  const dispatch = useDispatch();

  const seconds = num ? hold2 : hold;

  return (
    <div>
      <h3>Hold</h3>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => {
            dispatch(makeInactive());
            dispatch(decrement(num ? 'HOLD' + num : 'HOLD'));
          }}>
          -
        </button>
        <span className={styles.value}>{seconds}</span>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => {
            dispatch(makeInactive());
            dispatch(increment(num ? 'HOLD' + num : 'HOLD'));
          }}>
          +
        </button>
      </div>
    </div>
  );
}

export default Hold;
