// libs
import React from 'react';
import cn from 'classnames';
// hook
import { useTypeWritter } from 'hooks/useTypeWritter';
// style
import styles from './TextTransform.module.scss';

const TextTransform = () => {
  const { typedText } = useTypeWritter([
    'Welcome to my Profolio',
    'Hope you like it',
  ]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <div className={styles.title}>Hello!</div>
        <div className={cn(styles.description)}>
          I am
          <br />
          THANH MINH
        </div>
        <div className={cn(styles.content, styles.blinkingCursor)}>
          {typedText}
        </div>
      </div>
    </div>
  );
};

export default TextTransform;
