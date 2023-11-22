import React, { FC } from 'react';
import Confetti from 'react-confetti';

const ConfettiSplash: FC<{ confetti: boolean }> = ({ confetti }) => (
  <div className={`${confetti ? 'opacity-on' : 'opacity-off'}`}>
    <Confetti />
  </div>
);


export default ConfettiSplash;