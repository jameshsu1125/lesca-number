import { Box, Button, ButtonGroup, TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import { CoverSize, Dollar, Pad, Uid, ValidateEmail, ValidatePhone, ValidateURL } from '../../lib';

console.log(Dollar(93848421100));
const Demo = () => {
  const [count, setCount] = useState(0);
  const [uid, setUid] = useState('');
  const [dollar, setDollar] = useState(0);
  const [size, setSize] = useState({ width: null, heigh: null, top: null, left: null });

  const [imageWidth, setImageWidth] = useState(1920);
  const [imageHeight, setImageHeight] = useState(1423);
  const [containerWidth, setContainerWidth] = useState(1349);
  const [containerHeight, setContainerHeight] = useState(500);

  const [email, setEmail] = useState('');
  const checkEmail = useCallback(() => {
    if (ValidateEmail(email)) {
      alert('ok');
    } else {
      alert('error format');
    }
  }, [email]);

  const [phone, setPhone] = useState('');
  const checkPhone = useCallback(() => {
    if (ValidatePhone(phone)) {
      alert('ok');
    } else {
      alert('error format');
    }
  }, [phone]);

  const [url, setUrl] = useState('');
  const checkURL = useCallback(() => {
    if (ValidateURL(url)) {
      alert('ok');
    } else {
      alert('error format');
    }
  }, [url]);

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

      <div>
        <h4>phone and email check</h4>
        <Box sx={{ marginTop: '10px' }}>
          <TextField
            required
            id='outlined-required'
            label='email'
            type='email'
            fullWidth
            onChange={(e) => {
              const { value } = e.target;
              setEmail(value);
            }}
          />

          <ButtonGroup variant='contained'>
            <Button onClick={checkEmail}>check email format</Button>
          </ButtonGroup>
        </Box>
        <Box sx={{ marginTop: '10px' }}>
          <TextField
            required
            id='outlined-required'
            label='phone'
            type='number'
            fullWidth
            onChange={(e) => {
              const { value } = e.target;
              setPhone(value);
            }}
          />

          <ButtonGroup variant='contained'>
            <Button onClick={checkPhone}>check email format</Button>
          </ButtonGroup>
        </Box>

        <Box sx={{ marginTop: '10px' }}>
          <TextField
            required
            id='outlined-required'
            label='URL'
            type='string'
            fullWidth
            onChange={(e) => {
              const { value } = e.target;
              setUrl(value);
            }}
          />

          <ButtonGroup variant='contained'>
            <Button onClick={checkURL}>check url format</Button>
          </ButtonGroup>
        </Box>
      </div>
    </div>
  );
};
export default Demo;
