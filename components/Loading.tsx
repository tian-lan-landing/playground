import React from 'react';
import styles from './Loading.module.css';
import cx from 'class-names';

type FaceColor = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  front?: string;
  back?: string;
};

const Loading: React.FC<{ loading: boolean, grey?: boolean, transform?: string, faceColor?: FaceColor }> = props => {
  const { loading, grey, transform, faceColor } = props;
  return (
    <>
      <div className={cx(styles["cube-loading-wrapper"], loading && styles.loading, grey && styles.grey)}>
        <div className={styles["cube-loading"]} style={transform ? { transform } : undefined}>
          <div className={styles["front"]} style={{ backgroundColor: faceColor?.front }}>F</div>
          <div className={styles["back"]} style={{ backgroundColor: faceColor?.back }}>B</div>
          <div className={styles["right"]} style={{ backgroundColor: faceColor?.right }}>R</div>
          <div className={styles["left"]} style={{ backgroundColor: faceColor?.left }}>L</div>
          <div className={styles["top"]} style={{ backgroundColor: faceColor?.top }}>T</div>
          <div className={styles["bottom"]} style={{ backgroundColor: faceColor?.bottom }}>D</div>
        </div>
      </div>
    </>
  );
};

export default Loading;
