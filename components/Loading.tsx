import React from 'react';
import styles from './Loading.module.css';
import cx from 'class-names';

const Loading: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <>
      <div className={cx(styles["cube-loading-wrapper"], loading && styles.loading)}>
        <div className={styles["cube-loading"]}>
          <div className={styles["front"]}></div>
          <div className={styles["back"]}></div>
          <div className={styles["right"]}></div>
          <div className={styles["left"]}></div>
          <div className={styles["top"]}></div>
          <div className={styles["bottom"]}></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
