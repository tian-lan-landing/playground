import React, { useRef, useState } from 'react';
import Loading from '../components/Loading';

const topColor = '#E9F5FE';
const leftColor = '#BAC9FF';
const frontColor = '#92ABFB';

const CubeLoading: React.FC<{}> = () => {
  const options = [
    {
      cube: 'rotateX(-30deg) rotateY(45deg)',
      faceColor: { left: leftColor, top: topColor, front: frontColor },
    },
    {
      // 12.5%, 25%
      cube: 'rotateX(-30deg) rotateY(45deg) rotateZ(0.25turn)',
      faceColor: { left: topColor, bottom: leftColor, front: frontColor },
    },
    {
      // 37.5%, 50%
      cube: 'rotateX(-30deg) rotateY(45deg) rotateZ(0.25turn) rotateX(90deg)',
      faceColor: { left: topColor, bottom: frontColor, back: leftColor },
    },
    {
      // 62.5%, 75%
      cube: 'rotateX(-30deg) rotateY(45deg) rotateZ(0.25turn) rotateX(90deg) rotateZ(-0.25turn)',
      faceColor: { left: frontColor, top: topColor, back: leftColor },
    },
    {
      // 87.5%, 99%
      cube: 'rotateX(-30deg) rotateY(45deg) rotateZ(0.25turn) rotateX(90deg) rotateZ(-0.25turn) rotateY(-90deg)',
      faceColor: { left: leftColor, top: topColor, front: frontColor },
    },
  ];
  const [transform, setTransform] = useState(options[0]);
  return <>
    {/* <div><input onBlur={e => setTransform(e.target.value)} defaultValue={transform} style={{ width: '100%' }} /></div> */}
    <ul style={{ marginTop: '80px' }}>
      {options.map(o => (
        <li key={o.cube} onClick={() => setTransform(o)} style={{ backgroundColor: o.cube === transform.cube ? '#ddd' : 'white' }}>{o.cube}</li>
      ))}
    </ul>
    <Loading loading grey transform={transform.cube} faceColor={transform.faceColor} />
  </>;
}

export default CubeLoading;
