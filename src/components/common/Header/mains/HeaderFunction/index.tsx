// libs
import React from 'react';
import { Button } from 'antd';
import { BulbOutlined, GlobalOutlined } from '@ant-design/icons';
// context
import { useTheme } from 'contexts/ThemeContext';
// style
import styles from './HeaderFunction.module.scss';

const HeaderFunction = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <Button className={styles.contactButton}>Contact me</Button>
        <Button
          className={styles.contextButton}
          onClick={toggleTheme}
          icon={<BulbOutlined />}
        />
        <Button
          className={styles.contextButton}
          onClick={toggleTheme}
          icon={<GlobalOutlined />}
        />
      </div>
    </div>
  );
};

export default HeaderFunction;
