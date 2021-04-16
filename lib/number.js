"use strict";

module.exports = {
  Pad: function Pad(str) {
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var s = '';

    for (var i = 0; i < max; i++) {
      s += '0';
    }

    return String(s + str).slice(max * -1);
  },
  Uid: function Uid() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var t = '';

    for (var i = 0; i < num; i++) {
      t += ((1 + Math.random()) * 0x10 | 0).toString(16).substring(1);
    }

    return t;
  },
  Dollar: function Dollar(Num) {
    return Num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  ScrollTop: function ScrollTop() {
    if (window) window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  },
  Position: function Position(element) {
    var x = 0;
    var y = 0;

    while (element) {
      x += element.offsetLeft - element.scrollLeft + element.clientLeft;
      y += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }

    return {
      top: x,
      left: y
    };
  }
};