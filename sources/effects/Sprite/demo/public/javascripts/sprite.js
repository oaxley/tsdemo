/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../library/animation.ts":
/*!*********************************************************************************************!*\
  !*** /Users/sebastien/Sources/00_Sandbox/javascript/demoscene/sources/library/animation.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @file	animation.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-06
 *
 * @brief	Main Animation class
 * @history
 *			2018-09-06 - 1.0.0 - SLE
 *			Initial Version
 */
Object.defineProperty(exports, "__esModule", { value: true });
//------ imports
//------ classes
class Animation {
    //---- methods
    constructor() {
        //---- members
        this.isAnimated_ = false;
    }
    // start the animation
    start() {
        this.isAnimated_ = true;
    }
    // stop the animation
    stop() {
        this.isAnimated_ = false;
    }
    // toggle between start / stop
    toggle() {
        this.isAnimated_ = !this.isAnimated_;
    }
    // return the value for the flag
    isAnimated() {
        return this.isAnimated_;
    }
}
exports.Animation = Animation;


/***/ }),

/***/ "../../../library/backbuffer.ts":
/*!**********************************************************************************************!*\
  !*** /Users/sebastien/Sources/00_Sandbox/javascript/demoscene/sources/library/backbuffer.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @file	backbuffer.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-06
 *
 * @brief	Back Buffer / Surface definition
 * @history
 *			2018-09-06 - 1.0.0 - SLE
 *			Initial Version
 */
Object.defineProperty(exports, "__esModule", { value: true });
//------ imports
const surface_1 = __webpack_require__(/*! ./surface */ "../../../library/surface.ts");
//------ classes
class BackBuffer extends surface_1.Surface {
    //---- methods
    constructor(source) {
        // create a new canvas to hold the backbuffer
        let canvas = document.createElement("canvas");
        canvas.width = source.width;
        canvas.height = source.height;
        // initialize the Surface parent class with the new canvas
        super(canvas);
        // keep track of the "screen"
        this.pScreen = source;
    }
    // flip the back buffer to the "screen"
    flip() {
        let ctx = this.pScreen.getContext("2d");
        ctx.drawImage(this.canvas(), 0, 0);
    }
}
exports.BackBuffer = BackBuffer;


/***/ }),

/***/ "../../../library/color.ts":
/*!*****************************************************************************************!*\
  !*** /Users/sebastien/Sources/00_Sandbox/javascript/demoscene/sources/library/color.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @file	color.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-06
 *
 * @brief	Color class definition
 * @history
 *			2018-09-06 - 1.0.0 - SLE
 *			Initial Version
 */
