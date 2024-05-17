import { ClientRect, Size } from './type';

/**
 * dynamic fix string length // 1 => 0001, 2 => 0002
 * @param {string | number} num file-path
 * @param {*} len
 * @returns
 */
export const Pad = (num: string | number, len: number = 4) => {
  var s = '';
  for (var i = 0; i < len; i++) s += '0';
  return String(s + num).slice(len * -1);
};

/**
 * random id generator
 * @param {number} len id length
 * @returns random string
 */
export const Uid = (len: number = 10) => {
  var t = '';
  for (var i = 0; i < len; i++) {
    t += (((1 + Math.random()) * 0x10) | 0).toString(16).substring(1);
  }
  return t;
};

/**
 * number to dollar. ( 1000 => 1,000 )
 * @param {number | string} Num
 * @returns dollar string
 */
export const Dollar = (Num: number | string) => {
  return Num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * get current scrolltop for any browswer
 * @returns scrolltop
 */
export const ScrollTop = () => {
  if (window)
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
};

/**
 * get client position of element
 * @param {HTMLElement} ele
 * @returns top and left object
 */
export const Position = (ele: HTMLElement) => {
  if (window) {
    var rect = ele?.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };
  }
};

/**
 * calc object clientRect of cover size { width, height, top, left }
 * @param imageSize
 * @param containerSize
 * @returns
 */
export const CoverSize = (
  imageSize: Size = { width: 1280, height: 720 },
  containerSize: Size = { width: window.innerWidth, height: window.innerHeight },
) => {
  const { width: iw, height: ih } = imageSize;
  const { width: cw, height: ch } = containerSize;

  const ir = ih / iw;
  const cr = ch / cw;
  const result: ClientRect = { width: 0, height: 0, left: 0, top: 0 };

  if (cr > ir) {
    result.width = ch / ir;
    result.height = ch;
    result.left = (cw - result.width) * 0.5;
    result.top = 0;
    console.log(cw, iw);
  } else {
    result.width = cw;
    result.height = cw * ir;
    result.left = 0;
    result.top = (ch - result.height) * 0.5;
  }
  return result;
};

const Mise = {
  Pad,
  Uid,
  Dollar,
  ScrollTop,
  Position,
  CoverSize,
};

export default Mise;
