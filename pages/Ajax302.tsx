import { useEffect, useState } from 'react';

const Ajax302: React.FC = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    fetch('/api/302').then(res => res.text()).then(text => {
      console.log('%cGot response:', 'color:green', text);
      setText(text);
    });
  }, [])
  return <pre style={{ whiteSpace: 'break-spaces' }}>{text}</pre>;
}

export default Ajax302;
