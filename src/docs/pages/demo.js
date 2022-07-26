import { Box, Button, ButtonGroup, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { CoverSize, Dollar, Pad, Uid } from '../../lib';

console.log(Dollar(93848421100));
const Demo = () => {
  const [count, setCount] = useState(0);
  const [uid, setUid] = useState('');
  const [dollar, setDollar] = useState(0);
  const [size, setSize] = useState({ width: null, heigh: null, top: null, left: null });

  const [imageWidth, setImageWidth] = useState(720);
  const [imageHeight, setImageHeight] = useState(480);
  const [containerWidth, setContainerWidth] = useState(1000);
  const [containerHeight, setContainerHeight] = useState(1000);

  useEffect(() => {}, []);
  return (
    <div className='Demo' style={{ paddingBottom: '30px' }}>
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
      <h4>calculator cover size</h4>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
        marginTop={2}
      >
        children size
        <div>
          <TextField
            required
            id='outlined-required'
            value={imageWidth}
            label='width'
            type={'number'}
            onChange={(e) => {
              setImageWidth(parseInt(e.target.value));
            }}
          />
          <TextField
            required
            id='outlined-required'
            value={imageHeight}
            label='width'
            type={'number'}
            onChange={(e) => {
              setImageHeight(parseInt(e.target.value));
            }}
          />
        </div>
        container size
        <div>
          <TextField
            required
            id='outlined-required'
            value={containerWidth}
            label='width'
            type={'number'}
            onChange={(e) => {
              setContainerWidth(parseInt(e.target.value));
            }}
          />
          <TextField
            required
            id='outlined-required'
            value={containerHeight}
            label='width'
            type={'number'}
            onChange={(e) => {
              setContainerHeight(parseInt(e.target.value));
            }}
          />
        </div>
      </Box>
      <pre>
        <code>{JSON.stringify(size)}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            const coverSize = CoverSize(
              { width: imageWidth, height: imageHeight },
              { width: containerWidth, height: containerHeight },
            );

            setSize(coverSize);
          }}
        >
          calculator
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
