import { Button, ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import { Pad, Uid, Dollar } from '../../lib';

console.log(Dollar(93848421100));
const Demo = () => {
  const [count, setCount] = useState(0);
  const [uid, setUid] = useState('');
  const [dollar, setDollar] = useState(0);

  useEffect(() => {}, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>

      <h4>add "0" to specific length of number.</h4>
      <pre>
        <code>
          {count} {'=>'} {Pad(count, 3)}
        </code>
      </pre>

      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          increase counter
        </Button>
      </ButtonGroup>

      <h4>generate random UID</h4>
      <pre>
        <code>{uid}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            setUid(Uid(10));
          }}
        >
          increase counter
        </Button>
      </ButtonGroup>

      <h4>transform number to dollars.</h4>
      <pre>
        <code>{Dollar(dollar)}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            setDollar(Math.floor(Math.random() * 999999999));
          }}
        >
          increase counter
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
