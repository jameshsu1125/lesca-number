"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Uid = exports.ScrollTop = exports.Position = exports.Pad = exports.Dollar = exports.CoverFit = void 0;

/**
 * dynamic fix string length // 1 => 0001, 2 => 0002
 * @param {number} str file-path
 * @param {*} len
 * @returns
 */
var Pad = function Pad(num) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var s = '';

  for (var i = 0; i < len; i++) {
    s += '0';
  }

  return String(s + num).slice(len * -1);
};
/**
 * random id generator
 * @param {number} len id length
 * @returns random string
 */


exports.Pad = Pad;

var Uid = function Uid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var t = '';

  for (var i = 0; i < len; i++) {
    t += ((1 + Math.random()) * 0x10 | 0).toString(16).substring(1);
  }

  return t;
};
/**
 * number to dollar. ( 1000 => 1,000 )
 * @param {number} Num
 * @returns dollar string
 */


exports.Uid = Uid;

var Dollar = function Dollar(Num) {
  return Num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
/**
 * get current scrolltop for any browswer
 * @returns scrolltop
 */


exports.Dollar = Dollar;

var ScrollTop = function ScrollTop() {
  if (window) return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
};
/**
 * get client position of element
 * @param {*} ele
 * @returns top and left object
 */


exports.ScrollTop = ScrollTop;

var Position = function Position(ele) {
  if (window) {
    var rect = ele === null || ele === void 0 ? void 0 : ele.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    };
  }
};

exports.Position = Position;

var CoverFit = function CoverFit() {
  var imageSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    width: 1280,
    height: 720
  };
  var containerSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    width: window.innerWidth,
    height: window.innerHeight
  };
  var iw = imageSize.width,
      ih = imageSize.height;
  var cw = containerSize.width,
      ch = containerSize.height;
  var ir = ih / iw;
  var cr = ch / cw;
  var result = {};

  if (cr > ir) {
    // height 
    result.width = ch / ir;
    result.height = ch;
    result.left = (cw - iw) * .5;
    result.top = 0;
  } else {
    // width
    result.width = cw;
    result.height = cw * ir;
    result.left = 0;
    result.top = (ch - ih) * .5;
  }

  return result;
};

exports.CoverFit = CoverFit;
var _default = {
  Pad: Pad,
  Uid: Uid,
  Dollar: Dollar,
  ScrollTop: ScrollTop,
  Position: Position,
  CoverFit: CoverFit
};
exports["default"] = _default;