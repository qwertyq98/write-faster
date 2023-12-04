import React, { FC } from 'react';
import styles from "./Status.module.scss";

const Status: FC<{
  start: boolean | undefined;
  setStart: (value: boolean) => void;
}> = ({ start, setStart }) => (
  <>
    <h1>
      {typeof start === 'undefined'
        ? `⏱ Цель игры, как можно быстрее напечатать буквы и
                знаки, кроме пробелов, чтобы уложиться в таймер.`
        : `☹ Вы проиграли.`}
    </h1>
    <div className={styles["start-btn-wrapper"]}>
      <button onClick={() => setStart(true)}>Старт</button>
    </div>
  </>
);

export default Status;