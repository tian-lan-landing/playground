import { NextPage } from 'next/types';
import { useState } from 'react';
import styles from './ResponsiveFlexGrid.module.css';

const ResponsiveFlexGrid: NextPage = () => {
  const arr = Array(20).fill(0);
  const [minWidth, setMinWidth] = useState(300);
  const options = [50, 100, 200, 300, 400, 600, 900];
  return (
    <div>
      <div>
        <div>Set min width</div>
        <div style={{ display: 'flex' }}>
          {options.map(o => (
            <button key={o} onClick={() => setMinWidth(o)}>{o}px</button>
          ))}
        </div>
      </div>
      <div className={styles.grid}>
        {arr.map((_, i) => (
          <div key={i} className={styles.gridItem} style={{ minWidth: minWidth + 'px' }}>
            <div className={styles.gridItemAspectRatio}>
              <div className={styles.gridContent}>
                Test message {i}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveFlexGrid;
