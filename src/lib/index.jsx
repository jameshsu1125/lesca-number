/**
 * dynamic fix string length // 1 => 0001, 2 => 0002
 * @param {number} str file-path
 * @param {*} len
 * @returns
 */
const Pad = (num, len = 4) => {
	var s = '';
	for (var i = 0; i < len; i++) s += '0';
	return String(s + num).slice(len * -1);
};

/**
 * random id generator
 * @param {number} len id length
 * @returns random string
 */
const Uid = (len = 10) => {
	var t = '';
	for (var i = 0; i < len; i++) {
		t += (((1 + Math.random()) * 0x10) | 0).toString(16).substring(1);
	}
	return t;
};

/**
 * number to dollar. ( 1000 => 1,000 )
 * @param {number} Num
 * @returns dollar string
 */
const Dollar = (Num) => {
	return Num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * get current scrolltop for any browswer
 * @returns scrolltop
 */
const ScrollTop = () => {
	if (window) return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
};

/**
 * get client position of element
 * @param {*} ele
 * @returns top and left object
 */
const Position = (ele) => {
	if (window) {
		var rect = ele?.getBoundingClientRect();
		return {
			top: rect.top + window.scrollY,
			left: rect.left + window.scrollX,
		};
	}
};

export default { Pad, Uid, Dollar, ScrollTop, Position };
export { Pad, Uid, Dollar, ScrollTop, Position };
