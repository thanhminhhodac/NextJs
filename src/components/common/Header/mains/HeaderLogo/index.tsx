// libs
import React from 'react';
import Link from 'next/link';
// style
import styles from './HeaderLogo.module.scss';

const HeaderLogo = () => (
  <div className={styles.wrapper}>
    <Link href="/" passHref>
      <a className={styles.wrapperInner}>
        <div className={styles.box}> TM </div>
        <h3 className={styles.label}> Portfolio</h3>
      </a>
    </Link>
  </div>
);

export default HeaderLogo;
