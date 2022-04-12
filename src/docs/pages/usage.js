import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import Code from '../components/code';
import { name } from '../config';

const codes = [
  {
    title: '1. Installation',
    code: `npm install ${name} --save`,
    type: 'text',
  },
  {
    title: '2. Usage',
    code: `import { Pad, Uid, Dollar } from '${name}';
    
for (var i = 0; i < 100; i++) {
  let img_url = './' + Pad(i, 4) + '.png';
  console.log(img_url); // => 0001.png ~ 0100.png
}

const UID = Uid(10);
const fileURL = UID + '.jpg';
saveFile(fileURL, base64);

const message = 'total cost:' + Dolar(3495000) + 'dollar';

`,
    type: 'js',
  },
];

const Usage = () => {
  useEffect(() => {}, []);
  return (
    <div className='Usage'>
      <h2>Usage</h2>
      {codes.map((e) => (
        <div key={e.title}>
          <h3>{e.title}</h3>
          <Code code={e.code} theme={e.type} />
        </div>
      ))}
    </div>
  );
};
export default Usage;
