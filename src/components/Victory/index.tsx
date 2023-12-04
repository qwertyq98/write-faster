import React, { FC } from 'react';
import styles from "../LettersCount/LettersCount.module.scss";

const Victory: FC<{ victory: number }> = ({ victory }) => {
  return (
    <>
      {victory > 0 && (
        <div className="quote-letters-count">
          Побед{victory === 1 ? 'а' : 'ы'}:
          <span className={styles.badge}>{victory} 🙂</span>
        </div>
      )}
    </>
  );
};


export default Victory;