Object.defineProperty(exports, "__esModule", { value: true });
//------ imports
//------ globals
// color models
var COLOR_MODEL;
(function (COLOR_MODEL) {
    COLOR_MODEL[COLOR_MODEL["RGB"] = 0] = "RGB";
    COLOR_MODEL[COLOR_MODEL["HSL"] = 1] = "HSL";
    COLOR_MODEL[COLOR_MODEL["HSV"] = 2] = "HSV";
    COLOR_MODEL[COLOR_MODEL["UNKNOWN"] = 3] = "UNKNOWN";
})(COLOR_MODEL = exports.COLOR_MODEL || (exports.COLOR_MODEL = {}));
// epsilon value to compare float
const epsilon = 0.0001;
//------ classes
class Color {
    //---- methods
    constructor(model = COLOR_MODEL.UNKNOWN, x = 0, y = 0, z = 0, a = 1.0) {
        //---- members
        this.model_ = COLOR_MODEL.UNKNOWN; // the color model
        this.x_ = 0; // the 1st component (R or H)
        this.y_ = 0; // the 2nd component (G or S)
        this.z_ = 0; // the 3rd component (B or L or V)
        this.a_ = 1.0; // the alpha value
        a = (a > 1.0) ? (a / 255) : a;
        this.setValues(model, x, y, z, a);
    }
    // set the members
    setValues(model, x, y, z, a) {
        if (model == COLOR_MODEL.RGB) {
            [this.model_, this.x_, this.y_, this.z_, this.a_] = [model, Math.round(x), Math.round(y), Math.round(z), a];
        }
        else {
            [this.model_, this.x_, this.y_, this.z_, this.a_] = [model, Math.round(x), y, z, a];
        }
    }
    // transcode a color from one space to another
    transcodeTo(model) {
        switch (this.model_) {
            case COLOR_MODEL.RGB:
                switch (model) {
                    case COLOR_MODEL.HSL:
                        return this.transcodeRGBtoHSL();
                        break;
                    case COLOR_MODEL.HSV:
                        return this.transcodeRGBtoHSV();
                        break;
                }
                break;
            case COLOR_MODEL.HSL:
                switch (model) {
                    case COLOR_MODEL.RGB:
                        return this.transcodeHSLtoRGB();
                        break;
                    case COLOR_MODEL.HSV:
                        return this.transcodeHSLtoHSV();
                        break;
                }
                break;
            case COLOR_MODEL.HSV:
                switch (model) {
                    case COLOR_MODEL.RGB:
                        return this.transcodeHSVtoRGB();
                        break;
                    case COLOR_MODEL.HSL:
                        return this.transcodeHSVtoHSL();
                        break;
                }
                break;
            default:
                throw new Error("Unable to transcode from Unknown color model!");
        }
        throw new Error("Unable to transcode a model to itself!");
    }
    //---- [begin] transcode main functions
    transcodeRGBtoHSL() {
        let r, g, b;
        let h, s, l;
        let min, max, delta;
        [r, g, b] = [(this.x_ / 255.0), (this.y_ / 255.0), (this.z_ / 255.0)];
        min = Math.min(r, g, b);
        max = Math.max(r, g, b);
        delta = max - min;
        // luminance
        l = (min + max) / 2.0;
        // saturation
        if (delta < epsilon) {
            s = 0;
        }
        else {
            if (l < 0.5) {
                s = delta / (max + min);
            }
            else {
                s = delta / (2.0 - max - min);
            }
        }
        // hue
        if ((delta - epsilon) < 0) {
            h = 0; // no hue if no saturation
        }
        else {
            if ((max - r) < epsilon) {
                h = (g - b) / delta;
            }
            else {
                if ((max - g) < epsilon) {
                    h = 2.0 + (b - r) / delta;
                }
                else {
                    h = 4.0 + (r - g) / delta;
                }
            }
            h = h * 60;
            while (h < 0) {
                h = h + 360;
            }
        }
        // encode the object - keep 3 decimals for precision
        return {
            'h': Math.round(h),
            's': Math.trunc(1000 * s) / 1000,
            'l': Math.trunc(1000 * l) / 1000,
            'a': this.a_
        };
    }
    transcodeRGBtoHSV() {
        let r, g, b;
        let h, s, v;
        let min, max, delta;
        [r, g, b] = [(this.x_ / 255.0), (this.y_ / 255.0), (this.z_ / 255.0)];
        min = Math.min(r, g, b);
        max = Math.max(r, g, b);
        delta = max - min;
        // hue
        if ((delta - epsilon) < 0) {
            h = 0; // no hue if no saturation
        }
        else {
            if ((max - r) < epsilon) {
                h = (g - b) / delta;
            }
            else {
                if ((max - g) < epsilon) {
                    h = 2.0 + (b - r) / delta;
                }
                else {
                    h = 4.0 + (r - g) / delta;
                }
            }
            h = h * 60;
            while (h < 0) {
                h = h + 360;
            }
        }
        // saturation
        if ((max - epsilon) < 0) {
            s = 0;
        }
        else {
            s = delta / max;
        }
        // value
        v = max;
        // encode the object - keep 3 decimals for precision
        return {
            'h': Math.round(h),
            's': Math.trunc(1000 * s) / 1000,
            'v': Math.trunc(1000 * v) / 1000,
            'a': this.a_
        };
    }
    transcodeHSLtoRGB() {
        let r, g, b;
        let h, s, l;
        let t1, t2;
        let tr, tg, tb;
        // function to compute the values
        function _computeValues(x) {
            let y;
            if ((6 * x) < 1.0) {
                y = t2 + ((t1 - t2) * 6 * x);
            }
            else {
                if ((2 * x) < 1.0) {
                    y = t1;
                }
                else {
                    if ((3 * x) < 2.0) {
                        y = t2 + ((t1 - t2) * (0.666 - x) * 6);
                    }
                    else {
                        y = t2;
                    }
                }
            }
            return y;
        }
        ;
        // setup values
        [h, s, l] = [this.x_, this.y_, this.z_];
        if (s == 0) {
            r = Math.round(255 * l);
            g = Math.round(255 * l);
            b = Math.round(255 * l);
        }
        else {
            // compute temporary values
            if (l < 0.5) {
                t1 = l * (1.0 + s);
            }
            else {
                t1 = (l + s) - (l * s);
            }
            t2 = (2 * l) - t1;
            h = h / 360.0;
            tr = ((h + 0.333) > 1.0) ? (h + 0.333 - 1.0) : (h + 0.333);
            tg = h;
            tb = ((h - 0.333) < 0.0) ? (h - 0.333 + 1.0) : (h - 0.333);
            // RGB values
            r = Math.round(255 * _computeValues(tr));
            g = Math.round(255 * _computeValues(tg));
            b = Math.round(255 * _computeValues(tb));
        }
        // return the object
        return {
            'r': r,
            'g': g,
            'b': b,
            'a': Math.round(this.a_ * 255)
        };
    }
    transcodeHSLtoHSV() {
        let h, s, l;
        let v, x;
        [h, s, l] = [this.x_, this.y_, this.z_];
        if (l < 0.5) {
            x = s * l;
        }
        else {
            x = s * (1 - l);
        }
        v = l + x;
        s = (2 * x) / v;
        // encode the object - keep 3 decimals for precision
        return {
            'h': Math.round(h),
            's': Math.trunc(1000 * s) / 1000,
            'v': Math.trunc(1000 * v) / 1000,
            'a': this.a_
        };
    }
    transcodeHSVtoRGB() {
        let r, g, b;
        let h, s, v;
        let c, x, m;
        [h, s, v] = [this.x_, this.y_, this.z_];
        c = v * s;
        m = v - c;
        x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        if ((h >= 0) && (h < 60)) {
            [r, g, b] = [c, x, 0];
        }
        else if ((h >= 60) && (h < 120)) {
            [r, g, b] = [x, c, 0];
        }
        else if ((h >= 120) && (h < 180)) {
            [r, g, b] = [0, c, x];
        }
        else if ((h >= 180) && (h < 240)) {
            [r, g, b] = [0, x, c];
        }
        else if ((h >= 240) && (h < 300)) {
            [r, g, b] = [x, 0, c];
        }
        else if ((h >= 300) && (h < 360)) {
            [r, g, b] = [c, 0, x];
        }
        else {
            [r, g, b] = [0, 0, 0];
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
        // return the object
        return {
            'r': r,
            'g': g,
            'b': b,
            'a': Math.round(this.a_ * 255)
        };
    }
    transcodeHSVtoHSL() {
        let h, s, l;
        let v, x;
        [h, s, v] = [this.x_, this.y_, this.z_];
        x = (2 - s) * v;
        // saturation
        if (x < 1) {
            s = (s * v) / x;
        }
        else {
            s = (s * v) / (2 - x);
        }
        // luminance
        l = x / 2;
        // encode the object - keep 3 decimals for precision
        return {
            'h': Math.round(h),
            's': Math.trunc(1000 * s) / 1000,
            'l': Math.trunc(1000 * v) / 1000,
            'a': this.a_
        };
    }
    //---- [end] transcode main functions
    //---- [begin] public methods
    model() {
        return this.model_;
    }
    setRGBA(x, y, z, a) {
        if (typeof x !== "number") {
            let a = (x.a > 1.0) ? (x.a / 255) : x.a;
            this.setValues(COLOR_MODEL.RGB, x.r, x.g, x.b, a);
        }
        else {
            // take care of undefined parameters
            y = (y === undefined) ? 0 : y;
            z = (z === undefined) ? 0 : z;
            a = (a === undefined) ? 1.0 : a;
            // clamp the alpha channel to [0.0, 1.0]
            a = (a > 1.0) ? (a / 255) : a;
            this.setValues(COLOR_MODEL.RGB, x, y, z, a);
        }
    }
    setHSLA(x, y, z, a) {
        if (typeof x !== "number") {
            this.setValues(COLOR_MODEL.HSL, x.h, x.s, x.l, x.a);
        }
        else {
            // take care of undefined parameters
            y = (y === undefined) ? 0 : y;
            z = (z === undefined) ? 0 : z;
            a = (a === undefined) ? 1.0 : a;
            this.setValues(COLOR_MODEL.HSL, x, y, z, a);
        }
    }
    setHSVA(x, y, z, a) {
        if (typeof x !== "number") {
            this.setValues(COLOR_MODEL.HSV, x.h, x.s, x.v, x.a);
        }
        else {
            // take care of undefined parameters
            y = (y === undefined) ? 0 : y;
            z = (z === undefined) ? 0 : z;
            a = (a === undefined) ? 1.0 : a;
            this.setValues(COLOR_MODEL.HSV, x, y, z, a);
        }
    }
    getRGBA() {
        if (this.model_ == COLOR_MODEL.RGB) {
            return {
                r: this.x_,
                g: this.y_,
                b: this.z_,
                a: Math.round(this.a_ * 255)
            };
        }
        else {
            return this.transcodeTo(COLOR_MODEL.RGB);
        }
    }
    getHSLA() {
        if (this.model_ == COLOR_MODEL.HSL) {
            return {
                h: this.x_,
                s: this.y_,
                l: this.z_,
                a: this.a_
            };
        }
        else {
            return this.transcodeTo(COLOR_MODEL.HSL);
        }
    }
    getHSVA() {
        if (this.model_ == COLOR_MODEL.HSV) {
            return {
                h: this.x_,
                s: this.y_,
                v: this.z_,
                a: this.a_
            };
        }
        else {
            return this.transcodeTo(COLOR_MODEL.HSV);
        }
    }
    //---- [end] public methods
    //---- [begin] CSS public methods
    CSSRGBValues() {
        let values = this.getRGBA();
        return `rgb(${values.r}, ${values.g}, ${values.b})`;
    }
    CSSRGBAValues() {
        let values = this.getRGBA();
        return `rgba(${values.r}, ${values.g}, ${values.b}, ${values.a})`;
    }
    CSSHSLValues() {
        let values = this.getHSLA();
        return `hsl(${values.h}, ${values.s}, ${values.l})`;
    }
    CSSHSLAValues() {
        let values = this.getHSLA();
        return `hsl(${values.h}, ${values.s}, ${values.l}, ${values.a})`;
    }
    CSSHexa() {
        function _hexConversion(value) {
            let str = value.toString(16);
            str = (str.length < 2) ? '0' + str : str;
            return str;
        }
        let values = this.getRGBA();
        let r = _hexConversion(values.r);
        let g = _hexConversion(values.g);
        let b = _hexConversion(values.b);
        return `#${r}${g}${b}`;
    }
    static *gradient(begin, end, count) {
        let xi, yi, zi, ai;
        let xf, yf, zf, af;
        let dx, dy, dz, da;
        let c1, c2;
        // check the color model
        if (begin.model() != end.model()) {
            throw Error("cannot create a gradient from different models!");
        }
        switch (begin.model()) {
            case COLOR_MODEL.RGB:
                c1 = begin.getRGBA();
                xi = c1.r, yi = c1.g, zi = c1.b, ai = c1.a;
                c2 = end.getRGBA();
                xf = c2.r, yf = c2.g, zf = c2.b, af = c2.a;
                break;
            default:
                throw Error("Unknown color model!");
        }
        // compute the delta for each components
        dx = (xf - xi) / count;
        dy = (yf - yi) / count;
        dz = (zf - zi) / count;
        da = (af - ai) / count;
        for (var i = 0; i < count; i++) {
            // return the new color
            yield new Color(begin.model(), xi, yi, zi, ai);
            // increment the values
            xi = xi + dx;
            yi = yi + dy;
            zi = zi + dz;
            ai = ai + da;
        }
    }
}
exports.Color = Color;


/***/ }),

/***/ "../../../library/sprite.ts":
/*!******************************************************************************************!*\
  !*** /Users/sebastien/Sources/00_Sandbox/javascript/demoscene/sources/library/sprite.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @file	sprite.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-06
 *
 * @brief	Sprite / Surface definition
 * @history
 *			2018-09-06 - 1.0.0 - SLE
 *			Initial Version
 */
