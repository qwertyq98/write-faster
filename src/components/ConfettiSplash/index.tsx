import React, { FC } from 'react';
import Confetti from 'react-confetti';
import styles from './Confetti.module.scss';

const ConfettiSplash: FC<{ confetti: boolean }> = ({ confetti }) => (
  <div className={`${confetti ? styles['opacity-on'] : styles['opacity-off']}`}>
    <Confetti />
  </div>
);


export default ConfettiSplash;