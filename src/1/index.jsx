import React from 'react';
import { render } from 'react-dom';
import { Pad, Uid, ScrollTop, Position, CoverFit } from './../lib/index';

import './styles.css';

for (var i = 0; i < 100; i++) {
	console.log(Pad(i, 4));
}

console.log(Uid(10));
console.log(ScrollTop());
setTimeout(() => {
	const target = document.getElementById('div2');
	console.log(Position(target));
}, 1000);

const a = CoverFit();
console.log(a);

function Demo() {
	return (
		<>
			<div id='div'>
				<div id='div2'></div>
			</div>
		</>
	);
}

render(<Demo />, document.getElementById('app'));