Object.defineProperty(exports, "__esModule", { value: true });
//------ imports
const surface_1 = __webpack_require__(/*! ./surface */ "../../../library/surface.ts");
//------ interfaces
//------ classes
class Sprite extends surface_1.Surface {
    //---- members
    //---- methods
    constructor(img, transparency) {
        // create a canvas to hold the image
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        // copy the image on the canvas
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        if (transparency !== undefined) {
            let color = transparency.getRGBA();
            let imgData = ctx.getImageData(0, 0, img.width, img.height);
            for (let y = 0; y < img.height; y++) {
                let offset = y * img.width;
                for (let x = 0; x < img.width; x++) {
                    let position = (offset + x) << 2;
                    let r = imgData.data[position++];
                    let g = imgData.data[position++];
                    let b = imgData.data[position++];
                    if ((r == color.r) && (g == color.g) && (b == color.b)) {
                        imgData.data[position++] = 0;
                    }
                }
            }
            ctx.putImageData(imgData, 0, 0);
        }
        // initialize the parent class
        super(canvas);
    }
    // draw the sprite on another surface
    draw(x, y, target) {
        let ctx = target.context();
        ctx.drawImage(this.canvas(), x, y);
    }
}
exports.Sprite = Sprite;


/***/ }),

/***/ "../../../library/surface.ts":
/*!*******************************************************************************************!*\
  !*** /Users/sebastien/Sources/00_Sandbox/javascript/demoscene/sources/library/surface.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @file	surface.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-05
 *
 * @brief	Surface definition
 * @history
 *			2018-09-05 - 1.0.0 - SLE
 *			Initial Version
 */
Object.defineProperty(exports, "__esModule", { value: true });
//------ classes
class Surface {
    //---- methods
    // constructor
    constructor(canvas) {
        this.canvas_ = canvas;
        this.context_ = canvas.getContext("2d");
        this.width_ = canvas.width;
        this.height_ = canvas.height;
    }
    // return the context of the canvas
    context() {
        return this.context_;
    }
    // return the canvas itself
    canvas() {
        return this.canvas_;
    }
    // return the dimension of the canvas
    size() {
        return {
            width: this.width_,
            height: this.height_
        };
    }
    data(x) {
        if (typeof x === "undefined") {
            return this.context_.getImageData(0, 0, this.width_, this.height_);
        }
        else {
            this.context_.putImageData(x, 0, 0);
        }
    }
    // clear the surface
    clear() {
        this.context_.clearRect(0, 0, this.width_, this.height_);
    }
}
exports.Surface = Surface;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @file	main.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-11
 *
 * @brief	Main entry point for the sprite effect
 * @history
 *			2018-09-11 - 1.0.0 - SLE
 *			Initial Version
 */
Object.defineProperty(exports, "__esModule", { value: true });
//------ imports
const spriteanim_1 = __webpack_require__(/*! ./spriteanim */ "./src/spriteanim.ts");
//------ begin
let spriteanim = new spriteanim_1.SpriteAnim(document.getElementById("output"));
window.onload = () => {
    spriteanim.run();
};


/***/ }),

/***/ "./src/spriteanim.ts":
/*!***************************!*\
  !*** ./src/spriteanim.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @file	spriteanim.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-11
 *
 * @brief	Sprite Animation
 * @history
 *			2018-09-11 - 1.0.0 - SLE
 *			Initial Version
 */
