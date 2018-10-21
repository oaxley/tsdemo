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
/*!*************************************************************************************!*\
  !*** /home/sebastien/Documents/Projects/10_WIP/tsdemo/sources/library/animation.ts ***!
  \*************************************************************************************/
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
        this.nFrames_ = 0;
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
/*!**************************************************************************************!*\
  !*** /home/sebastien/Documents/Projects/10_WIP/tsdemo/sources/library/backbuffer.ts ***!
  \**************************************************************************************/
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
/*!*********************************************************************************!*\
  !*** /home/sebastien/Documents/Projects/10_WIP/tsdemo/sources/library/color.ts ***!
  \*********************************************************************************/
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
/*!**********************************************************************************!*\
  !*** /home/sebastien/Documents/Projects/10_WIP/tsdemo/sources/library/sprite.ts ***!
  \**********************************************************************************/
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
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(this.canvas(), x, y);
    }
}
exports.Sprite = Sprite;


/***/ }),

/***/ "../../../library/surface.ts":
/*!***********************************************************************************!*\
  !*** /home/sebastien/Documents/Projects/10_WIP/tsdemo/sources/library/surface.ts ***!
  \***********************************************************************************/
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
// set the keyboard handlers
window.addEventListener("keypress", (event) => {
    switch (event.charCode) {
        case 117: // 'u'
            spriteanim.addParticule();
            break;
        case 110: // 'n'
            spriteanim.delParticule();
            break;
        case 43: // '+'
            spriteanim.incMood();
            break;
        case 45: // '-'
            spriteanim.decMood();
            break;
    }
});
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
const MAX_PARTICULES = 200;
//------ classes
class SpriteAnim extends animation_1.Animation {
    //---- [end] protected methods
    //---- [begin] public methods
    constructor(output) {
        super();
        //---- members
        this.pcSprite = null;
        this.paParticules = [];
        this.nMaxWidth = 0;
        this.nMaxHeight = 0;
        this.nMood = 0;
        this.pcBackBuffer = new backbuffer_1.BackBuffer(output);
        this.nMaxWidth = output.width;
        this.nMaxHeight = output.height;
        // load the sprite
        this.loadImage();
    }
    //---- [begin] private methods
    // load the image
    loadImage() {
        let img = new Image();
        img.onload = () => {
            this.pcSprite = new sprite_1.Sprite(img, new color_1.Color(color_1.COLOR_MODEL.RGB, 44, 156, 0));
        };
        img.src = "/images/mad_scientist.png";
    }
    // select the color
    getColor() {
        let result = '';
        if (this.nMood == 0) {
            result = 'rgba(128,128,128,1)';
        }
        else {
            if (this.nMood < 0) {
                let alpha = -this.nMood;
                let r = Math.round((255 * alpha) + (1 - alpha) * 128);
                let g = Math.round((0 * alpha) + (1 - alpha) * 128);
                let b = Math.round((0 * alpha) + (1 - alpha) * 128);
                result = `rgba(${r}, ${g}, ${b}, 1)`;
            }
            else {
                let alpha = this.nMood;
                let r = Math.round((0 * alpha) + (1 - alpha) * 128);
                let g = Math.round((255 * alpha) + (1 - alpha) * 128);
                let b = Math.round((0 * alpha) + (1 - alpha) * 128);
                result = `rgba(${r}, ${g}, ${b}, 1)`;
            }
        }
        return result;
    }
    //---- [end] private methods
    //---- [begin] protected methods
    // update the animation
    update() {
        // updates the particules
        if ((this.nFrames_ > 0) && (this.nFrames_ % 2 == 0)) {
            this.paParticules.forEach(p => {
                p.p1.x += p.p1.ix;
                if ((p.p1.x > this.nMaxWidth) || (p.p1.x < 0)) {
                    p.p1.ix = -p.p1.ix;
                    p.p1.x += p.p1.ix;
                }
                p.p1.y += p.p1.iy;
                if ((p.p1.y > this.nMaxHeight) || (p.p1.y < 0)) {
                    p.p1.iy = -p.p1.iy;
                    p.p1.y += p.p1.iy;
                }
                p.p0.x += p.p0.ix;
                if ((p.p0.x > this.nMaxWidth) || (p.p0.x < 0)) {
                    p.p0.ix = -p.p0.ix;
                    p.p0.x += p.p0.ix;
                }
                p.p0.y += p.p0.iy;
                if ((p.p0.y > this.nMaxHeight) || (p.p0.y < 0)) {
                    p.p0.iy = -p.p0.iy;
                    p.p0.y += p.p0.iy;
                }
            });
        }
    }
    // render the animation
    render() {
        let ctx = this.pcBackBuffer.context();
        // no more particules, make the image disappeared
        if (this.paParticules.length == 0) {
            if (this.nFrames_ % 50 == 0) {
                ctx.fillStyle = "rgba(0,0,0,0.1)";
                ctx.fillRect(0, 0, this.nMaxWidth, this.nMaxHeight);
            }
        }
        else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = "rgba(0,0,0,0.08)";
            ctx.fillRect(0, 0, this.nMaxWidth, this.nMaxHeight);
            ctx.globalCompositeOperation = 'lighter';
            this.paParticules.forEach(pi => {
                this.paParticules.forEach(pf => {
                    let xd = pf.p1.x - pi.p1.x;
                    let yd = pf.p1.y - pi.p1.y;
                    let distance = Math.sqrt(xd * xd + yd * yd);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(pi.p1.x, pi.p1.y);
                        ctx.lineTo(pf.p1.x, pf.p1.y);
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = this.getColor();
                        ctx.stroke();
                    }
                    xd = pf.p0.x - pi.p0.x;
                    yd = pf.p0.y - pi.p0.y;
                    distance = Math.sqrt(xd * xd + yd * yd);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(pi.p0.x, pi.p0.y);
                        ctx.lineTo(pf.p0.x, pf.p0.y);
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = this.getColor();
                        ctx.stroke();
                    }
                });
            });
        }
        // draw the sprite on top of the canvas
        this.pcSprite.draw(319, 100, this.pcBackBuffer);
        this.pcBackBuffer.flip();
        this.pcBackBuffer.clear();
        // increase the number of frames
        this.nFrames_ = (this.nFrames_ > 10000) ? 0 : this.nFrames_ + 1;
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
    // add a new particule
    addParticule() {
        if (this.paParticules.length >= MAX_PARTICULES)
            return;
        let x0 = Math.round(Math.random() * this.nMaxWidth);
        let y0 = Math.round(Math.random() * this.nMaxHeight);
        let incx = (Math.random() > 0.5) ? -1 : 1;
        let incy = (Math.random() > 0.5) ? -1 : 1;
        let p0 = { x: x0, y: y0, ix: incx, iy: incy };
        let p1 = { x: x0, y: y0, ix: incx, iy: incy };
        this.paParticules.push({
            p0: p0,
            p1: p1
        });
    }
    // remove a particule
    delParticule() {
        this.paParticules.pop();
    }
    // increase the mood
    incMood() {
        this.nMood = (this.nMood > 1.0) ? 1.0 : (this.nMood + 0.1);
    }
    decMood() {
        this.nMood = (this.nMood < -1.0) ? -1.0 : (this.nMood - 0.1);
    }
}
exports.SpriteAnim = SpriteAnim;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL3NlYmFzdGllbi9Eb2N1bWVudHMvUHJvamVjdHMvMTBfV0lQL3RzZGVtby9zb3VyY2VzL2xpYnJhcnkvYW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8vaG9tZS9zZWJhc3RpZW4vRG9jdW1lbnRzL1Byb2plY3RzLzEwX1dJUC90c2RlbW8vc291cmNlcy9saWJyYXJ5L2JhY2tidWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy9ob21lL3NlYmFzdGllbi9Eb2N1bWVudHMvUHJvamVjdHMvMTBfV0lQL3RzZGVtby9zb3VyY2VzL2xpYnJhcnkvY29sb3IudHMiLCJ3ZWJwYWNrOi8vLy9ob21lL3NlYmFzdGllbi9Eb2N1bWVudHMvUHJvamVjdHMvMTBfV0lQL3RzZGVtby9zb3VyY2VzL2xpYnJhcnkvc3ByaXRlLnRzIiwid2VicGFjazovLy8vaG9tZS9zZWJhc3RpZW4vRG9jdW1lbnRzL1Byb2plY3RzLzEwX1dJUC90c2RlbW8vc291cmNlcy9saWJyYXJ5L3N1cmZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZWFuaW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2Q2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw4Q0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0VBQWdFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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XG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQGZpbGVcdGFuaW1hdGlvbi50c1xuICogQGF1dGhvclx0U2ViYXN0aWVuIExFR1JBTkRcbiAqIEBlbWFpbFx0b2F4bGV5QGdtYWlsLmNvbVxuICogQGRhdGVcdDIwMTgtMDktMDZcbiAqXG4gKiBAYnJpZWZcdE1haW4gQW5pbWF0aW9uIGNsYXNzXG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTA2IC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLS0tLS0tIGltcG9ydHNcbi8vLS0tLS0tIGNsYXNzZXNcbmNsYXNzIEFuaW1hdGlvbiB7XG4gICAgLy8tLS0tIG1ldGhvZHNcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8tLS0tIG1lbWJlcnNcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5GcmFtZXNfID0gMDtcbiAgICB9XG4gICAgLy8gc3RhcnQgdGhlIGFuaW1hdGlvblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmlzQW5pbWF0ZWRfID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gc3RvcCB0aGUgYW5pbWF0aW9uXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkXyA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyB0b2dnbGUgYmV0d2VlbiBzdGFydCAvIHN0b3BcbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuaXNBbmltYXRlZF8gPSAhdGhpcy5pc0FuaW1hdGVkXztcbiAgICB9XG4gICAgLy8gcmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlIGZsYWdcbiAgICBpc0FuaW1hdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FuaW1hdGVkXztcbiAgICB9XG59XG5leHBvcnRzLkFuaW1hdGlvbiA9IEFuaW1hdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAqIEBmaWxlXHRiYWNrYnVmZmVyLnRzXG4gKiBAYXV0aG9yXHRTZWJhc3RpZW4gTEVHUkFORFxuICogQGVtYWlsXHRvYXhsZXlAZ21haWwuY29tXG4gKiBAZGF0ZVx0MjAxOC0wOS0wNlxuICpcbiAqIEBicmllZlx0QmFjayBCdWZmZXIgLyBTdXJmYWNlIGRlZmluaXRpb25cbiAqIEBoaXN0b3J5XG4gKlx0XHRcdDIwMTgtMDktMDYgLSAxLjAuMCAtIFNMRVxuICpcdFx0XHRJbml0aWFsIFZlcnNpb25cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8tLS0tLS0gaW1wb3J0c1xuY29uc3Qgc3VyZmFjZV8xID0gcmVxdWlyZShcIi4vc3VyZmFjZVwiKTtcbi8vLS0tLS0tIGNsYXNzZXNcbmNsYXNzIEJhY2tCdWZmZXIgZXh0ZW5kcyBzdXJmYWNlXzEuU3VyZmFjZSB7XG4gICAgLy8tLS0tIG1ldGhvZHNcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcbiAgICAgICAgLy8gY3JlYXRlIGEgbmV3IGNhbnZhcyB0byBob2xkIHRoZSBiYWNrYnVmZmVyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSBzb3VyY2Uud2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzb3VyY2UuaGVpZ2h0O1xuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBTdXJmYWNlIHBhcmVudCBjbGFzcyB3aXRoIHRoZSBuZXcgY2FudmFzXG4gICAgICAgIHN1cGVyKGNhbnZhcyk7XG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIFwic2NyZWVuXCJcbiAgICAgICAgdGhpcy5wU2NyZWVuID0gc291cmNlO1xuICAgIH1cbiAgICAvLyBmbGlwIHRoZSBiYWNrIGJ1ZmZlciB0byB0aGUgXCJzY3JlZW5cIlxuICAgIGZsaXAoKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLnBTY3JlZW4uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzKCksIDAsIDApO1xuICAgIH1cbn1cbmV4cG9ydHMuQmFja0J1ZmZlciA9IEJhY2tCdWZmZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gKiBAZmlsZVx0Y29sb3IudHNcbiAqIEBhdXRob3JcdFNlYmFzdGllbiBMRUdSQU5EXG4gKiBAZW1haWxcdG9heGxleUBnbWFpbC5jb21cbiAqIEBkYXRlXHQyMDE4LTA5LTA2XG4gKlxuICogQGJyaWVmXHRDb2xvciBjbGFzcyBkZWZpbml0aW9uXG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTA2IC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLS0tLS0tIGltcG9ydHNcbi8vLS0tLS0tIGdsb2JhbHNcbi8vIGNvbG9yIG1vZGVsc1xudmFyIENPTE9SX01PREVMO1xuKGZ1bmN0aW9uIChDT0xPUl9NT0RFTCkge1xuICAgIENPTE9SX01PREVMW0NPTE9SX01PREVMW1wiUkdCXCJdID0gMF0gPSBcIlJHQlwiO1xuICAgIENPTE9SX01PREVMW0NPTE9SX01PREVMW1wiSFNMXCJdID0gMV0gPSBcIkhTTFwiO1xuICAgIENPTE9SX01PREVMW0NPTE9SX01PREVMW1wiSFNWXCJdID0gMl0gPSBcIkhTVlwiO1xuICAgIENPTE9SX01PREVMW0NPTE9SX01PREVMW1wiVU5LTk9XTlwiXSA9IDNdID0gXCJVTktOT1dOXCI7XG59KShDT0xPUl9NT0RFTCA9IGV4cG9ydHMuQ09MT1JfTU9ERUwgfHwgKGV4cG9ydHMuQ09MT1JfTU9ERUwgPSB7fSkpO1xuLy8gZXBzaWxvbiB2YWx1ZSB0byBjb21wYXJlIGZsb2F0XG5jb25zdCBlcHNpbG9uID0gMC4wMDAxO1xuLy8tLS0tLS0gY2xhc3Nlc1xuY2xhc3MgQ29sb3Ige1xuICAgIC8vLS0tLSBtZXRob2RzXG4gICAgY29uc3RydWN0b3IobW9kZWwgPSBDT0xPUl9NT0RFTC5VTktOT1dOLCB4ID0gMCwgeSA9IDAsIHogPSAwLCBhID0gMS4wKSB7XG4gICAgICAgIC8vLS0tLSBtZW1iZXJzXG4gICAgICAgIHRoaXMubW9kZWxfID0gQ09MT1JfTU9ERUwuVU5LTk9XTjsgLy8gdGhlIGNvbG9yIG1vZGVsXG4gICAgICAgIHRoaXMueF8gPSAwOyAvLyB0aGUgMXN0IGNvbXBvbmVudCAoUiBvciBIKVxuICAgICAgICB0aGlzLnlfID0gMDsgLy8gdGhlIDJuZCBjb21wb25lbnQgKEcgb3IgUylcbiAgICAgICAgdGhpcy56XyA9IDA7IC8vIHRoZSAzcmQgY29tcG9uZW50IChCIG9yIEwgb3IgVilcbiAgICAgICAgdGhpcy5hXyA9IDEuMDsgLy8gdGhlIGFscGhhIHZhbHVlXG4gICAgICAgIGEgPSAoYSA+IDEuMCkgPyAoYSAvIDI1NSkgOiBhO1xuICAgICAgICB0aGlzLnNldFZhbHVlcyhtb2RlbCwgeCwgeSwgeiwgYSk7XG4gICAgfVxuICAgIC8vIHNldCB0aGUgbWVtYmVyc1xuICAgIHNldFZhbHVlcyhtb2RlbCwgeCwgeSwgeiwgYSkge1xuICAgICAgICBpZiAobW9kZWwgPT0gQ09MT1JfTU9ERUwuUkdCKSB7XG4gICAgICAgICAgICBbdGhpcy5tb2RlbF8sIHRoaXMueF8sIHRoaXMueV8sIHRoaXMuel8sIHRoaXMuYV9dID0gW21vZGVsLCBNYXRoLnJvdW5kKHgpLCBNYXRoLnJvdW5kKHkpLCBNYXRoLnJvdW5kKHopLCBhXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFt0aGlzLm1vZGVsXywgdGhpcy54XywgdGhpcy55XywgdGhpcy56XywgdGhpcy5hX10gPSBbbW9kZWwsIE1hdGgucm91bmQoeCksIHksIHosIGFdO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHRyYW5zY29kZSBhIGNvbG9yIGZyb20gb25lIHNwYWNlIHRvIGFub3RoZXJcbiAgICB0cmFuc2NvZGVUbyhtb2RlbCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubW9kZWxfKSB7XG4gICAgICAgICAgICBjYXNlIENPTE9SX01PREVMLlJHQjpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09MT1JfTU9ERUwuSFNMOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNjb2RlUkdCdG9IU0woKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIENPTE9SX01PREVMLkhTVjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zY29kZVJHQnRvSFNWKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENPTE9SX01PREVMLkhTTDpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09MT1JfTU9ERUwuUkdCOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNjb2RlSFNMdG9SR0IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIENPTE9SX01PREVMLkhTVjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zY29kZUhTTHRvSFNWKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENPTE9SX01PREVMLkhTVjpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ09MT1JfTU9ERUwuUkdCOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNjb2RlSFNWdG9SR0IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIENPTE9SX01PREVMLkhTTDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zY29kZUhTVnRvSFNMKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byB0cmFuc2NvZGUgZnJvbSBVbmtub3duIGNvbG9yIG1vZGVsIVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gdHJhbnNjb2RlIGEgbW9kZWwgdG8gaXRzZWxmIVwiKTtcbiAgICB9XG4gICAgLy8tLS0tIFtiZWdpbl0gdHJhbnNjb2RlIG1haW4gZnVuY3Rpb25zXG4gICAgdHJhbnNjb2RlUkdCdG9IU0woKSB7XG4gICAgICAgIGxldCByLCBnLCBiO1xuICAgICAgICBsZXQgaCwgcywgbDtcbiAgICAgICAgbGV0IG1pbiwgbWF4LCBkZWx0YTtcbiAgICAgICAgW3IsIGcsIGJdID0gWyh0aGlzLnhfIC8gMjU1LjApLCAodGhpcy55XyAvIDI1NS4wKSwgKHRoaXMuel8gLyAyNTUuMCldO1xuICAgICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgIGRlbHRhID0gbWF4IC0gbWluO1xuICAgICAgICAvLyBsdW1pbmFuY2VcbiAgICAgICAgbCA9IChtaW4gKyBtYXgpIC8gMi4wO1xuICAgICAgICAvLyBzYXR1cmF0aW9uXG4gICAgICAgIGlmIChkZWx0YSA8IGVwc2lsb24pIHtcbiAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGwgPCAwLjUpIHtcbiAgICAgICAgICAgICAgICBzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMgPSBkZWx0YSAvICgyLjAgLSBtYXggLSBtaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGh1ZVxuICAgICAgICBpZiAoKGRlbHRhIC0gZXBzaWxvbikgPCAwKSB7XG4gICAgICAgICAgICBoID0gMDsgLy8gbm8gaHVlIGlmIG5vIHNhdHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgobWF4IC0gcikgPCBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgaCA9IChnIC0gYikgLyBkZWx0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgobWF4IC0gZykgPCBlcHNpbG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGggPSAyLjAgKyAoYiAtIHIpIC8gZGVsdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoID0gNC4wICsgKHIgLSBnKSAvIGRlbHRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGggPSBoICogNjA7XG4gICAgICAgICAgICB3aGlsZSAoaCA8IDApIHtcbiAgICAgICAgICAgICAgICBoID0gaCArIDM2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBlbmNvZGUgdGhlIG9iamVjdCAtIGtlZXAgMyBkZWNpbWFscyBmb3IgcHJlY2lzaW9uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnaCc6IE1hdGgucm91bmQoaCksXG4gICAgICAgICAgICAncyc6IE1hdGgudHJ1bmMoMTAwMCAqIHMpIC8gMTAwMCxcbiAgICAgICAgICAgICdsJzogTWF0aC50cnVuYygxMDAwICogbCkgLyAxMDAwLFxuICAgICAgICAgICAgJ2EnOiB0aGlzLmFfXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRyYW5zY29kZVJHQnRvSFNWKCkge1xuICAgICAgICBsZXQgciwgZywgYjtcbiAgICAgICAgbGV0IGgsIHMsIHY7XG4gICAgICAgIGxldCBtaW4sIG1heCwgZGVsdGE7XG4gICAgICAgIFtyLCBnLCBiXSA9IFsodGhpcy54XyAvIDI1NS4wKSwgKHRoaXMueV8gLyAyNTUuMCksICh0aGlzLnpfIC8gMjU1LjApXTtcbiAgICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgICAgICBkZWx0YSA9IG1heCAtIG1pbjtcbiAgICAgICAgLy8gaHVlXG4gICAgICAgIGlmICgoZGVsdGEgLSBlcHNpbG9uKSA8IDApIHtcbiAgICAgICAgICAgIGggPSAwOyAvLyBubyBodWUgaWYgbm8gc2F0dXJhdGlvblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKChtYXggLSByKSA8IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICBoID0gKGcgLSBiKSAvIGRlbHRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKChtYXggLSBnKSA8IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9IDIuMCArIChiIC0gcikgLyBkZWx0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGggPSA0LjAgKyAociAtIGcpIC8gZGVsdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaCA9IGggKiA2MDtcbiAgICAgICAgICAgIHdoaWxlIChoIDwgMCkge1xuICAgICAgICAgICAgICAgIGggPSBoICsgMzYwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHNhdHVyYXRpb25cbiAgICAgICAgaWYgKChtYXggLSBlcHNpbG9uKSA8IDApIHtcbiAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcyA9IGRlbHRhIC8gbWF4O1xuICAgICAgICB9XG4gICAgICAgIC8vIHZhbHVlXG4gICAgICAgIHYgPSBtYXg7XG4gICAgICAgIC8vIGVuY29kZSB0aGUgb2JqZWN0IC0ga2VlcCAzIGRlY2ltYWxzIGZvciBwcmVjaXNpb25cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdoJzogTWF0aC5yb3VuZChoKSxcbiAgICAgICAgICAgICdzJzogTWF0aC50cnVuYygxMDAwICogcykgLyAxMDAwLFxuICAgICAgICAgICAgJ3YnOiBNYXRoLnRydW5jKDEwMDAgKiB2KSAvIDEwMDAsXG4gICAgICAgICAgICAnYSc6IHRoaXMuYV9cbiAgICAgICAgfTtcbiAgICB9XG4gICAgdHJhbnNjb2RlSFNMdG9SR0IoKSB7XG4gICAgICAgIGxldCByLCBnLCBiO1xuICAgICAgICBsZXQgaCwgcywgbDtcbiAgICAgICAgbGV0IHQxLCB0MjtcbiAgICAgICAgbGV0IHRyLCB0ZywgdGI7XG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvIGNvbXB1dGUgdGhlIHZhbHVlc1xuICAgICAgICBmdW5jdGlvbiBfY29tcHV0ZVZhbHVlcyh4KSB7XG4gICAgICAgICAgICBsZXQgeTtcbiAgICAgICAgICAgIGlmICgoNiAqIHgpIDwgMS4wKSB7XG4gICAgICAgICAgICAgICAgeSA9IHQyICsgKCh0MSAtIHQyKSAqIDYgKiB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgoMiAqIHgpIDwgMS4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0MTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoMyAqIHgpIDwgMi4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gdDIgKyAoKHQxIC0gdDIpICogKDAuNjY2IC0geCkgKiA2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB0MjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB5O1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgLy8gc2V0dXAgdmFsdWVzXG4gICAgICAgIFtoLCBzLCBsXSA9IFt0aGlzLnhfLCB0aGlzLnlfLCB0aGlzLnpfXTtcbiAgICAgICAgaWYgKHMgPT0gMCkge1xuICAgICAgICAgICAgciA9IE1hdGgucm91bmQoMjU1ICogbCk7XG4gICAgICAgICAgICBnID0gTWF0aC5yb3VuZCgyNTUgKiBsKTtcbiAgICAgICAgICAgIGIgPSBNYXRoLnJvdW5kKDI1NSAqIGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY29tcHV0ZSB0ZW1wb3JhcnkgdmFsdWVzXG4gICAgICAgICAgICBpZiAobCA8IDAuNSkge1xuICAgICAgICAgICAgICAgIHQxID0gbCAqICgxLjAgKyBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHQxID0gKGwgKyBzKSAtIChsICogcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0MiA9ICgyICogbCkgLSB0MTtcbiAgICAgICAgICAgIGggPSBoIC8gMzYwLjA7XG4gICAgICAgICAgICB0ciA9ICgoaCArIDAuMzMzKSA+IDEuMCkgPyAoaCArIDAuMzMzIC0gMS4wKSA6IChoICsgMC4zMzMpO1xuICAgICAgICAgICAgdGcgPSBoO1xuICAgICAgICAgICAgdGIgPSAoKGggLSAwLjMzMykgPCAwLjApID8gKGggLSAwLjMzMyArIDEuMCkgOiAoaCAtIDAuMzMzKTtcbiAgICAgICAgICAgIC8vIFJHQiB2YWx1ZXNcbiAgICAgICAgICAgIHIgPSBNYXRoLnJvdW5kKDI1NSAqIF9jb21wdXRlVmFsdWVzKHRyKSk7XG4gICAgICAgICAgICBnID0gTWF0aC5yb3VuZCgyNTUgKiBfY29tcHV0ZVZhbHVlcyh0ZykpO1xuICAgICAgICAgICAgYiA9IE1hdGgucm91bmQoMjU1ICogX2NvbXB1dGVWYWx1ZXModGIpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXR1cm4gdGhlIG9iamVjdFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3InOiByLFxuICAgICAgICAgICAgJ2cnOiBnLFxuICAgICAgICAgICAgJ2InOiBiLFxuICAgICAgICAgICAgJ2EnOiBNYXRoLnJvdW5kKHRoaXMuYV8gKiAyNTUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRyYW5zY29kZUhTTHRvSFNWKCkge1xuICAgICAgICBsZXQgaCwgcywgbDtcbiAgICAgICAgbGV0IHYsIHg7XG4gICAgICAgIFtoLCBzLCBsXSA9IFt0aGlzLnhfLCB0aGlzLnlfLCB0aGlzLnpfXTtcbiAgICAgICAgaWYgKGwgPCAwLjUpIHtcbiAgICAgICAgICAgIHggPSBzICogbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHggPSBzICogKDEgLSBsKTtcbiAgICAgICAgfVxuICAgICAgICB2ID0gbCArIHg7XG4gICAgICAgIHMgPSAoMiAqIHgpIC8gdjtcbiAgICAgICAgLy8gZW5jb2RlIHRoZSBvYmplY3QgLSBrZWVwIDMgZGVjaW1hbHMgZm9yIHByZWNpc2lvblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2gnOiBNYXRoLnJvdW5kKGgpLFxuICAgICAgICAgICAgJ3MnOiBNYXRoLnRydW5jKDEwMDAgKiBzKSAvIDEwMDAsXG4gICAgICAgICAgICAndic6IE1hdGgudHJ1bmMoMTAwMCAqIHYpIC8gMTAwMCxcbiAgICAgICAgICAgICdhJzogdGhpcy5hX1xuICAgICAgICB9O1xuICAgIH1cbiAgICB0cmFuc2NvZGVIU1Z0b1JHQigpIHtcbiAgICAgICAgbGV0IHIsIGcsIGI7XG4gICAgICAgIGxldCBoLCBzLCB2O1xuICAgICAgICBsZXQgYywgeCwgbTtcbiAgICAgICAgW2gsIHMsIHZdID0gW3RoaXMueF8sIHRoaXMueV8sIHRoaXMuel9dO1xuICAgICAgICBjID0gdiAqIHM7XG4gICAgICAgIG0gPSB2IC0gYztcbiAgICAgICAgeCA9IGMgKiAoMSAtIE1hdGguYWJzKCgoaCAvIDYwKSAlIDIpIC0gMSkpO1xuICAgICAgICBpZiAoKGggPj0gMCkgJiYgKGggPCA2MCkpIHtcbiAgICAgICAgICAgIFtyLCBnLCBiXSA9IFtjLCB4LCAwXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoaCA+PSA2MCkgJiYgKGggPCAxMjApKSB7XG4gICAgICAgICAgICBbciwgZywgYl0gPSBbeCwgYywgMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGggPj0gMTIwKSAmJiAoaCA8IDE4MCkpIHtcbiAgICAgICAgICAgIFtyLCBnLCBiXSA9IFswLCBjLCB4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoaCA+PSAxODApICYmIChoIDwgMjQwKSkge1xuICAgICAgICAgICAgW3IsIGcsIGJdID0gWzAsIHgsIGNdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChoID49IDI0MCkgJiYgKGggPCAzMDApKSB7XG4gICAgICAgICAgICBbciwgZywgYl0gPSBbeCwgMCwgY107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGggPj0gMzAwKSAmJiAoaCA8IDM2MCkpIHtcbiAgICAgICAgICAgIFtyLCBnLCBiXSA9IFtjLCAwLCB4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFtyLCBnLCBiXSA9IFswLCAwLCAwXTtcbiAgICAgICAgfVxuICAgICAgICByID0gTWF0aC5yb3VuZCgociArIG0pICogMjU1KTtcbiAgICAgICAgZyA9IE1hdGgucm91bmQoKGcgKyBtKSAqIDI1NSk7XG4gICAgICAgIGIgPSBNYXRoLnJvdW5kKChiICsgbSkgKiAyNTUpO1xuICAgICAgICAvLyByZXR1cm4gdGhlIG9iamVjdFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3InOiByLFxuICAgICAgICAgICAgJ2cnOiBnLFxuICAgICAgICAgICAgJ2InOiBiLFxuICAgICAgICAgICAgJ2EnOiBNYXRoLnJvdW5kKHRoaXMuYV8gKiAyNTUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRyYW5zY29kZUhTVnRvSFNMKCkge1xuICAgICAgICBsZXQgaCwgcywgbDtcbiAgICAgICAgbGV0IHYsIHg7XG4gICAgICAgIFtoLCBzLCB2XSA9IFt0aGlzLnhfLCB0aGlzLnlfLCB0aGlzLnpfXTtcbiAgICAgICAgeCA9ICgyIC0gcykgKiB2O1xuICAgICAgICAvLyBzYXR1cmF0aW9uXG4gICAgICAgIGlmICh4IDwgMSkge1xuICAgICAgICAgICAgcyA9IChzICogdikgLyB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcyA9IChzICogdikgLyAoMiAtIHgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGx1bWluYW5jZVxuICAgICAgICBsID0geCAvIDI7XG4gICAgICAgIC8vIGVuY29kZSB0aGUgb2JqZWN0IC0ga2VlcCAzIGRlY2ltYWxzIGZvciBwcmVjaXNpb25cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdoJzogTWF0aC5yb3VuZChoKSxcbiAgICAgICAgICAgICdzJzogTWF0aC50cnVuYygxMDAwICogcykgLyAxMDAwLFxuICAgICAgICAgICAgJ2wnOiBNYXRoLnRydW5jKDEwMDAgKiB2KSAvIDEwMDAsXG4gICAgICAgICAgICAnYSc6IHRoaXMuYV9cbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8tLS0tIFtlbmRdIHRyYW5zY29kZSBtYWluIGZ1bmN0aW9uc1xuICAgIC8vLS0tLSBbYmVnaW5dIHB1YmxpYyBtZXRob2RzXG4gICAgbW9kZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsXztcbiAgICB9XG4gICAgc2V0UkdCQSh4LCB5LCB6LCBhKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgbGV0IGEgPSAoeC5hID4gMS4wKSA/ICh4LmEgLyAyNTUpIDogeC5hO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoQ09MT1JfTU9ERUwuUkdCLCB4LnIsIHguZywgeC5iLCBhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRha2UgY2FyZSBvZiB1bmRlZmluZWQgcGFyYW1ldGVyc1xuICAgICAgICAgICAgeSA9ICh5ID09PSB1bmRlZmluZWQpID8gMCA6IHk7XG4gICAgICAgICAgICB6ID0gKHogPT09IHVuZGVmaW5lZCkgPyAwIDogejtcbiAgICAgICAgICAgIGEgPSAoYSA9PT0gdW5kZWZpbmVkKSA/IDEuMCA6IGE7XG4gICAgICAgICAgICAvLyBjbGFtcCB0aGUgYWxwaGEgY2hhbm5lbCB0byBbMC4wLCAxLjBdXG4gICAgICAgICAgICBhID0gKGEgPiAxLjApID8gKGEgLyAyNTUpIDogYTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKENPTE9SX01PREVMLlJHQiwgeCwgeSwgeiwgYSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SFNMQSh4LCB5LCB6LCBhKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoQ09MT1JfTU9ERUwuSFNMLCB4LmgsIHgucywgeC5sLCB4LmEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdGFrZSBjYXJlIG9mIHVuZGVmaW5lZCBwYXJhbWV0ZXJzXG4gICAgICAgICAgICB5ID0gKHkgPT09IHVuZGVmaW5lZCkgPyAwIDogeTtcbiAgICAgICAgICAgIHogPSAoeiA9PT0gdW5kZWZpbmVkKSA/IDAgOiB6O1xuICAgICAgICAgICAgYSA9IChhID09PSB1bmRlZmluZWQpID8gMS4wIDogYTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKENPTE9SX01PREVMLkhTTCwgeCwgeSwgeiwgYSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0SFNWQSh4LCB5LCB6LCBhKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoQ09MT1JfTU9ERUwuSFNWLCB4LmgsIHgucywgeC52LCB4LmEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdGFrZSBjYXJlIG9mIHVuZGVmaW5lZCBwYXJhbWV0ZXJzXG4gICAgICAgICAgICB5ID0gKHkgPT09IHVuZGVmaW5lZCkgPyAwIDogeTtcbiAgICAgICAgICAgIHogPSAoeiA9PT0gdW5kZWZpbmVkKSA/IDAgOiB6O1xuICAgICAgICAgICAgYSA9IChhID09PSB1bmRlZmluZWQpID8gMS4wIDogYTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKENPTE9SX01PREVMLkhTViwgeCwgeSwgeiwgYSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0UkdCQSgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWxfID09IENPTE9SX01PREVMLlJHQikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByOiB0aGlzLnhfLFxuICAgICAgICAgICAgICAgIGc6IHRoaXMueV8sXG4gICAgICAgICAgICAgICAgYjogdGhpcy56XyxcbiAgICAgICAgICAgICAgICBhOiBNYXRoLnJvdW5kKHRoaXMuYV8gKiAyNTUpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNjb2RlVG8oQ09MT1JfTU9ERUwuUkdCKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRIU0xBKCkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbF8gPT0gQ09MT1JfTU9ERUwuSFNMKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGg6IHRoaXMueF8sXG4gICAgICAgICAgICAgICAgczogdGhpcy55XyxcbiAgICAgICAgICAgICAgICBsOiB0aGlzLnpfLFxuICAgICAgICAgICAgICAgIGE6IHRoaXMuYV9cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2NvZGVUbyhDT0xPUl9NT0RFTC5IU0wpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEhTVkEoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsXyA9PSBDT0xPUl9NT0RFTC5IU1YpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaDogdGhpcy54XyxcbiAgICAgICAgICAgICAgICBzOiB0aGlzLnlfLFxuICAgICAgICAgICAgICAgIHY6IHRoaXMuel8sXG4gICAgICAgICAgICAgICAgYTogdGhpcy5hX1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zY29kZVRvKENPTE9SX01PREVMLkhTVik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8tLS0tIFtlbmRdIHB1YmxpYyBtZXRob2RzXG4gICAgLy8tLS0tIFtiZWdpbl0gQ1NTIHB1YmxpYyBtZXRob2RzXG4gICAgQ1NTUkdCVmFsdWVzKCkge1xuICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRSR0JBKCk7XG4gICAgICAgIHJldHVybiBgcmdiKCR7dmFsdWVzLnJ9LCAke3ZhbHVlcy5nfSwgJHt2YWx1ZXMuYn0pYDtcbiAgICB9XG4gICAgQ1NTUkdCQVZhbHVlcygpIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0UkdCQSgpO1xuICAgICAgICByZXR1cm4gYHJnYmEoJHt2YWx1ZXMucn0sICR7dmFsdWVzLmd9LCAke3ZhbHVlcy5ifSwgJHt2YWx1ZXMuYX0pYDtcbiAgICB9XG4gICAgQ1NTSFNMVmFsdWVzKCkge1xuICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRIU0xBKCk7XG4gICAgICAgIHJldHVybiBgaHNsKCR7dmFsdWVzLmh9LCAke3ZhbHVlcy5zfSwgJHt2YWx1ZXMubH0pYDtcbiAgICB9XG4gICAgQ1NTSFNMQVZhbHVlcygpIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0SFNMQSgpO1xuICAgICAgICByZXR1cm4gYGhzbCgke3ZhbHVlcy5ofSwgJHt2YWx1ZXMuc30sICR7dmFsdWVzLmx9LCAke3ZhbHVlcy5hfSlgO1xuICAgIH1cbiAgICBDU1NIZXhhKCkge1xuICAgICAgICBmdW5jdGlvbiBfaGV4Q29udmVyc2lvbih2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHN0ciA9IHZhbHVlLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIHN0ciA9IChzdHIubGVuZ3RoIDwgMikgPyAnMCcgKyBzdHIgOiBzdHI7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldFJHQkEoKTtcbiAgICAgICAgbGV0IHIgPSBfaGV4Q29udmVyc2lvbih2YWx1ZXMucik7XG4gICAgICAgIGxldCBnID0gX2hleENvbnZlcnNpb24odmFsdWVzLmcpO1xuICAgICAgICBsZXQgYiA9IF9oZXhDb252ZXJzaW9uKHZhbHVlcy5iKTtcbiAgICAgICAgcmV0dXJuIGAjJHtyfSR7Z30ke2J9YDtcbiAgICB9XG4gICAgc3RhdGljICpncmFkaWVudChiZWdpbiwgZW5kLCBjb3VudCkge1xuICAgICAgICBsZXQgeGksIHlpLCB6aSwgYWk7XG4gICAgICAgIGxldCB4ZiwgeWYsIHpmLCBhZjtcbiAgICAgICAgbGV0IGR4LCBkeSwgZHosIGRhO1xuICAgICAgICBsZXQgYzEsIGMyO1xuICAgICAgICAvLyBjaGVjayB0aGUgY29sb3IgbW9kZWxcbiAgICAgICAgaWYgKGJlZ2luLm1vZGVsKCkgIT0gZW5kLm1vZGVsKCkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiY2Fubm90IGNyZWF0ZSBhIGdyYWRpZW50IGZyb20gZGlmZmVyZW50IG1vZGVscyFcIik7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChiZWdpbi5tb2RlbCgpKSB7XG4gICAgICAgICAgICBjYXNlIENPTE9SX01PREVMLlJHQjpcbiAgICAgICAgICAgICAgICBjMSA9IGJlZ2luLmdldFJHQkEoKTtcbiAgICAgICAgICAgICAgICB4aSA9IGMxLnIsIHlpID0gYzEuZywgemkgPSBjMS5iLCBhaSA9IGMxLmE7XG4gICAgICAgICAgICAgICAgYzIgPSBlbmQuZ2V0UkdCQSgpO1xuICAgICAgICAgICAgICAgIHhmID0gYzIuciwgeWYgPSBjMi5nLCB6ZiA9IGMyLmIsIGFmID0gYzIuYTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJVbmtub3duIGNvbG9yIG1vZGVsIVwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb21wdXRlIHRoZSBkZWx0YSBmb3IgZWFjaCBjb21wb25lbnRzXG4gICAgICAgIGR4ID0gKHhmIC0geGkpIC8gY291bnQ7XG4gICAgICAgIGR5ID0gKHlmIC0geWkpIC8gY291bnQ7XG4gICAgICAgIGR6ID0gKHpmIC0gemkpIC8gY291bnQ7XG4gICAgICAgIGRhID0gKGFmIC0gYWkpIC8gY291bnQ7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBuZXcgY29sb3JcbiAgICAgICAgICAgIHlpZWxkIG5ldyBDb2xvcihiZWdpbi5tb2RlbCgpLCB4aSwgeWksIHppLCBhaSk7XG4gICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIHZhbHVlc1xuICAgICAgICAgICAgeGkgPSB4aSArIGR4O1xuICAgICAgICAgICAgeWkgPSB5aSArIGR5O1xuICAgICAgICAgICAgemkgPSB6aSArIGR6O1xuICAgICAgICAgICAgYWkgPSBhaSArIGRhO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Db2xvciA9IENvbG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQGZpbGVcdHNwcml0ZS50c1xuICogQGF1dGhvclx0U2ViYXN0aWVuIExFR1JBTkRcbiAqIEBlbWFpbFx0b2F4bGV5QGdtYWlsLmNvbVxuICogQGRhdGVcdDIwMTgtMDktMDZcbiAqXG4gKiBAYnJpZWZcdFNwcml0ZSAvIFN1cmZhY2UgZGVmaW5pdGlvblxuICogQGhpc3RvcnlcbiAqXHRcdFx0MjAxOC0wOS0wNiAtIDEuMC4wIC0gU0xFXG4gKlx0XHRcdEluaXRpYWwgVmVyc2lvblxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLy0tLS0tLSBpbXBvcnRzXG5jb25zdCBzdXJmYWNlXzEgPSByZXF1aXJlKFwiLi9zdXJmYWNlXCIpO1xuLy8tLS0tLS0gaW50ZXJmYWNlc1xuLy8tLS0tLS0gY2xhc3Nlc1xuY2xhc3MgU3ByaXRlIGV4dGVuZHMgc3VyZmFjZV8xLlN1cmZhY2Uge1xuICAgIC8vLS0tLSBtZW1iZXJzXG4gICAgLy8tLS0tIG1ldGhvZHNcbiAgICBjb25zdHJ1Y3RvcihpbWcsIHRyYW5zcGFyZW5jeSkge1xuICAgICAgICAvLyBjcmVhdGUgYSBjYW52YXMgdG8gaG9sZCB0aGUgaW1hZ2VcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIC8vIGNvcHkgdGhlIGltYWdlIG9uIHRoZSBjYW52YXNcbiAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgaWYgKHRyYW5zcGFyZW5jeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSB0cmFuc3BhcmVuY3kuZ2V0UkdCQSgpO1xuICAgICAgICAgICAgbGV0IGltZ0RhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGltZy5oZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSB5ICogaW1nLndpZHRoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaW1nLndpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gKG9mZnNldCArIHgpIDw8IDI7XG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gaW1nRGF0YS5kYXRhW3Bvc2l0aW9uKytdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZyA9IGltZ0RhdGEuZGF0YVtwb3NpdGlvbisrXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGIgPSBpbWdEYXRhLmRhdGFbcG9zaXRpb24rK107XG4gICAgICAgICAgICAgICAgICAgIGlmICgociA9PSBjb2xvci5yKSAmJiAoZyA9PSBjb2xvci5nKSAmJiAoYiA9PSBjb2xvci5iKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nRGF0YS5kYXRhW3Bvc2l0aW9uKytdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaW1nRGF0YSwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgcGFyZW50IGNsYXNzXG4gICAgICAgIHN1cGVyKGNhbnZhcyk7XG4gICAgfVxuICAgIC8vIGRyYXcgdGhlIHNwcml0ZSBvbiBhbm90aGVyIHN1cmZhY2VcbiAgICBkcmF3KHgsIHksIHRhcmdldCkge1xuICAgICAgICBsZXQgY3R4ID0gdGFyZ2V0LmNvbnRleHQoKTtcbiAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMoKSwgeCwgeSk7XG4gICAgfVxufVxuZXhwb3J0cy5TcHJpdGUgPSBTcHJpdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gKiBAZmlsZVx0c3VyZmFjZS50c1xuICogQGF1dGhvclx0U2ViYXN0aWVuIExFR1JBTkRcbiAqIEBlbWFpbFx0b2F4bGV5QGdtYWlsLmNvbVxuICogQGRhdGVcdDIwMTgtMDktMDVcbiAqXG4gKiBAYnJpZWZcdFN1cmZhY2UgZGVmaW5pdGlvblxuICogQGhpc3RvcnlcbiAqXHRcdFx0MjAxOC0wOS0wNSAtIDEuMC4wIC0gU0xFXG4gKlx0XHRcdEluaXRpYWwgVmVyc2lvblxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLy0tLS0tLSBjbGFzc2VzXG5jbGFzcyBTdXJmYWNlIHtcbiAgICAvLy0tLS0gbWV0aG9kc1xuICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzXyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb250ZXh0XyA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMud2lkdGhfID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodF8gPSBjYW52YXMuaGVpZ2h0O1xuICAgIH1cbiAgICAvLyByZXR1cm4gdGhlIGNvbnRleHQgb2YgdGhlIGNhbnZhc1xuICAgIGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfO1xuICAgIH1cbiAgICAvLyByZXR1cm4gdGhlIGNhbnZhcyBpdHNlbGZcbiAgICBjYW52YXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhc187XG4gICAgfVxuICAgIC8vIHJldHVybiB0aGUgZGltZW5zaW9uIG9mIHRoZSBjYW52YXNcbiAgICBzaXplKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGhfLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodF9cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZGF0YSh4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMud2lkdGhfLCB0aGlzLmhlaWdodF8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5wdXRJbWFnZURhdGEoeCwgMCwgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xlYXIgdGhlIHN1cmZhY2VcbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Xy5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aF8sIHRoaXMuaGVpZ2h0Xyk7XG4gICAgfVxufVxuZXhwb3J0cy5TdXJmYWNlID0gU3VyZmFjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAqIEBmaWxlXHRtYWluLnRzXG4gKiBAYXV0aG9yXHRTZWJhc3RpZW4gTEVHUkFORFxuICogQGVtYWlsXHRvYXhsZXlAZ21haWwuY29tXG4gKiBAZGF0ZVx0MjAxOC0wOS0xMVxuICpcbiAqIEBicmllZlx0TWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHNwcml0ZSBlZmZlY3RcbiAqIEBoaXN0b3J5XG4gKlx0XHRcdDIwMTgtMDktMTEgLSAxLjAuMCAtIFNMRVxuICpcdFx0XHRJbml0aWFsIFZlcnNpb25cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8tLS0tLS0gaW1wb3J0c1xuY29uc3Qgc3ByaXRlYW5pbV8xID0gcmVxdWlyZShcIi4vc3ByaXRlYW5pbVwiKTtcbi8vLS0tLS0tIGJlZ2luXG5sZXQgc3ByaXRlYW5pbSA9IG5ldyBzcHJpdGVhbmltXzEuU3ByaXRlQW5pbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKSk7XG4vLyBzZXQgdGhlIGtleWJvYXJkIGhhbmRsZXJzXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldmVudCkgPT4ge1xuICAgIHN3aXRjaCAoZXZlbnQuY2hhckNvZGUpIHtcbiAgICAgICAgY2FzZSAxMTc6IC8vICd1J1xuICAgICAgICAgICAgc3ByaXRlYW5pbS5hZGRQYXJ0aWN1bGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExMDogLy8gJ24nXG4gICAgICAgICAgICBzcHJpdGVhbmltLmRlbFBhcnRpY3VsZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDM6IC8vICcrJ1xuICAgICAgICAgICAgc3ByaXRlYW5pbS5pbmNNb29kKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0NTogLy8gJy0nXG4gICAgICAgICAgICBzcHJpdGVhbmltLmRlY01vb2QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBzcHJpdGVhbmltLnJ1bigpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAqIEBmaWxlXHRzcHJpdGVhbmltLnRzXG4gKiBAYXV0aG9yXHRTZWJhc3RpZW4gTEVHUkFORFxuICogQGVtYWlsXHRvYXhsZXlAZ21haWwuY29tXG4gKiBAZGF0ZVx0MjAxOC0wOS0xMVxuICpcbiAqIEBicmllZlx0U3ByaXRlIEFuaW1hdGlvblxuICogQGhpc3RvcnlcbiAqXHRcdFx0MjAxOC0wOS0xMSAtIDEuMC4wIC0gU0xFXG4gKlx0XHRcdEluaXRpYWwgVmVyc2lvblxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLy0tLS0tLSBpbXBvcnRzXG5jb25zdCBhbmltYXRpb25fMSA9IHJlcXVpcmUoXCJsaWJyYXJ5L2FuaW1hdGlvblwiKTtcbmNvbnN0IHNwcml0ZV8xID0gcmVxdWlyZShcImxpYnJhcnkvc3ByaXRlXCIpO1xuY29uc3QgYmFja2J1ZmZlcl8xID0gcmVxdWlyZShcImxpYnJhcnkvYmFja2J1ZmZlclwiKTtcbmNvbnN0IGNvbG9yXzEgPSByZXF1aXJlKFwibGlicmFyeS9jb2xvclwiKTtcbi8vLS0tLS0tIGdsb2JhbHNcbmNvbnN0IE1BWF9QQVJUSUNVTEVTID0gMjAwO1xuLy8tLS0tLS0gY2xhc3Nlc1xuY2xhc3MgU3ByaXRlQW5pbSBleHRlbmRzIGFuaW1hdGlvbl8xLkFuaW1hdGlvbiB7XG4gICAgLy8tLS0tIFtlbmRdIHByb3RlY3RlZCBtZXRob2RzXG4gICAgLy8tLS0tIFtiZWdpbl0gcHVibGljIG1ldGhvZHNcbiAgICBjb25zdHJ1Y3RvcihvdXRwdXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy8tLS0tIG1lbWJlcnNcbiAgICAgICAgdGhpcy5wY1Nwcml0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGFQYXJ0aWN1bGVzID0gW107XG4gICAgICAgIHRoaXMubk1heFdpZHRoID0gMDtcbiAgICAgICAgdGhpcy5uTWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5uTW9vZCA9IDA7XG4gICAgICAgIHRoaXMucGNCYWNrQnVmZmVyID0gbmV3IGJhY2tidWZmZXJfMS5CYWNrQnVmZmVyKG91dHB1dCk7XG4gICAgICAgIHRoaXMubk1heFdpZHRoID0gb3V0cHV0LndpZHRoO1xuICAgICAgICB0aGlzLm5NYXhIZWlnaHQgPSBvdXRwdXQuaGVpZ2h0O1xuICAgICAgICAvLyBsb2FkIHRoZSBzcHJpdGVcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2UoKTtcbiAgICB9XG4gICAgLy8tLS0tIFtiZWdpbl0gcHJpdmF0ZSBtZXRob2RzXG4gICAgLy8gbG9hZCB0aGUgaW1hZ2VcbiAgICBsb2FkSW1hZ2UoKSB7XG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGNTcHJpdGUgPSBuZXcgc3ByaXRlXzEuU3ByaXRlKGltZywgbmV3IGNvbG9yXzEuQ29sb3IoY29sb3JfMS5DT0xPUl9NT0RFTC5SR0IsIDQ0LCAxNTYsIDApKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLnNyYyA9IFwiL2ltYWdlcy9tYWRfc2NpZW50aXN0LnBuZ1wiO1xuICAgIH1cbiAgICAvLyBzZWxlY3QgdGhlIGNvbG9yXG4gICAgZ2V0Q29sb3IoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgaWYgKHRoaXMubk1vb2QgPT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gJ3JnYmEoMTI4LDEyOCwxMjgsMSknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubk1vb2QgPCAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFscGhhID0gLXRoaXMubk1vb2Q7XG4gICAgICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJvdW5kKCgyNTUgKiBhbHBoYSkgKyAoMSAtIGFscGhhKSAqIDEyOCk7XG4gICAgICAgICAgICAgICAgbGV0IGcgPSBNYXRoLnJvdW5kKCgwICogYWxwaGEpICsgKDEgLSBhbHBoYSkgKiAxMjgpO1xuICAgICAgICAgICAgICAgIGxldCBiID0gTWF0aC5yb3VuZCgoMCAqIGFscGhhKSArICgxIC0gYWxwaGEpICogMTI4KTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAxKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgYWxwaGEgPSB0aGlzLm5Nb29kO1xuICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5yb3VuZCgoMCAqIGFscGhhKSArICgxIC0gYWxwaGEpICogMTI4KTtcbiAgICAgICAgICAgICAgICBsZXQgZyA9IE1hdGgucm91bmQoKDI1NSAqIGFscGhhKSArICgxIC0gYWxwaGEpICogMTI4KTtcbiAgICAgICAgICAgICAgICBsZXQgYiA9IE1hdGgucm91bmQoKDAgKiBhbHBoYSkgKyAoMSAtIGFscGhhKSAqIDEyOCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgMSlgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vLS0tLSBbZW5kXSBwcml2YXRlIG1ldGhvZHNcbiAgICAvLy0tLS0gW2JlZ2luXSBwcm90ZWN0ZWQgbWV0aG9kc1xuICAgIC8vIHVwZGF0ZSB0aGUgYW5pbWF0aW9uXG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvLyB1cGRhdGVzIHRoZSBwYXJ0aWN1bGVzXG4gICAgICAgIGlmICgodGhpcy5uRnJhbWVzXyA+IDApICYmICh0aGlzLm5GcmFtZXNfICUgMiA9PSAwKSkge1xuICAgICAgICAgICAgdGhpcy5wYVBhcnRpY3VsZXMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgICAgICBwLnAxLnggKz0gcC5wMS5peDtcbiAgICAgICAgICAgICAgICBpZiAoKHAucDEueCA+IHRoaXMubk1heFdpZHRoKSB8fCAocC5wMS54IDwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcC5wMS5peCA9IC1wLnAxLml4O1xuICAgICAgICAgICAgICAgICAgICBwLnAxLnggKz0gcC5wMS5peDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcC5wMS55ICs9IHAucDEuaXk7XG4gICAgICAgICAgICAgICAgaWYgKChwLnAxLnkgPiB0aGlzLm5NYXhIZWlnaHQpIHx8IChwLnAxLnkgPCAwKSkge1xuICAgICAgICAgICAgICAgICAgICBwLnAxLml5ID0gLXAucDEuaXk7XG4gICAgICAgICAgICAgICAgICAgIHAucDEueSArPSBwLnAxLml5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwLnAwLnggKz0gcC5wMC5peDtcbiAgICAgICAgICAgICAgICBpZiAoKHAucDAueCA+IHRoaXMubk1heFdpZHRoKSB8fCAocC5wMC54IDwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcC5wMC5peCA9IC1wLnAwLml4O1xuICAgICAgICAgICAgICAgICAgICBwLnAwLnggKz0gcC5wMC5peDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcC5wMC55ICs9IHAucDAuaXk7XG4gICAgICAgICAgICAgICAgaWYgKChwLnAwLnkgPiB0aGlzLm5NYXhIZWlnaHQpIHx8IChwLnAwLnkgPCAwKSkge1xuICAgICAgICAgICAgICAgICAgICBwLnAwLml5ID0gLXAucDAuaXk7XG4gICAgICAgICAgICAgICAgICAgIHAucDAueSArPSBwLnAwLml5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHJlbmRlciB0aGUgYW5pbWF0aW9uXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5wY0JhY2tCdWZmZXIuY29udGV4dCgpO1xuICAgICAgICAvLyBubyBtb3JlIHBhcnRpY3VsZXMsIG1ha2UgdGhlIGltYWdlIGRpc2FwcGVhcmVkXG4gICAgICAgIGlmICh0aGlzLnBhUGFydGljdWxlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubkZyYW1lc18gJSA1MCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjEpXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMubk1heFdpZHRoLCB0aGlzLm5NYXhIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMDgpXCI7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5uTWF4V2lkdGgsIHRoaXMubk1heEhlaWdodCk7XG4gICAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2xpZ2h0ZXInO1xuICAgICAgICAgICAgdGhpcy5wYVBhcnRpY3VsZXMuZm9yRWFjaChwaSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYVBhcnRpY3VsZXMuZm9yRWFjaChwZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4ZCA9IHBmLnAxLnggLSBwaS5wMS54O1xuICAgICAgICAgICAgICAgICAgICBsZXQgeWQgPSBwZi5wMS55IC0gcGkucDEueTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHhkICogeGQgKyB5ZCAqIHlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHBpLnAxLngsIHBpLnAxLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhwZi5wMS54LCBwZi5wMS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5nZXRDb2xvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHhkID0gcGYucDAueCAtIHBpLnAwLng7XG4gICAgICAgICAgICAgICAgICAgIHlkID0gcGYucDAueSAtIHBpLnAwLnk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5zcXJ0KHhkICogeGQgKyB5ZCAqIHlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHBpLnAwLngsIHBpLnAwLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhwZi5wMC54LCBwZi5wMC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5nZXRDb2xvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3IHRoZSBzcHJpdGUgb24gdG9wIG9mIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy5wY1Nwcml0ZS5kcmF3KDMxOSwgMTAwLCB0aGlzLnBjQmFja0J1ZmZlcik7XG4gICAgICAgIHRoaXMucGNCYWNrQnVmZmVyLmZsaXAoKTtcbiAgICAgICAgdGhpcy5wY0JhY2tCdWZmZXIuY2xlYXIoKTtcbiAgICAgICAgLy8gaW5jcmVhc2UgdGhlIG51bWJlciBvZiBmcmFtZXNcbiAgICAgICAgdGhpcy5uRnJhbWVzXyA9ICh0aGlzLm5GcmFtZXNfID4gMTAwMDApID8gMCA6IHRoaXMubkZyYW1lc18gKyAxO1xuICAgIH1cbiAgICAvLyBtYWlubG9vcCBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIG1haW5Mb29wKHRpbWVzdGFtcCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgLy8gcnVuIHRoZSBhbmltYXRpb25cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMubWFpbkxvb3AoMCk7XG4gICAgfVxuICAgIC8vIGFkZCBhIG5ldyBwYXJ0aWN1bGVcbiAgICBhZGRQYXJ0aWN1bGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhUGFydGljdWxlcy5sZW5ndGggPj0gTUFYX1BBUlRJQ1VMRVMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCB4MCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMubk1heFdpZHRoKTtcbiAgICAgICAgbGV0IHkwID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogdGhpcy5uTWF4SGVpZ2h0KTtcbiAgICAgICAgbGV0IGluY3ggPSAoTWF0aC5yYW5kb20oKSA+IDAuNSkgPyAtMSA6IDE7XG4gICAgICAgIGxldCBpbmN5ID0gKE1hdGgucmFuZG9tKCkgPiAwLjUpID8gLTEgOiAxO1xuICAgICAgICBsZXQgcDAgPSB7IHg6IHgwLCB5OiB5MCwgaXg6IGluY3gsIGl5OiBpbmN5IH07XG4gICAgICAgIGxldCBwMSA9IHsgeDogeDAsIHk6IHkwLCBpeDogaW5jeCwgaXk6IGluY3kgfTtcbiAgICAgICAgdGhpcy5wYVBhcnRpY3VsZXMucHVzaCh7XG4gICAgICAgICAgICBwMDogcDAsXG4gICAgICAgICAgICBwMTogcDFcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHJlbW92ZSBhIHBhcnRpY3VsZVxuICAgIGRlbFBhcnRpY3VsZSgpIHtcbiAgICAgICAgdGhpcy5wYVBhcnRpY3VsZXMucG9wKCk7XG4gICAgfVxuICAgIC8vIGluY3JlYXNlIHRoZSBtb29kXG4gICAgaW5jTW9vZCgpIHtcbiAgICAgICAgdGhpcy5uTW9vZCA9ICh0aGlzLm5Nb29kID4gMS4wKSA/IDEuMCA6ICh0aGlzLm5Nb29kICsgMC4xKTtcbiAgICB9XG4gICAgZGVjTW9vZCgpIHtcbiAgICAgICAgdGhpcy5uTW9vZCA9ICh0aGlzLm5Nb29kIDwgLTEuMCkgPyAtMS4wIDogKHRoaXMubk1vb2QgLSAwLjEpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3ByaXRlQW5pbSA9IFNwcml0ZUFuaW07XG4iXSwic291cmNlUm9vdCI6IiJ9