import React, { FC } from 'react';
import styles from './LettersCount.module.scss';

const LettersCount: FC<{ quoteLetters: string }> = ({
  quoteLetters
}) => (
  <div className={styles['quote-letters-count']}>
    Букв и знаков осталось:
    <span className={styles.badge}>{quoteLetters?.length}</span>
  </div>
);


export default LettersCount;