Object.defineProperty(exports, "__esModule", { value: true });
//------ imports
const animation_1 = __webpack_require__(/*! library/animation */ "../../../library/animation.ts");
const sprite_1 = __webpack_require__(/*! library/sprite */ "../../../library/sprite.ts");
const backbuffer_1 = __webpack_require__(/*! library/backbuffer */ "../../../library/backbuffer.ts");
const color_1 = __webpack_require__(/*! library/color */ "../../../library/color.ts");
//------ globals
//------ interfaces
//------ classes
class SpriteAnim extends animation_1.Animation {
    //---- [end] protected methods
    //---- [begin] public methods
    constructor(output) {
        super();
        //---- members
        this.pcSprite = null;
        this.pcBackBuffer = new backbuffer_1.BackBuffer(output);
        // load the sprite
        this.loadImage();
    }
    //---- [begin] private methods
    loadImage() {
        let img = new Image();
        img.onload = () => {
            this.pcSprite = new sprite_1.Sprite(img, new color_1.Color(color_1.COLOR_MODEL.RGB, 44, 156, 0));
        };
        img.src = "/images/mad_scientist.png";
    }
    //---- [end] private methods
    //---- [begin] protected methods
    // update the animation
    update() {
        let ctx = this.pcBackBuffer.context();
        ctx.clearRect(0, 0, 640, 400);
        for (let i = 0; i < 50; i++) {
            let x1 = Math.random() * 640;
            let y1 = Math.random() * 400;
            let x2 = Math.random() * 640;
            let y2 = Math.random() * 400;
            let r = Math.random() * 255;
            let g = Math.random() * 255;
            let b = Math.random() * 255;
            let color = new color_1.Color(color_1.COLOR_MODEL.RGB, r, g, b);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = color.CSSHexa();
            ctx.stroke();
        }
        this.pcSprite.draw(319, 100, this.pcBackBuffer);
    }
    // render the animation
    render() {
        this.pcBackBuffer.flip();
        this.pcBackBuffer.clear();
    }
    // mainloop for the requestAnimationFrame
    mainLoop(timestamp) {
        this.update();
        this.render();
        requestAnimationFrame(this.mainLoop.bind(this));
    }
    // run the animation
    run() {
        this.mainLoop(0);
    }
}
exports.SpriteAnim = SpriteAnim;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zZWJhc3RpZW4vU291cmNlcy8wMF9TYW5kYm94L2phdmFzY3JpcHQvZGVtb3NjZW5lL3NvdXJjZXMvbGlicmFyeS9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zZWJhc3RpZW4vU291cmNlcy8wMF9TYW5kYm94L2phdmFzY3JpcHQvZGVtb3NjZW5lL3NvdXJjZXMvbGlicmFyeS9iYWNrYnVmZmVyLnRzIiwid2VicGFjazovLy8vVXNlcnMvc2ViYXN0aWVuL1NvdXJjZXMvMDBfU2FuZGJveC9qYXZhc2NyaXB0L2RlbW9zY2VuZS9zb3VyY2VzL2xpYnJhcnkvY29sb3IudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zZWJhc3RpZW4vU291cmNlcy8wMF9TYW5kYm94L2phdmFzY3JpcHQvZGVtb3NjZW5lL3NvdXJjZXMvbGlicmFyeS9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zZWJhc3RpZW4vU291cmNlcy8wMF9TYW5kYm94L2phdmFzY3JpcHQvZGVtb3NjZW5lL3NvdXJjZXMvbGlicmFyeS9zdXJmYWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVhbmltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdFQUFnRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUyxJQUFJLFNBQVMsSUFBSSxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxTQUFTO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTLElBQUksU0FBUyxJQUFJLFNBQVM7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVMsSUFBSSxTQUFTLElBQUksU0FBUyxJQUFJLFNBQVM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDemRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0M7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcHJpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQGZpbGVcdGFuaW1hdGlvbi50c1xuICogQGF1dGhvclx0U2ViYXN0aWVuIExFR1JBTkRcbiAqIEBlbWFpbFx0b2F4bGV5QGdtYWlsLmNvbVxuICogQGRhdGVcdDIwMTgtMDktMDZcbiAqXG4gKiBAYnJpZWZcdE1haW4gQW5pbWF0aW9uIGNsYXNzXG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTA2IC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLS0tLS0tIGltcG9ydHNcbi8vLS0tLS0tIGNsYXNzZXNcbmNsYXNzIEFuaW1hdGlvbiB7XG4gICAgLy8tLS0tIG1ldGhvZHNcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8tLS0tIG1lbWJlcnNcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkXyA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBzdGFydCB0aGUgYW5pbWF0aW9uXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNBbmltYXRlZF8gPSB0cnVlO1xuICAgIH1cbiAgICAvLyBzdG9wIHRoZSBhbmltYXRpb25cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmlzQW5pbWF0ZWRfID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHRvZ2dsZSBiZXR3ZWVuIHN0YXJ0IC8gc3RvcFxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkXyA9ICF0aGlzLmlzQW5pbWF0ZWRfO1xuICAgIH1cbiAgICAvLyByZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgZmxhZ1xuICAgIGlzQW5pbWF0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQW5pbWF0ZWRfO1xuICAgIH1cbn1cbmV4cG9ydHMuQW5pbWF0aW9uID0gQW5pbWF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQGZpbGVcdGJhY2tidWZmZXIudHNcbiAqIEBhdXRob3JcdFNlYmFzdGllbiBMRUdSQU5EXG4gKiBAZW1haWxcdG9heGxleUBnbWFpbC5jb21cbiAqIEBkYXRlXHQyMDE4LTA5LTA2XG4gKlxuICogQGJyaWVmXHRCYWNrIEJ1ZmZlciAvIFN1cmZhY2UgZGVmaW5pdGlvblxuICogQGhpc3RvcnlcbiAqXHRcdFx0MjAxOC0wOS0wNiAtIDEuMC4wIC0gU0xFXG4gKlx0XHRcdEluaXRpYWwgVmVyc2lvblxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLy0tLS0tLSBpbXBvcnRzXG5jb25zdCBzdXJmYWNlXzEgPSByZXF1aXJlKFwiLi9zdXJmYWNlXCIpO1xuLy8tLS0tLS0gY2xhc3Nlc1xuY2xhc3MgQmFja0J1ZmZlciBleHRlbmRzIHN1cmZhY2VfMS5TdXJmYWNlIHtcbiAgICAvLy0tLS0gbWV0aG9kc1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSkge1xuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgY2FudmFzIHRvIGhvbGQgdGhlIGJhY2tidWZmZXJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNvdXJjZS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIFN1cmZhY2UgcGFyZW50IGNsYXNzIHdpdGggdGhlIG5ldyBjYW52YXNcbiAgICAgICAgc3VwZXIoY2FudmFzKTtcbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgXCJzY3JlZW5cIlxuICAgICAgICB0aGlzLnBTY3JlZW4gPSBzb3VyY2U7XG4gICAgfVxuICAgIC8vIGZsaXAgdGhlIGJhY2sgYnVmZmVyIHRvIHRoZSBcInNjcmVlblwiXG4gICAgZmxpcCgpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMucFNjcmVlbi5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMoKSwgMCwgMCk7XG4gICAgfVxufVxuZXhwb3J0cy5CYWNrQnVmZmVyID0gQmFja0J1ZmZlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAqIEBmaWxlXHRjb2xvci50c1xuICogQGF1dGhvclx0U2ViYXN0aWVuIExFR1JBTkRcbiAqIEBlbWFpbFx0b2F4bGV5QGdtYWlsLmNvbVxuICogQGRhdGVcdDIwMTgtMDktMDZcbiAqXG4gKiBAYnJpZWZcdENvbG9yIGNsYXNzIGRlZmluaXRpb25cbiAqIEBoaXN0b3J5XG4gKlx0XHRcdDIwMTgtMDktMDYgLSAxLjAuMCAtIFNMRVxuICpcdFx0XHRJbml0aWFsIFZlcnNpb25cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8tLS0tLS0gaW1wb3J0c1xuLy8tLS0tLS0gZ2xvYmFsc1xuLy8gY29sb3IgbW9kZWxzXG52YXIgQ09MT1JfTU9ERUw7XG4oZnVuY3Rpb24gKENPTE9SX01PREVMKSB7XG4gICAgQ09MT1JfTU9ERUxbQ09MT1JfTU9ERUxbXCJSR0JcIl0gPSAwXSA9IFwiUkdCXCI7XG4gICAgQ09MT1JfTU9ERUxbQ09MT1JfTU9ERUxbXCJIU0xcIl0gPSAxXSA9IFwiSFNMXCI7XG4gICAgQ09MT1JfTU9ERUxbQ09MT1JfTU9ERUxbXCJIU1ZcIl0gPSAyXSA9IFwiSFNWXCI7XG4gICAgQ09MT1JfTU9ERUxbQ09MT1JfTU9ERUxbXCJVTktOT1dOXCJdID0gM10gPSBcIlVOS05PV05cIjtcbn0pKENPTE9SX01PREVMID0gZXhwb3J0cy5DT0xPUl9NT0RFTCB8fCAoZXhwb3J0cy5DT0xPUl9NT0RFTCA9IHt9KSk7XG4vLyBlcHNpbG9uIHZhbHVlIHRvIGNvbXBhcmUgZmxvYXRcbmNvbnN0IGVwc2lsb24gPSAwLjAwMDE7XG4vLy0tLS0tLSBjbGFzc2VzXG5jbGFzcyBDb2xvciB7XG4gICAgLy8tLS0tIG1ldGhvZHNcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCA9IENPTE9SX01PREVMLlVOS05PV04sIHggPSAwLCB5ID0gMCwgeiA9IDAsIGEgPSAxLjApIHtcbiAgICAgICAgLy8tLS0tIG1lbWJlcnNcbiAgICAgICAgdGhpcy5tb2RlbF8gPSBDT0xPUl9NT0RFTC5VTktOT1dOOyAvLyB0aGUgY29sb3IgbW9kZWxcbiAgICAgICAgdGhpcy54XyA9IDA7IC8vIHRoZSAxc3QgY29tcG9uZW50IChSIG9yIEgpXG4gICAgICAgIHRoaXMueV8gPSAwOyAvLyB0aGUgMm5kIGNvbXBvbmVudCAoRyBvciBTKVxuICAgICAgICB0aGlzLnpfID0gMDsgLy8gdGhlIDNyZCBjb21wb25lbnQgKEIgb3IgTCBvciBWKVxuICAgICAgICB0aGlzLmFfID0gMS4wOyAvLyB0aGUgYWxwaGEgdmFsdWVcbiAgICAgICAgYSA9IChhID4gMS4wKSA/IChhIC8gMjU1KSA6IGE7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVzKG1vZGVsLCB4LCB5LCB6LCBhKTtcbiAgICB9XG4gICAgLy8gc2V0IHRoZSBtZW1iZXJzXG4gICAgc2V0VmFsdWVzKG1vZGVsLCB4LCB5LCB6LCBhKSB7XG4gICAgICAgIGlmIChtb2RlbCA9PSBDT0xPUl9NT0RFTC5SR0IpIHtcbiAgICAgICAgICAgIFt0aGlzLm1vZGVsXywgdGhpcy54XywgdGhpcy55XywgdGhpcy56XywgdGhpcy5hX10gPSBbbW9kZWwsIE1hdGgucm91bmQoeCksIE1hdGgucm91bmQoeSksIE1hdGgucm91bmQoeiksIGFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgW3RoaXMubW9kZWxfLCB0aGlzLnhfLCB0aGlzLnlfLCB0aGlzLnpfLCB0aGlzLmFfXSA9IFttb2RlbCwgTWF0aC5yb3VuZCh4KSwgeSwgeiwgYV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdHJhbnNjb2RlIGEgY29sb3IgZnJvbSBvbmUgc3BhY2UgdG8gYW5vdGhlclxuICAgIHRyYW5zY29kZVRvKG1vZGVsKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5tb2RlbF8pIHtcbiAgICAgICAgICAgIGNhc2UgQ09MT1JfTU9ERUwuUkdCOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0xPUl9NT0RFTC5IU0w6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2NvZGVSR0J0b0hTTCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09MT1JfTU9ERUwuSFNWOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNjb2RlUkdCdG9IU1YoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ09MT1JfTU9ERUwuSFNMOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0xPUl9NT0RFTC5SR0I6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2NvZGVIU0x0b1JHQigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09MT1JfTU9ERUwuSFNWOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNjb2RlSFNMdG9IU1YoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ09MT1JfTU9ERUwuSFNWOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDT0xPUl9NT0RFTC5SR0I6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2NvZGVIU1Z0b1JHQigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09MT1JfTU9ERUwuSFNMOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNjb2RlSFNWdG9IU0woKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHRyYW5zY29kZSBmcm9tIFVua25vd24gY29sb3IgbW9kZWwhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byB0cmFuc2NvZGUgYSBtb2RlbCB0byBpdHNlbGYhXCIpO1xuICAgIH1cbiAgICAvLy0tLS0gW2JlZ2luXSB0cmFuc2NvZGUgbWFpbiBmdW5jdGlvbnNcbiAgICB0cmFuc2NvZGVSR0J0b0hTTCgpIHtcbiAgICAgICAgbGV0IHIsIGcsIGI7XG4gICAgICAgIGxldCBoLCBzLCBsO1xuICAgICAgICBsZXQgbWluLCBtYXgsIGRlbHRhO1xuICAgICAgICBbciwgZywgYl0gPSBbKHRoaXMueF8gLyAyNTUuMCksICh0aGlzLnlfIC8gMjU1LjApLCAodGhpcy56XyAvIDI1NS4wKV07XG4gICAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgICAgZGVsdGEgPSBtYXggLSBtaW47XG4gICAgICAgIC8vIGx1bWluYW5jZVxuICAgICAgICBsID0gKG1pbiArIG1heCkgLyAyLjA7XG4gICAgICAgIC8vIHNhdHVyYXRpb25cbiAgICAgICAgaWYgKGRlbHRhIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobCA8IDAuNSkge1xuICAgICAgICAgICAgICAgIHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcyA9IGRlbHRhIC8gKDIuMCAtIG1heCAtIG1pbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaHVlXG4gICAgICAgIGlmICgoZGVsdGEgLSBlcHNpbG9uKSA8IDApIHtcbiAgICAgICAgICAgIGggPSAwOyAvLyBubyBodWUgaWYgbm8gc2F0dXJhdGlvblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKChtYXggLSByKSA8IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICBoID0gKGcgLSBiKSAvIGRlbHRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKChtYXggLSBnKSA8IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9IDIuMCArIChiIC0gcikgLyBkZWx0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGggPSA0LjAgKyAociAtIGcpIC8gZGVsdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaCA9IGggKiA2MDtcbiAgICAgICAgICAgIHdoaWxlIChoIDwgMCkge1xuICAgICAgICAgICAgICAgIGggPSBoICsgMzYwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVuY29kZSB0aGUgb2JqZWN0IC0ga2VlcCAzIGRlY2ltYWxzIGZvciBwcmVjaXNpb25cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdoJzogTWF0aC5yb3VuZChoKSxcbiAgICAgICAgICAgICdzJzogTWF0aC50cnVuYygxMDAwICogcykgLyAxMDAwLFxuICAgICAgICAgICAgJ2wnOiBNYXRoLnRydW5jKDEwMDAgKiBsKSAvIDEwMDAsXG4gICAgICAgICAgICAnYSc6IHRoaXMuYV9cbiAgICAgICAgfTtcbiAgICB9XG4gICAgdHJhbnNjb2RlUkdCdG9IU1YoKSB7XG4gICAgICAgIGxldCByLCBnLCBiO1xuICAgICAgICBsZXQgaCwgcywgdjtcbiAgICAgICAgbGV0IG1pbiwgbWF4LCBkZWx0YTtcbiAgICAgICAgW3IsIGcsIGJdID0gWyh0aGlzLnhfIC8gMjU1LjApLCAodGhpcy55XyAvIDI1NS4wKSwgKHRoaXMuel8gLyAyNTUuMCldO1xuICAgICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgIGRlbHRhID0gbWF4IC0gbWluO1xuICAgICAgICAvLyBodWVcbiAgICAgICAgaWYgKChkZWx0YSAtIGVwc2lsb24pIDwgMCkge1xuICAgICAgICAgICAgaCA9IDA7IC8vIG5vIGh1ZSBpZiBubyBzYXR1cmF0aW9uXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoKG1heCAtIHIpIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZGVsdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKG1heCAtIGcpIDwgZXBzaWxvbikge1xuICAgICAgICAgICAgICAgICAgICBoID0gMi4wICsgKGIgLSByKSAvIGRlbHRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9IDQuMCArIChyIC0gZykgLyBkZWx0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoID0gaCAqIDYwO1xuICAgICAgICAgICAgd2hpbGUgKGggPCAwKSB7XG4gICAgICAgICAgICAgICAgaCA9IGggKyAzNjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2F0dXJhdGlvblxuICAgICAgICBpZiAoKG1heCAtIGVwc2lsb24pIDwgMCkge1xuICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzID0gZGVsdGEgLyBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdmFsdWVcbiAgICAgICAgdiA9IG1heDtcbiAgICAgICAgLy8gZW5jb2RlIHRoZSBvYmplY3QgLSBrZWVwIDMgZGVjaW1hbHMgZm9yIHByZWNpc2lvblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2gnOiBNYXRoLnJvdW5kKGgpLFxuICAgICAgICAgICAgJ3MnOiBNYXRoLnRydW5jKDEwMDAgKiBzKSAvIDEwMDAsXG4gICAgICAgICAgICAndic6IE1hdGgudHJ1bmMoMTAwMCAqIHYpIC8gMTAwMCxcbiAgICAgICAgICAgICdhJzogdGhpcy5hX1xuICAgICAgICB9O1xuICAgIH1cbiAgICB0cmFuc2NvZGVIU0x0b1JHQigpIHtcbiAgICAgICAgbGV0IHIsIGcsIGI7XG4gICAgICAgIGxldCBoLCBzLCBsO1xuICAgICAgICBsZXQgdDEsIHQyO1xuICAgICAgICBsZXQgdHIsIHRnLCB0YjtcbiAgICAgICAgLy8gZnVuY3Rpb24gdG8gY29tcHV0ZSB0aGUgdmFsdWVzXG4gICAgICAgIGZ1bmN0aW9uIF9jb21wdXRlVmFsdWVzKHgpIHtcbiAgICAgICAgICAgIGxldCB5O1xuICAgICAgICAgICAgaWYgKCg2ICogeCkgPCAxLjApIHtcbiAgICAgICAgICAgICAgICB5ID0gdDIgKyAoKHQxIC0gdDIpICogNiAqIHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCgyICogeCkgPCAxLjApIHtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHQxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgzICogeCkgPCAyLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB0MiArICgodDEgLSB0MikgKiAoMC42NjYgLSB4KSAqIDYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHQyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICAvLyBzZXR1cCB2YWx1ZXNcbiAgICAgICAgW2gsIHMsIGxdID0gW3RoaXMueF8sIHRoaXMueV8sIHRoaXMuel9dO1xuICAgICAgICBpZiAocyA9PSAwKSB7XG4gICAgICAgICAgICByID0gTWF0aC5yb3VuZCgyNTUgKiBsKTtcbiAgICAgICAgICAgIGcgPSBNYXRoLnJvdW5kKDI1NSAqIGwpO1xuICAgICAgICAgICAgYiA9IE1hdGgucm91bmQoMjU1ICogbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjb21wdXRlIHRlbXBvcmFyeSB2YWx1ZXNcbiAgICAgICAgICAgIGlmIChsIDwgMC41KSB7XG4gICAgICAgICAgICAgICAgdDEgPSBsICogKDEuMCArIHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdDEgPSAobCArIHMpIC0gKGwgKiBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQyID0gKDIgKiBsKSAtIHQxO1xuICAgICAgICAgICAgaCA9IGggLyAzNjAuMDtcbiAgICAgICAgICAgIHRyID0gKChoICsgMC4zMzMpID4gMS4wKSA/IChoICsgMC4zMzMgLSAxLjApIDogKGggKyAwLjMzMyk7XG4gICAgICAgICAgICB0ZyA9IGg7XG4gICAgICAgICAgICB0YiA9ICgoaCAtIDAuMzMzKSA8IDAuMCkgPyAoaCAtIDAuMzMzICsgMS4wKSA6IChoIC0gMC4zMzMpO1xuICAgICAgICAgICAgLy8gUkdCIHZhbHVlc1xuICAgICAgICAgICAgciA9IE1hdGgucm91bmQoMjU1ICogX2NvbXB1dGVWYWx1ZXModHIpKTtcbiAgICAgICAgICAgIGcgPSBNYXRoLnJvdW5kKDI1NSAqIF9jb21wdXRlVmFsdWVzKHRnKSk7XG4gICAgICAgICAgICBiID0gTWF0aC5yb3VuZCgyNTUgKiBfY29tcHV0ZVZhbHVlcyh0YikpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiB0aGUgb2JqZWN0XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAncic6IHIsXG4gICAgICAgICAgICAnZyc6IGcsXG4gICAgICAgICAgICAnYic6IGIsXG4gICAgICAgICAgICAnYSc6IE1hdGgucm91bmQodGhpcy5hXyAqIDI1NSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdHJhbnNjb2RlSFNMdG9IU1YoKSB7XG4gICAgICAgIGxldCBoLCBzLCBsO1xuICAgICAgICBsZXQgdiwgeDtcbiAgICAgICAgW2gsIHMsIGxdID0gW3RoaXMueF8sIHRoaXMueV8sIHRoaXMuel9dO1xuICAgICAgICBpZiAobCA8IDAuNSkge1xuICAgICAgICAgICAgeCA9IHMgKiBsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeCA9IHMgKiAoMSAtIGwpO1xuICAgICAgICB9XG4gICAgICAgIHYgPSBsICsgeDtcbiAgICAgICAgcyA9ICgyICogeCkgLyB2O1xuICAgICAgICAvLyBlbmNvZGUgdGhlIG9iamVjdCAtIGtlZXAgMyBkZWNpbWFscyBmb3IgcHJlY2lzaW9uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnaCc6IE1hdGgucm91bmQoaCksXG4gICAgICAgICAgICAncyc6IE1hdGgudHJ1bmMoMTAwMCAqIHMpIC8gMTAwMCxcbiAgICAgICAgICAgICd2JzogTWF0aC50cnVuYygxMDAwICogdikgLyAxMDAwLFxuICAgICAgICAgICAgJ2EnOiB0aGlzLmFfXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRyYW5zY29kZUhTVnRvUkdCKCkge1xuICAgICAgICBsZXQgciwgZywgYjtcbiAgICAgICAgbGV0IGgsIHMsIHY7XG4gICAgICAgIGxldCBjLCB4LCBtO1xuICAgICAgICBbaCwgcywgdl0gPSBbdGhpcy54XywgdGhpcy55XywgdGhpcy56X107XG4gICAgICAgIGMgPSB2ICogcztcbiAgICAgICAgbSA9IHYgLSBjO1xuICAgICAgICB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKChoIC8gNjApICUgMikgLSAxKSk7XG4gICAgICAgIGlmICgoaCA+PSAwKSAmJiAoaCA8IDYwKSkge1xuICAgICAgICAgICAgW3IsIGcsIGJdID0gW2MsIHgsIDBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChoID49IDYwKSAmJiAoaCA8IDEyMCkpIHtcbiAgICAgICAgICAgIFtyLCBnLCBiXSA9IFt4LCBjLCAwXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoaCA+PSAxMjApICYmIChoIDwgMTgwKSkge1xuICAgICAgICAgICAgW3IsIGcsIGJdID0gWzAsIGMsIHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChoID49IDE4MCkgJiYgKGggPCAyNDApKSB7XG4gICAgICAgICAgICBbciwgZywgYl0gPSBbMCwgeCwgY107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGggPj0gMjQwKSAmJiAoaCA8IDMwMCkpIHtcbiAgICAgICAgICAgIFtyLCBnLCBiXSA9IFt4LCAwLCBjXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoaCA+PSAzMDApICYmIChoIDwgMzYwKSkge1xuICAgICAgICAgICAgW3IsIGcsIGJdID0gW2MsIDAsIHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgW3IsIGcsIGJdID0gWzAsIDAsIDBdO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBNYXRoLnJvdW5kKChyICsgbSkgKiAyNTUpO1xuICAgICAgICBnID0gTWF0aC5yb3VuZCgoZyArIG0pICogMjU1KTtcbiAgICAgICAgYiA9IE1hdGgucm91bmQoKGIgKyBtKSAqIDI1NSk7XG4gICAgICAgIC8vIHJldHVybiB0aGUgb2JqZWN0XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAncic6IHIsXG4gICAgICAgICAgICAnZyc6IGcsXG4gICAgICAgICAgICAnYic6IGIsXG4gICAgICAgICAgICAnYSc6IE1hdGgucm91bmQodGhpcy5hXyAqIDI1NSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdHJhbnNjb2RlSFNWdG9IU0woKSB7XG4gICAgICAgIGxldCBoLCBzLCBsO1xuICAgICAgICBsZXQgdiwgeDtcbiAgICAgICAgW2gsIHMsIHZdID0gW3RoaXMueF8sIHRoaXMueV8sIHRoaXMuel9dO1xuICAgICAgICB4ID0gKDIgLSBzKSAqIHY7XG4gICAgICAgIC8vIHNhdHVyYXRpb25cbiAgICAgICAgaWYgKHggPCAxKSB7XG4gICAgICAgICAgICBzID0gKHMgKiB2KSAvIHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzID0gKHMgKiB2KSAvICgyIC0geCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbHVtaW5hbmNlXG4gICAgICAgIGwgPSB4IC8gMjtcbiAgICAgICAgLy8gZW5jb2RlIHRoZSBvYmplY3QgLSBrZWVwIDMgZGVjaW1hbHMgZm9yIHByZWNpc2lvblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2gnOiBNYXRoLnJvdW5kKGgpLFxuICAgICAgICAgICAgJ3MnOiBNYXRoLnRydW5jKDEwMDAgKiBzKSAvIDEwMDAsXG4gICAgICAgICAgICAnbCc6IE1hdGgudHJ1bmMoMTAwMCAqIHYpIC8gMTAwMCxcbiAgICAgICAgICAgICdhJzogdGhpcy5hX1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLy0tLS0gW2VuZF0gdHJhbnNjb2RlIG1haW4gZnVuY3Rpb25zXG4gICAgLy8tLS0tIFtiZWdpbl0gcHVibGljIG1ldGhvZHNcbiAgICBtb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxfO1xuICAgIH1cbiAgICBzZXRSR0JBKHgsIHksIHosIGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBsZXQgYSA9ICh4LmEgPiAxLjApID8gKHguYSAvIDI1NSkgOiB4LmE7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcyhDT0xPUl9NT0RFTC5SR0IsIHguciwgeC5nLCB4LmIsIGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdGFrZSBjYXJlIG9mIHVuZGVmaW5lZCBwYXJhbWV0ZXJzXG4gICAgICAgICAgICB5ID0gKHkgPT09IHVuZGVmaW5lZCkgPyAwIDogeTtcbiAgICAgICAgICAgIHogPSAoeiA9PT0gdW5kZWZpbmVkKSA/IDAgOiB6O1xuICAgICAgICAgICAgYSA9IChhID09PSB1bmRlZmluZWQpID8gMS4wIDogYTtcbiAgICAgICAgICAgIC8vIGNsYW1wIHRoZSBhbHBoYSBjaGFubmVsIHRvIFswLjAsIDEuMF1cbiAgICAgICAgICAgIGEgPSAoYSA+IDEuMCkgPyAoYSAvIDI1NSkgOiBhO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoQ09MT1JfTU9ERUwuUkdCLCB4LCB5LCB6LCBhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRIU0xBKHgsIHksIHosIGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcyhDT0xPUl9NT0RFTC5IU0wsIHguaCwgeC5zLCB4LmwsIHguYSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0YWtlIGNhcmUgb2YgdW5kZWZpbmVkIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIHkgPSAoeSA9PT0gdW5kZWZpbmVkKSA/IDAgOiB5O1xuICAgICAgICAgICAgeiA9ICh6ID09PSB1bmRlZmluZWQpID8gMCA6IHo7XG4gICAgICAgICAgICBhID0gKGEgPT09IHVuZGVmaW5lZCkgPyAxLjAgOiBhO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoQ09MT1JfTU9ERUwuSFNMLCB4LCB5LCB6LCBhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRIU1ZBKHgsIHksIHosIGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcyhDT0xPUl9NT0RFTC5IU1YsIHguaCwgeC5zLCB4LnYsIHguYSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0YWtlIGNhcmUgb2YgdW5kZWZpbmVkIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIHkgPSAoeSA9PT0gdW5kZWZpbmVkKSA/IDAgOiB5O1xuICAgICAgICAgICAgeiA9ICh6ID09PSB1bmRlZmluZWQpID8gMCA6IHo7XG4gICAgICAgICAgICBhID0gKGEgPT09IHVuZGVmaW5lZCkgPyAxLjAgOiBhO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoQ09MT1JfTU9ERUwuSFNWLCB4LCB5LCB6LCBhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSR0JBKCkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbF8gPT0gQ09MT1JfTU9ERUwuUkdCKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IHRoaXMueF8sXG4gICAgICAgICAgICAgICAgZzogdGhpcy55XyxcbiAgICAgICAgICAgICAgICBiOiB0aGlzLnpfLFxuICAgICAgICAgICAgICAgIGE6IE1hdGgucm91bmQodGhpcy5hXyAqIDI1NSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2NvZGVUbyhDT0xPUl9NT0RFTC5SR0IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEhTTEEoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsXyA9PSBDT0xPUl9NT0RFTC5IU0wpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaDogdGhpcy54XyxcbiAgICAgICAgICAgICAgICBzOiB0aGlzLnlfLFxuICAgICAgICAgICAgICAgIGw6IHRoaXMuel8sXG4gICAgICAgICAgICAgICAgYTogdGhpcy5hX1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zY29kZVRvKENPTE9SX01PREVMLkhTTCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0SFNWQSgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWxfID09IENPTE9SX01PREVMLkhTVikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoOiB0aGlzLnhfLFxuICAgICAgICAgICAgICAgIHM6IHRoaXMueV8sXG4gICAgICAgICAgICAgICAgdjogdGhpcy56XyxcbiAgICAgICAgICAgICAgICBhOiB0aGlzLmFfXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNjb2RlVG8oQ09MT1JfTU9ERUwuSFNWKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLy0tLS0gW2VuZF0gcHVibGljIG1ldGhvZHNcbiAgICAvLy0tLS0gW2JlZ2luXSBDU1MgcHVibGljIG1ldGhvZHNcbiAgICBDU1NSR0JWYWx1ZXMoKSB7XG4gICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldFJHQkEoKTtcbiAgICAgICAgcmV0dXJuIGByZ2IoJHt2YWx1ZXMucn0sICR7dmFsdWVzLmd9LCAke3ZhbHVlcy5ifSlgO1xuICAgIH1cbiAgICBDU1NSR0JBVmFsdWVzKCkge1xuICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRSR0JBKCk7XG4gICAgICAgIHJldHVybiBgcmdiYSgke3ZhbHVlcy5yfSwgJHt2YWx1ZXMuZ30sICR7dmFsdWVzLmJ9LCAke3ZhbHVlcy5hfSlgO1xuICAgIH1cbiAgICBDU1NIU0xWYWx1ZXMoKSB7XG4gICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldEhTTEEoKTtcbiAgICAgICAgcmV0dXJuIGBoc2woJHt2YWx1ZXMuaH0sICR7dmFsdWVzLnN9LCAke3ZhbHVlcy5sfSlgO1xuICAgIH1cbiAgICBDU1NIU0xBVmFsdWVzKCkge1xuICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRIU0xBKCk7XG4gICAgICAgIHJldHVybiBgaHNsKCR7dmFsdWVzLmh9LCAke3ZhbHVlcy5zfSwgJHt2YWx1ZXMubH0sICR7dmFsdWVzLmF9KWA7XG4gICAgfVxuICAgIENTU0hleGEoKSB7XG4gICAgICAgIGZ1bmN0aW9uIF9oZXhDb252ZXJzaW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgc3RyID0gdmFsdWUudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgc3RyID0gKHN0ci5sZW5ndGggPCAyKSA/ICcwJyArIHN0ciA6IHN0cjtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0UkdCQSgpO1xuICAgICAgICBsZXQgciA9IF9oZXhDb252ZXJzaW9uKHZhbHVlcy5yKTtcbiAgICAgICAgbGV0IGcgPSBfaGV4Q29udmVyc2lvbih2YWx1ZXMuZyk7XG4gICAgICAgIGxldCBiID0gX2hleENvbnZlcnNpb24odmFsdWVzLmIpO1xuICAgICAgICByZXR1cm4gYCMke3J9JHtnfSR7Yn1gO1xuICAgIH1cbiAgICBzdGF0aWMgKmdyYWRpZW50KGJlZ2luLCBlbmQsIGNvdW50KSB7XG4gICAgICAgIGxldCB4aSwgeWksIHppLCBhaTtcbiAgICAgICAgbGV0IHhmLCB5ZiwgemYsIGFmO1xuICAgICAgICBsZXQgZHgsIGR5LCBkeiwgZGE7XG4gICAgICAgIGxldCBjMSwgYzI7XG4gICAgICAgIC8vIGNoZWNrIHRoZSBjb2xvciBtb2RlbFxuICAgICAgICBpZiAoYmVnaW4ubW9kZWwoKSAhPSBlbmQubW9kZWwoKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJjYW5ub3QgY3JlYXRlIGEgZ3JhZGllbnQgZnJvbSBkaWZmZXJlbnQgbW9kZWxzIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGJlZ2luLm1vZGVsKCkpIHtcbiAgICAgICAgICAgIGNhc2UgQ09MT1JfTU9ERUwuUkdCOlxuICAgICAgICAgICAgICAgIGMxID0gYmVnaW4uZ2V0UkdCQSgpO1xuICAgICAgICAgICAgICAgIHhpID0gYzEuciwgeWkgPSBjMS5nLCB6aSA9IGMxLmIsIGFpID0gYzEuYTtcbiAgICAgICAgICAgICAgICBjMiA9IGVuZC5nZXRSR0JBKCk7XG4gICAgICAgICAgICAgICAgeGYgPSBjMi5yLCB5ZiA9IGMyLmcsIHpmID0gYzIuYiwgYWYgPSBjMi5hO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlVua25vd24gY29sb3IgbW9kZWwhXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbXB1dGUgdGhlIGRlbHRhIGZvciBlYWNoIGNvbXBvbmVudHNcbiAgICAgICAgZHggPSAoeGYgLSB4aSkgLyBjb3VudDtcbiAgICAgICAgZHkgPSAoeWYgLSB5aSkgLyBjb3VudDtcbiAgICAgICAgZHogPSAoemYgLSB6aSkgLyBjb3VudDtcbiAgICAgICAgZGEgPSAoYWYgLSBhaSkgLyBjb3VudDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIG5ldyBjb2xvclxuICAgICAgICAgICAgeWllbGQgbmV3IENvbG9yKGJlZ2luLm1vZGVsKCksIHhpLCB5aSwgemksIGFpKTtcbiAgICAgICAgICAgIC8vIGluY3JlbWVudCB0aGUgdmFsdWVzXG4gICAgICAgICAgICB4aSA9IHhpICsgZHg7XG4gICAgICAgICAgICB5aSA9IHlpICsgZHk7XG4gICAgICAgICAgICB6aSA9IHppICsgZHo7XG4gICAgICAgICAgICBhaSA9IGFpICsgZGE7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gKiBAZmlsZVx0c3ByaXRlLnRzXG4gKiBAYXV0aG9yXHRTZWJhc3RpZW4gTEVHUkFORFxuICogQGVtYWlsXHRvYXhsZXlAZ21haWwuY29tXG4gKiBAZGF0ZVx0MjAxOC0wOS0wNlxuICpcbiAqIEBicmllZlx0U3ByaXRlIC8gU3VyZmFjZSBkZWZpbml0aW9uXG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTA2IC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLS0tLS0tIGltcG9ydHNcbmNvbnN0IHN1cmZhY2VfMSA9IHJlcXVpcmUoXCIuL3N1cmZhY2VcIik7XG4vLy0tLS0tLSBpbnRlcmZhY2VzXG4vLy0tLS0tLSBjbGFzc2VzXG5jbGFzcyBTcHJpdGUgZXh0ZW5kcyBzdXJmYWNlXzEuU3VyZmFjZSB7XG4gICAgLy8tLS0tIG1lbWJlcnNcbiAgICAvLy0tLS0gbWV0aG9kc1xuICAgIGNvbnN0cnVjdG9yKGltZywgdHJhbnNwYXJlbmN5KSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGNhbnZhcyB0byBob2xkIHRoZSBpbWFnZVxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgLy8gY29weSB0aGUgaW1hZ2Ugb24gdGhlIGNhbnZhc1xuICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICBpZiAodHJhbnNwYXJlbmN5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IHRyYW5zcGFyZW5jeS5nZXRSR0JBKCk7XG4gICAgICAgICAgICBsZXQgaW1nRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaW1nLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IHkgKiBpbWcud2lkdGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpbWcud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAob2Zmc2V0ICsgeCkgPDwgMjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSBpbWdEYXRhLmRhdGFbcG9zaXRpb24rK107XG4gICAgICAgICAgICAgICAgICAgIGxldCBnID0gaW1nRGF0YS5kYXRhW3Bvc2l0aW9uKytdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYiA9IGltZ0RhdGEuZGF0YVtwb3NpdGlvbisrXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyID09IGNvbG9yLnIpICYmIChnID09IGNvbG9yLmcpICYmIChiID09IGNvbG9yLmIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdEYXRhLmRhdGFbcG9zaXRpb24rK10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpbWdEYXRhLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBwYXJlbnQgY2xhc3NcbiAgICAgICAgc3VwZXIoY2FudmFzKTtcbiAgICB9XG4gICAgLy8gZHJhdyB0aGUgc3ByaXRlIG9uIGFub3RoZXIgc3VyZmFjZVxuICAgIGRyYXcoeCwgeSwgdGFyZ2V0KSB7XG4gICAgICAgIGxldCBjdHggPSB0YXJnZXQuY29udGV4dCgpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzKCksIHgsIHkpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3ByaXRlID0gU3ByaXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQGZpbGVcdHN1cmZhY2UudHNcbiAqIEBhdXRob3JcdFNlYmFzdGllbiBMRUdSQU5EXG4gKiBAZW1haWxcdG9heGxleUBnbWFpbC5jb21cbiAqIEBkYXRlXHQyMDE4LTA5LTA1XG4gKlxuICogQGJyaWVmXHRTdXJmYWNlIGRlZmluaXRpb25cbiAqIEBoaXN0b3J5XG4gKlx0XHRcdDIwMTgtMDktMDUgLSAxLjAuMCAtIFNMRVxuICpcdFx0XHRJbml0aWFsIFZlcnNpb25cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8tLS0tLS0gY2xhc3Nlc1xuY2xhc3MgU3VyZmFjZSB7XG4gICAgLy8tLS0tIG1ldGhvZHNcbiAgICAvLyBjb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhc18gPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY29udGV4dF8gPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLndpZHRoXyA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHRfID0gY2FudmFzLmhlaWdodDtcbiAgICB9XG4gICAgLy8gcmV0dXJuIHRoZSBjb250ZXh0IG9mIHRoZSBjYW52YXNcbiAgICBjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0XztcbiAgICB9XG4gICAgLy8gcmV0dXJuIHRoZSBjYW52YXMgaXRzZWxmXG4gICAgY2FudmFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNfO1xuICAgIH1cbiAgICAvLyByZXR1cm4gdGhlIGRpbWVuc2lvbiBvZiB0aGUgY2FudmFzXG4gICAgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoXyxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRfXG4gICAgICAgIH07XG4gICAgfVxuICAgIGRhdGEoeCkge1xuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoXywgdGhpcy5oZWlnaHRfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8ucHV0SW1hZ2VEYXRhKHgsIDAsIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNsZWFyIHRoZSBzdXJmYWNlXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dF8uY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGhfLCB0aGlzLmhlaWdodF8pO1xuICAgIH1cbn1cbmV4cG9ydHMuU3VyZmFjZSA9IFN1cmZhY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gKiBAZmlsZVx0bWFpbi50c1xuICogQGF1dGhvclx0U2ViYXN0aWVuIExFR1JBTkRcbiAqIEBlbWFpbFx0b2F4bGV5QGdtYWlsLmNvbVxuICogQGRhdGVcdDIwMTgtMDktMTFcbiAqXG4gKiBAYnJpZWZcdE1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSBzcHJpdGUgZWZmZWN0XG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTExIC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLS0tLS0tIGltcG9ydHNcbmNvbnN0IHNwcml0ZWFuaW1fMSA9IHJlcXVpcmUoXCIuL3Nwcml0ZWFuaW1cIik7XG4vLy0tLS0tLSBiZWdpblxubGV0IHNwcml0ZWFuaW0gPSBuZXcgc3ByaXRlYW5pbV8xLlNwcml0ZUFuaW0oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIikpO1xud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBzcHJpdGVhbmltLnJ1bigpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAqIEBmaWxlXHRzcHJpdGVhbmltLnRzXG4gKiBAYXV0aG9yXHRTZWJhc3RpZW4gTEVHUkFORFxuICogQGVtYWlsXHRvYXhsZXlAZ21haWwuY29tXG4gKiBAZGF0ZVx0MjAxOC0wOS0xMVxuICpcbiAqIEBicmllZlx0U3ByaXRlIEFuaW1hdGlvblxuICogQGhpc3RvcnlcbiAqXHRcdFx0MjAxOC0wOS0xMSAtIDEuMC4wIC0gU0xFXG4gKlx0XHRcdEluaXRpYWwgVmVyc2lvblxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLy0tLS0tLSBpbXBvcnRzXG5jb25zdCBhbmltYXRpb25fMSA9IHJlcXVpcmUoXCJsaWJyYXJ5L2FuaW1hdGlvblwiKTtcbmNvbnN0IHNwcml0ZV8xID0gcmVxdWlyZShcImxpYnJhcnkvc3ByaXRlXCIpO1xuY29uc3QgYmFja2J1ZmZlcl8xID0gcmVxdWlyZShcImxpYnJhcnkvYmFja2J1ZmZlclwiKTtcbmNvbnN0IGNvbG9yXzEgPSByZXF1aXJlKFwibGlicmFyeS9jb2xvclwiKTtcbi8vLS0tLS0tIGdsb2JhbHNcbi8vLS0tLS0tIGludGVyZmFjZXNcbi8vLS0tLS0tIGNsYXNzZXNcbmNsYXNzIFNwcml0ZUFuaW0gZXh0ZW5kcyBhbmltYXRpb25fMS5BbmltYXRpb24ge1xuICAgIC8vLS0tLSBbZW5kXSBwcm90ZWN0ZWQgbWV0aG9kc1xuICAgIC8vLS0tLSBbYmVnaW5dIHB1YmxpYyBtZXRob2RzXG4gICAgY29uc3RydWN0b3Iob3V0cHV0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vLS0tLSBtZW1iZXJzXG4gICAgICAgIHRoaXMucGNTcHJpdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnBjQmFja0J1ZmZlciA9IG5ldyBiYWNrYnVmZmVyXzEuQmFja0J1ZmZlcihvdXRwdXQpO1xuICAgICAgICAvLyBsb2FkIHRoZSBzcHJpdGVcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2UoKTtcbiAgICB9XG4gICAgLy8tLS0tIFtiZWdpbl0gcHJpdmF0ZSBtZXRob2RzXG4gICAgbG9hZEltYWdlKCkge1xuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBjU3ByaXRlID0gbmV3IHNwcml0ZV8xLlNwcml0ZShpbWcsIG5ldyBjb2xvcl8xLkNvbG9yKGNvbG9yXzEuQ09MT1JfTU9ERUwuUkdCLCA0NCwgMTU2LCAwKSk7XG4gICAgICAgIH07XG4gICAgICAgIGltZy5zcmMgPSBcIi9pbWFnZXMvbWFkX3NjaWVudGlzdC5wbmdcIjtcbiAgICB9XG4gICAgLy8tLS0tIFtlbmRdIHByaXZhdGUgbWV0aG9kc1xuICAgIC8vLS0tLSBbYmVnaW5dIHByb3RlY3RlZCBtZXRob2RzXG4gICAgLy8gdXBkYXRlIHRoZSBhbmltYXRpb25cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLnBjQmFja0J1ZmZlci5jb250ZXh0KCk7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNjQwLCA0MDApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB4MSA9IE1hdGgucmFuZG9tKCkgKiA2NDA7XG4gICAgICAgICAgICBsZXQgeTEgPSBNYXRoLnJhbmRvbSgpICogNDAwO1xuICAgICAgICAgICAgbGV0IHgyID0gTWF0aC5yYW5kb20oKSAqIDY0MDtcbiAgICAgICAgICAgIGxldCB5MiA9IE1hdGgucmFuZG9tKCkgKiA0MDA7XG4gICAgICAgICAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkgKiAyNTU7XG4gICAgICAgICAgICBsZXQgZyA9IE1hdGgucmFuZG9tKCkgKiAyNTU7XG4gICAgICAgICAgICBsZXQgYiA9IE1hdGgucmFuZG9tKCkgKiAyNTU7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSBuZXcgY29sb3JfMS5Db2xvcihjb2xvcl8xLkNPTE9SX01PREVMLlJHQiwgciwgZywgYik7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvci5DU1NIZXhhKCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wY1Nwcml0ZS5kcmF3KDMxOSwgMTAwLCB0aGlzLnBjQmFja0J1ZmZlcik7XG4gICAgfVxuICAgIC8vIHJlbmRlciB0aGUgYW5pbWF0aW9uXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnBjQmFja0J1ZmZlci5mbGlwKCk7XG4gICAgICAgIHRoaXMucGNCYWNrQnVmZmVyLmNsZWFyKCk7XG4gICAgfVxuICAgIC8vIG1haW5sb29wIGZvciB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgbWFpbkxvb3AodGltZXN0YW1wKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICAvLyBydW4gdGhlIGFuaW1hdGlvblxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5tYWluTG9vcCgwKTtcbiAgICB9XG59XG5leHBvcnRzLlNwcml0ZUFuaW0gPSBTcHJpdGVBbmltO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==