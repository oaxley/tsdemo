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

/***/ "./src/bump.ts":
/*!*********************!*\
  !*** ./src/bump.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @file	bump.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-09
 *
 * @brief	Bump Mapping Effect
 * @history
 *			2018-09-09 - 1.0.0 - SLE
 *			Initial Version
 */
//------ imports
const animation_1 = __webpack_require__(/*! library/animation */ "../../../library/animation.ts");
const backbuffer_1 = __webpack_require__(/*! library/backbuffer */ "../../../library/backbuffer.ts");
//------ globals
const ENVIRON_MAP_WIDTH = 256;
const ENVIRON_MAP_HEIGHT = 256;
//------ classes
class Bump extends animation_1.Animation {
    //---- [end] protected methods
    //---- [begin] public methods
    // constructor
    constructor(output) {
        super();
        this.paEnvironMap = [];
        this.paImage = [];
        // setup the back buffer
        this.pcBackBuffer = new backbuffer_1.BackBuffer(output);
        this.pnWidth = output.width;
        this.pnHeight = output.height;
        // environ mapping
        this.generateEnvMap();
        // load the image
        this.loadImage();
        // set the mouse handler
        this.setHandler(output);
    }
    //---- [begin] private methods
    // generate the environ map
    generateEnvMap() {
        let x, y;
        let nx, ny, nz;
        // environ map center 
        let cx = ENVIRON_MAP_WIDTH >> 1;
        let cy = ENVIRON_MAP_HEIGHT >> 1;
        for (let y = 0; y < ENVIRON_MAP_HEIGHT; y++) {
            let offset = y * ENVIRON_MAP_WIDTH;
            for (let x = 0; x < ENVIRON_MAP_WIDTH; x++) {
                nx = ((x - cx) / cx);
                ny = ((y - cy) / cy);
                nz = 1 - Math.sqrt(nx * nx + ny * ny);
                nz = (nz < 0) ? 0 : nz;
                this.paEnvironMap[offset + x] = Math.round(255 * nz);
            }
        }
    }
    // load the image
    loadImage() {
        let img = new Image();
        img.onload = () => {
            // use the backbuffer to paint the image
            this.pcBackBuffer.context().drawImage(img, 0, 0);
            // retrieve the data to build the image map
            let imgData = this.pcBackBuffer.data();
            let pos = 0;
            for (let i = 0; i < imgData.data.length; i += 4) {
                let value = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
                value = (value > 255) ? 255 : Math.round(value);
                this.paImage[pos++] = value;
            }
            // clear the backbuffer
            this.pcBackBuffer.clear();
        };
        img.src = "/images/bump.png";
    }
    // set the mouse handler
    setHandler(canvas) {
        var rect = canvas.getBoundingClientRect();
        canvas.onmousemove = (event) => {
            // compute the position of the move, relative to the canvas
            let X = event.clientX - rect.left;
            let Y = event.clientY - rect.top;
            // compute the bump mapping
            this.bump(X, Y);
            // render the animation
            this.render();
        };
    }
    // generate the bump from the mouse position
    bump(lightX, lightY) {
        let imgData = this.pcBackBuffer.data();
        for (let y = 1; y < this.pnHeight - 1; y++) {
            let offset = y * this.pnWidth;
            for (let x = 0; x < this.pnWidth; x++) {
                let nx = this.paImage[offset + (x + 1)] - this.paImage[offset + (x - 1)];
                let ny = this.paImage[offset + this.pnWidth + x] - this.paImage[offset - this.pnWidth + x];
                let lx = x - lightX;
                let ly = y - lightY;
                nx = nx - lx;
                ny = ny - ly;
                nx = nx + 128;
                ny = ny + 128;
                nx = (nx < 0 || nx > (ENVIRON_MAP_WIDTH - 1)) ? (ENVIRON_MAP_WIDTH - 1) : nx;
                ny = (ny < 0 || ny > (ENVIRON_MAP_HEIGHT - 1)) ? (ENVIRON_MAP_HEIGHT - 1) : ny;
                let value = this.paEnvironMap[ENVIRON_MAP_WIDTH * ny + nx];
                let position = (offset + x) << 2;
                imgData.data[position] = value;
                imgData.data[++position] = value;
                imgData.data[++position] = value;
                imgData.data[++position] = 255;
            }
        }
        this.pcBackBuffer.data(imgData);
    }
    //---- [end] private methods
    //---- [begin] protected methods
    // update
    update() {
    }
    // render
    render() {
        this.pcBackBuffer.flip();
    }
    // mainloop
    mainLoop(timestamp) {
    }
    // run
    run() {
    }
}
exports.Bump = Bump;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @file	main.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-09
 *
 * @brief	Main entry point for Bump Mapping Effect
 * @history
 *			2018-09-09 - 1.0.0 - SLE
 *			Initial Version
 */
