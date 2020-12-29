import React from 'react';
import { render } from 'react-dom';
import { Pad, Uid } from './../lib/index';

import './styles.css';

for (var i = 0; i < 100; i++) {
	console.log(Pad(i, 4));
}

console.log(Uid(10));

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));
