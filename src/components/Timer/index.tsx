import React, { FC } from 'react';
import styles from "./Timer.module.scss";

const Timer: FC<{
  counter: number;
}> = ({ counter }) => (
  <>
    <div className={styles.timer}>Таймер:{counter}</div>
  </>
);

export default Timer;