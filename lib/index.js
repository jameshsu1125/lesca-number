define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValidateURL = exports.ValidatePhone = exports.ValidateEmail = exports.CoverSize = exports.Position = exports.ScrollTop = exports.Dollar = exports.Uid = exports.Pad = void 0;
    /**
     * dynamic fix string length // 1 => 0001, 2 => 0002
     * @param {string | number} num file-path
     * @param {*} len
     * @returns
     */
    var Pad = function (num, len) {
        if (len === void 0) { len = 4; }
        var s = '';
        for (var i = 0; i < len; i++)
            s += '0';
        return String(s + num).slice(len * -1);
    };
    exports.Pad = Pad;
    /**
     * random id generator
     * @param {number} len id length
     * @returns random string
     */
    var Uid = function (len) {
        if (len === void 0) { len = 10; }
        var t = '';
        for (var i = 0; i < len; i++) {
            t += (((1 + Math.random()) * 0x10) | 0).toString(16).substring(1);
        }
        return t;
    };
    exports.Uid = Uid;
    /**
     * number to dollar. ( 1000 => 1,000 )
     * @param {number | string} Num
     * @returns dollar string
     */
    var Dollar = function (Num) {
        return Num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    exports.Dollar = Dollar;
    /**
     * get current scrolltop for any browswer
     * @returns scrolltop
     */
    var ScrollTop = function () {
        if (window)
            return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    };
    exports.ScrollTop = ScrollTop;
    /**
     * get client position of element
     * @param {HTMLElement} ele
     * @returns top and left object
     */
    var Position = function (ele) {
        if (window) {
            var rect = ele === null || ele === void 0 ? void 0 : ele.getBoundingClientRect();
            return {
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
            };
        }
    };
    exports.Position = Position;
    /**
     * calc object clientRect of cover size { width, height, top, left }
     * @param imageSize
     * @param containerSize
     * @returns
     */
    var CoverSize = function (imageSize, containerSize) {
        if (imageSize === void 0) { imageSize = { width: 1280, height: 720 }; }
        if (containerSize === void 0) { containerSize = { width: window.innerWidth, height: window.innerHeight }; }
        var iw = imageSize.width, ih = imageSize.height;
        var cw = containerSize.width, ch = containerSize.height;
        var ir = ih / iw;
        var cr = ch / cw;
        var result = { width: 0, height: 0, left: 0, top: 0 };
        if (cr > ir) {
            result.width = ch / ir;
            result.height = ch;
            result.left = (cw - iw) * 0.5;
            result.top = 0;
        }
        else {
            result.width = cw;
            result.height = cw * ir;
            result.left = 0;
            result.top = (ch - ih) * 0.5;
        }
        return result;
    };
    exports.CoverSize = CoverSize;
    var ValidateEmail = function (email) {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    exports.ValidateEmail = ValidateEmail;
    var ValidatePhone = function (phone) {
        return phone !== '' && phone.length === 10 && phone.slice(0, 2) === '09';
    };
    exports.ValidatePhone = ValidatePhone;
    var ValidateURL = function (str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!pattern.test(str);
    };
    exports.ValidateURL = ValidateURL;
    var Mise = {
        Pad: exports.Pad,
        Uid: exports.Uid,
        Dollar: exports.Dollar,
        ScrollTop: exports.ScrollTop,
        Position: exports.Position,
        CoverSize: exports.CoverSize,
        ValidateEmail: exports.ValidateEmail,
        ValidatePhone: exports.ValidatePhone,
        ValidateURL: exports.ValidateURL,
    };
    exports.default = Mise;
});
