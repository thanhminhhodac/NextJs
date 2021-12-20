// libs
import React from 'react';
import { Button } from 'antd';
import { BulbOutlined, GlobalOutlined } from '@ant-design/icons';
// style
import styles from './HeaderFunction.module.scss';

const HeaderFunction = () => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperInner}>
      <Button className={styles.contactButton}> Contact me </Button>
      <Button className={styles.contextButton} icon={<BulbOutlined />} />
      <Button className={styles.contextButton} icon={<GlobalOutlined />} />
    </div>
  </div>
);

export default HeaderFunction;
