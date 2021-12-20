// libs
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
// dataSource
import { navigationItem, navigationList } from 'dataSources/Header';
// styles
import styles from './HeaderNav.module.scss';

const HeaderNav = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        {navigationList.map((navigation: navigationItem) => (
          <Link href={navigation.path} passHref key={navigation.label}>
            <a
              className={cn(styles.navigationItem, {
                [styles.active]: navigation.path === router.asPath,
              })}
            >
              <h4>{navigation.label}</h4>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default HeaderNav;