//------ imports
const bump_1 = __webpack_require__(/*! ./bump */ "./src/bump.ts");
//------ begin
// retrieve the canvas element
let output = document.getElementById("output");
// create a new instance
let bump = new bump_1.Bump(output);
// wait for the image to be loaded
window.onload = () => {
    bump.run();
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zZWJhc3RpZW4vU291cmNlcy8wMF9TYW5kYm94L2phdmFzY3JpcHQvZGVtb3NjZW5lL3NvdXJjZXMvbGlicmFyeS9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zZWJhc3RpZW4vU291cmNlcy8wMF9TYW5kYm94L2phdmFzY3JpcHQvZGVtb3NjZW5lL3NvdXJjZXMvbGlicmFyeS9iYWNrYnVmZmVyLnRzIiwid2VicGFjazovLy8vVXNlcnMvc2ViYXN0aWVuL1NvdXJjZXMvMDBfU2FuZGJveC9qYXZhc2NyaXB0L2RlbW9zY2VuZS9zb3VyY2VzL2xpYnJhcnkvc3VyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYnVtcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQGZpbGVcdGFuaW1hdGlvbi50c1xuICogQGF1dGhvclx0U2ViYXN0aWVuIExFR1JBTkRcbiAqIEBlbWFpbFx0b2F4bGV5QGdtYWlsLmNvbVxuICogQGRhdGVcdDIwMTgtMDktMDZcbiAqXG4gKiBAYnJpZWZcdE1haW4gQW5pbWF0aW9uIGNsYXNzXG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTA2IC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLS0tLS0tIGltcG9ydHNcbi8vLS0tLS0tIGNsYXNzZXNcbmNsYXNzIEFuaW1hdGlvbiB7XG4gICAgLy8tLS0tIG1ldGhvZHNcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8tLS0tIG1lbWJlcnNcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkXyA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBzdGFydCB0aGUgYW5pbWF0aW9uXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNBbmltYXRlZF8gPSB0cnVlO1xuICAgIH1cbiAgICAvLyBzdG9wIHRoZSBhbmltYXRpb25cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmlzQW5pbWF0ZWRfID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHRvZ2dsZSBiZXR3ZWVuIHN0YXJ0IC8gc3RvcFxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkXyA9ICF0aGlzLmlzQW5pbWF0ZWRfO1xuICAgIH1cbiAgICAvLyByZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgZmxhZ1xuICAgIGlzQW5pbWF0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQW5pbWF0ZWRfO1xuICAgIH1cbn1cbmV4cG9ydHMuQW5pbWF0aW9uID0gQW5pbWF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQGZpbGVcdGJhY2tidWZmZXIudHNcbiAqIEBhdXRob3JcdFNlYmFzdGllbiBMRUdSQU5EXG4gKiBAZW1haWxcdG9heGxleUBnbWFpbC5jb21cbiAqIEBkYXRlXHQyMDE4LTA5LTA2XG4gKlxuICogQGJyaWVmXHRCYWNrIEJ1ZmZlciAvIFN1cmZhY2UgZGVmaW5pdGlvblxuICogQGhpc3RvcnlcbiAqXHRcdFx0MjAxOC0wOS0wNiAtIDEuMC4wIC0gU0xFXG4gKlx0XHRcdEluaXRpYWwgVmVyc2lvblxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLy0tLS0tLSBpbXBvcnRzXG5jb25zdCBzdXJmYWNlXzEgPSByZXF1aXJlKFwiLi9zdXJmYWNlXCIpO1xuLy8tLS0tLS0gY2xhc3Nlc1xuY2xhc3MgQmFja0J1ZmZlciBleHRlbmRzIHN1cmZhY2VfMS5TdXJmYWNlIHtcbiAgICAvLy0tLS0gbWV0aG9kc1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSkge1xuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgY2FudmFzIHRvIGhvbGQgdGhlIGJhY2tidWZmZXJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNvdXJjZS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIFN1cmZhY2UgcGFyZW50IGNsYXNzIHdpdGggdGhlIG5ldyBjYW52YXNcbiAgICAgICAgc3VwZXIoY2FudmFzKTtcbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgXCJzY3JlZW5cIlxuICAgICAgICB0aGlzLnBTY3JlZW4gPSBzb3VyY2U7XG4gICAgfVxuICAgIC8vIGZsaXAgdGhlIGJhY2sgYnVmZmVyIHRvIHRoZSBcInNjcmVlblwiXG4gICAgZmxpcCgpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMucFNjcmVlbi5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMoKSwgMCwgMCk7XG4gICAgfVxufVxuZXhwb3J0cy5CYWNrQnVmZmVyID0gQmFja0J1ZmZlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAqIEBmaWxlXHRzdXJmYWNlLnRzXG4gKiBAYXV0aG9yXHRTZWJhc3RpZW4gTEVHUkFORFxuICogQGVtYWlsXHRvYXhsZXlAZ21haWwuY29tXG4gKiBAZGF0ZVx0MjAxOC0wOS0wNVxuICpcbiAqIEBicmllZlx0U3VyZmFjZSBkZWZpbml0aW9uXG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTA1IC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLS0tLS0tIGNsYXNzZXNcbmNsYXNzIFN1cmZhY2Uge1xuICAgIC8vLS0tLSBtZXRob2RzXG4gICAgLy8gY29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXNfID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNvbnRleHRfID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy53aWR0aF8gPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0XyA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgfVxuICAgIC8vIHJldHVybiB0aGUgY29udGV4dCBvZiB0aGUgY2FudmFzXG4gICAgY29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF87XG4gICAgfVxuICAgIC8vIHJldHVybiB0aGUgY2FudmFzIGl0c2VsZlxuICAgIGNhbnZhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzXztcbiAgICB9XG4gICAgLy8gcmV0dXJuIHRoZSBkaW1lbnNpb24gb2YgdGhlIGNhbnZhc1xuICAgIHNpemUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aF8sXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0X1xuICAgICAgICB9O1xuICAgIH1cbiAgICBkYXRhKHgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53aWR0aF8sIHRoaXMuaGVpZ2h0Xyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLnB1dEltYWdlRGF0YSh4LCAwLCAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjbGVhciB0aGUgc3VyZmFjZVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmNvbnRleHRfLmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoXywgdGhpcy5oZWlnaHRfKTtcbiAgICB9XG59XG5leHBvcnRzLlN1cmZhY2UgPSBTdXJmYWNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKlxuICogQGZpbGVcdGJ1bXAudHNcbiAqIEBhdXRob3JcdFNlYmFzdGllbiBMRUdSQU5EXG4gKiBAZW1haWxcdG9heGxleUBnbWFpbC5jb21cbiAqIEBkYXRlXHQyMDE4LTA5LTA5XG4gKlxuICogQGJyaWVmXHRCdW1wIE1hcHBpbmcgRWZmZWN0XG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTA5IC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbi8vLS0tLS0tIGltcG9ydHNcbmNvbnN0IGFuaW1hdGlvbl8xID0gcmVxdWlyZShcImxpYnJhcnkvYW5pbWF0aW9uXCIpO1xuY29uc3QgYmFja2J1ZmZlcl8xID0gcmVxdWlyZShcImxpYnJhcnkvYmFja2J1ZmZlclwiKTtcbi8vLS0tLS0tIGdsb2JhbHNcbmNvbnN0IEVOVklST05fTUFQX1dJRFRIID0gMjU2O1xuY29uc3QgRU5WSVJPTl9NQVBfSEVJR0hUID0gMjU2O1xuLy8tLS0tLS0gY2xhc3Nlc1xuY2xhc3MgQnVtcCBleHRlbmRzIGFuaW1hdGlvbl8xLkFuaW1hdGlvbiB7XG4gICAgLy8tLS0tIFtlbmRdIHByb3RlY3RlZCBtZXRob2RzXG4gICAgLy8tLS0tIFtiZWdpbl0gcHVibGljIG1ldGhvZHNcbiAgICAvLyBjb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKG91dHB1dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhRW52aXJvbk1hcCA9IFtdO1xuICAgICAgICB0aGlzLnBhSW1hZ2UgPSBbXTtcbiAgICAgICAgLy8gc2V0dXAgdGhlIGJhY2sgYnVmZmVyXG4gICAgICAgIHRoaXMucGNCYWNrQnVmZmVyID0gbmV3IGJhY2tidWZmZXJfMS5CYWNrQnVmZmVyKG91dHB1dCk7XG4gICAgICAgIHRoaXMucG5XaWR0aCA9IG91dHB1dC53aWR0aDtcbiAgICAgICAgdGhpcy5wbkhlaWdodCA9IG91dHB1dC5oZWlnaHQ7XG4gICAgICAgIC8vIGVudmlyb24gbWFwcGluZ1xuICAgICAgICB0aGlzLmdlbmVyYXRlRW52TWFwKCk7XG4gICAgICAgIC8vIGxvYWQgdGhlIGltYWdlXG4gICAgICAgIHRoaXMubG9hZEltYWdlKCk7XG4gICAgICAgIC8vIHNldCB0aGUgbW91c2UgaGFuZGxlclxuICAgICAgICB0aGlzLnNldEhhbmRsZXIob3V0cHV0KTtcbiAgICB9XG4gICAgLy8tLS0tIFtiZWdpbl0gcHJpdmF0ZSBtZXRob2RzXG4gICAgLy8gZ2VuZXJhdGUgdGhlIGVudmlyb24gbWFwXG4gICAgZ2VuZXJhdGVFbnZNYXAoKSB7XG4gICAgICAgIGxldCB4LCB5O1xuICAgICAgICBsZXQgbngsIG55LCBuejtcbiAgICAgICAgLy8gZW52aXJvbiBtYXAgY2VudGVyIFxuICAgICAgICBsZXQgY3ggPSBFTlZJUk9OX01BUF9XSURUSCA+PiAxO1xuICAgICAgICBsZXQgY3kgPSBFTlZJUk9OX01BUF9IRUlHSFQgPj4gMTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBFTlZJUk9OX01BUF9IRUlHSFQ7IHkrKykge1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHkgKiBFTlZJUk9OX01BUF9XSURUSDtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgRU5WSVJPTl9NQVBfV0lEVEg7IHgrKykge1xuICAgICAgICAgICAgICAgIG54ID0gKCh4IC0gY3gpIC8gY3gpO1xuICAgICAgICAgICAgICAgIG55ID0gKCh5IC0gY3kpIC8gY3kpO1xuICAgICAgICAgICAgICAgIG56ID0gMSAtIE1hdGguc3FydChueCAqIG54ICsgbnkgKiBueSk7XG4gICAgICAgICAgICAgICAgbnogPSAobnogPCAwKSA/IDAgOiBuejtcbiAgICAgICAgICAgICAgICB0aGlzLnBhRW52aXJvbk1hcFtvZmZzZXQgKyB4XSA9IE1hdGgucm91bmQoMjU1ICogbnopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGxvYWQgdGhlIGltYWdlXG4gICAgbG9hZEltYWdlKCkge1xuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyB1c2UgdGhlIGJhY2tidWZmZXIgdG8gcGFpbnQgdGhlIGltYWdlXG4gICAgICAgICAgICB0aGlzLnBjQmFja0J1ZmZlci5jb250ZXh0KCkuZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICAvLyByZXRyaWV2ZSB0aGUgZGF0YSB0byBidWlsZCB0aGUgaW1hZ2UgbWFwXG4gICAgICAgICAgICBsZXQgaW1nRGF0YSA9IHRoaXMucGNCYWNrQnVmZmVyLmRhdGEoKTtcbiAgICAgICAgICAgIGxldCBwb3MgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAoaW1nRGF0YS5kYXRhW2ldICsgaW1nRGF0YS5kYXRhW2kgKyAxXSArIGltZ0RhdGEuZGF0YVtpICsgMl0pIC8gMztcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSA+IDI1NSkgPyAyNTUgOiBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhSW1hZ2VbcG9zKytdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjbGVhciB0aGUgYmFja2J1ZmZlclxuICAgICAgICAgICAgdGhpcy5wY0JhY2tCdWZmZXIuY2xlYXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLnNyYyA9IFwiL2ltYWdlcy9idW1wLnBuZ1wiO1xuICAgIH1cbiAgICAvLyBzZXQgdGhlIG1vdXNlIGhhbmRsZXJcbiAgICBzZXRIYW5kbGVyKGNhbnZhcykge1xuICAgICAgICB2YXIgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY2FudmFzLm9ubW91c2Vtb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBjb21wdXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgbW92ZSwgcmVsYXRpdmUgdG8gdGhlIGNhbnZhc1xuICAgICAgICAgICAgbGV0IFggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgbGV0IFkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICAvLyBjb21wdXRlIHRoZSBidW1wIG1hcHBpbmdcbiAgICAgICAgICAgIHRoaXMuYnVtcChYLCBZKTtcbiAgICAgICAgICAgIC8vIHJlbmRlciB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBnZW5lcmF0ZSB0aGUgYnVtcCBmcm9tIHRoZSBtb3VzZSBwb3NpdGlvblxuICAgIGJ1bXAobGlnaHRYLCBsaWdodFkpIHtcbiAgICAgICAgbGV0IGltZ0RhdGEgPSB0aGlzLnBjQmFja0J1ZmZlci5kYXRhKCk7XG4gICAgICAgIGZvciAobGV0IHkgPSAxOyB5IDwgdGhpcy5wbkhlaWdodCAtIDE7IHkrKykge1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHkgKiB0aGlzLnBuV2lkdGg7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucG5XaWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG54ID0gdGhpcy5wYUltYWdlW29mZnNldCArICh4ICsgMSldIC0gdGhpcy5wYUltYWdlW29mZnNldCArICh4IC0gMSldO1xuICAgICAgICAgICAgICAgIGxldCBueSA9IHRoaXMucGFJbWFnZVtvZmZzZXQgKyB0aGlzLnBuV2lkdGggKyB4XSAtIHRoaXMucGFJbWFnZVtvZmZzZXQgLSB0aGlzLnBuV2lkdGggKyB4XTtcbiAgICAgICAgICAgICAgICBsZXQgbHggPSB4IC0gbGlnaHRYO1xuICAgICAgICAgICAgICAgIGxldCBseSA9IHkgLSBsaWdodFk7XG4gICAgICAgICAgICAgICAgbnggPSBueCAtIGx4O1xuICAgICAgICAgICAgICAgIG55ID0gbnkgLSBseTtcbiAgICAgICAgICAgICAgICBueCA9IG54ICsgMTI4O1xuICAgICAgICAgICAgICAgIG55ID0gbnkgKyAxMjg7XG4gICAgICAgICAgICAgICAgbnggPSAobnggPCAwIHx8IG54ID4gKEVOVklST05fTUFQX1dJRFRIIC0gMSkpID8gKEVOVklST05fTUFQX1dJRFRIIC0gMSkgOiBueDtcbiAgICAgICAgICAgICAgICBueSA9IChueSA8IDAgfHwgbnkgPiAoRU5WSVJPTl9NQVBfSEVJR0hUIC0gMSkpID8gKEVOVklST05fTUFQX0hFSUdIVCAtIDEpIDogbnk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5wYUVudmlyb25NYXBbRU5WSVJPTl9NQVBfV0lEVEggKiBueSArIG54XTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAob2Zmc2V0ICsgeCkgPDwgMjtcbiAgICAgICAgICAgICAgICBpbWdEYXRhLmRhdGFbcG9zaXRpb25dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaW1nRGF0YS5kYXRhWysrcG9zaXRpb25dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaW1nRGF0YS5kYXRhWysrcG9zaXRpb25dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaW1nRGF0YS5kYXRhWysrcG9zaXRpb25dID0gMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGNCYWNrQnVmZmVyLmRhdGEoaW1nRGF0YSk7XG4gICAgfVxuICAgIC8vLS0tLSBbZW5kXSBwcml2YXRlIG1ldGhvZHNcbiAgICAvLy0tLS0gW2JlZ2luXSBwcm90ZWN0ZWQgbWV0aG9kc1xuICAgIC8vIHVwZGF0ZVxuICAgIHVwZGF0ZSgpIHtcbiAgICB9XG4gICAgLy8gcmVuZGVyXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnBjQmFja0J1ZmZlci5mbGlwKCk7XG4gICAgfVxuICAgIC8vIG1haW5sb29wXG4gICAgbWFpbkxvb3AodGltZXN0YW1wKSB7XG4gICAgfVxuICAgIC8vIHJ1blxuICAgIHJ1bigpIHtcbiAgICB9XG59XG5leHBvcnRzLkJ1bXAgPSBCdW1wO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKlxuICogQGZpbGVcdG1haW4udHNcbiAqIEBhdXRob3JcdFNlYmFzdGllbiBMRUdSQU5EXG4gKiBAZW1haWxcdG9heGxleUBnbWFpbC5jb21cbiAqIEBkYXRlXHQyMDE4LTA5LTA5XG4gKlxuICogQGJyaWVmXHRNYWluIGVudHJ5IHBvaW50IGZvciBCdW1wIE1hcHBpbmcgRWZmZWN0XG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTA5IC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbi8vLS0tLS0tIGltcG9ydHNcbmNvbnN0IGJ1bXBfMSA9IHJlcXVpcmUoXCIuL2J1bXBcIik7XG4vLy0tLS0tLSBiZWdpblxuLy8gcmV0cmlldmUgdGhlIGNhbnZhcyBlbGVtZW50XG5sZXQgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIik7XG4vLyBjcmVhdGUgYSBuZXcgaW5zdGFuY2VcbmxldCBidW1wID0gbmV3IGJ1bXBfMS5CdW1wKG91dHB1dCk7XG4vLyB3YWl0IGZvciB0aGUgaW1hZ2UgdG8gYmUgbG9hZGVkXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGJ1bXAucnVuKCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==