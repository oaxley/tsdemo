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

/***/ "./src/lensanim.ts":
/*!*************************!*\
  !*** ./src/lensanim.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @file	lensanim.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-10-21
 *
 * @brief	Sprite Animation
 * @history
 *			2018-10-21 - 1.0.0 - SLE
 *			Initial Version
 */
Object.defineProperty(exports, "__esModule", { value: true });
//------ imports
const animation_1 = __webpack_require__(/*! library/animation */ "../../../library/animation.ts");
const backbuffer_1 = __webpack_require__(/*! library/backbuffer */ "../../../library/backbuffer.ts");
//------ globals
const LENS_MAGNIFICATION = 10;
const LENS_DIAMETER = 200;
//------ interfaces
//------ classes
class LensAnim extends animation_1.Animation {
    //---- [end] protected methods
    //---- [begin] public methods
    constructor(output) {
        super();
        this.paTransMap = [];
        // setup the back buffer
        this.pcBackBuffer = new backbuffer_1.BackBuffer(output);
        this.pnWidth = output.width;
        this.pnHeight = output.height;
        // create the transformation map
        this.transMap();
        // load the image
        this.pcImage = new Image();
        this.pcImage.onload = () => {
            // copy the image to the backbuffer
            let ctx = this.pcBackBuffer.context();
            ctx.drawImage(this.pcImage, 0, 0);
        };
        this.pcImage.src = '/images/lens-back.jpg';
        // set the mouse handler
        this.setHandler(output);
    }
    //---- [begin] private methods
    // set the mouse handler
    setHandler(canvas) {
        var rect = canvas.getBoundingClientRect();
        canvas.onmousemove = (event) => {
            // compute the position of the move, relative to the canvas
            let X = event.clientX - rect.left;
            let Y = event.clientY - rect.top;
            // compute the new lens position
            this.computeLens(X, Y);
            // render the animation
            this.render();
        };
    }
    // compute the transformation map
    transMap() {
        let R = LENS_DIAMETER >> 2;
        let R2 = R * R;
        let S = Math.sqrt(R2 - LENS_MAGNIFICATION * LENS_MAGNIFICATION);
        let S2 = S * S;
        // console.log(`R=${R} | S=${S} | S2=${S2}`)
        for (let y = -R; y < (-R + LENS_DIAMETER); y++) {
            let Y2 = y * y;
            for (let x = -R; x < (-R + LENS_DIAMETER); x++) {
                let X2 = x * x;
                let A = x;
                let B = y;
                if ((X2 + Y2) < S2) {
                    let Z = Math.sqrt(R2 - X2 - Y2);
                    A = Math.round((x * LENS_MAGNIFICATION) / (Z + 0.5));
                    B = Math.round((y * LENS_MAGNIFICATION) / (Z + 0.5));
                }
                this.paTransMap[(y + R) * LENS_DIAMETER + (x + R)] = (B + R) * LENS_DIAMETER + (A + R);
            }
        }
        // console.log(this.paTransMap)
    }
    // compute the lens
    computeLens(X, Y) {
        // copy the image to the backbuffer
        let ctx = this.pcBackBuffer.context();
        ctx.drawImage(this.pcImage, 0, 0);
        // compute the lens at the spot
        let XL = X - (LENS_DIAMETER >> 2);
        let YT = Y - (LENS_DIAMETER >> 2);
        // create a new canvas that will hold the lens
        let imgData = ctx.getImageData(XL, YT, LENS_DIAMETER, LENS_DIAMETER);
        // retrieve the pixels of the initial image
        let destData = new ImageData(LENS_DIAMETER, LENS_DIAMETER);
        for (let y = 0; y < LENS_DIAMETER; y++) {
            let offset = y * LENS_DIAMETER;
            for (let x = 0; x < LENS_DIAMETER; x++) {
                let TMFOffset = offset + x;
                let value = this.paTransMap[TMFOffset] * 4;
                destData.data[TMFOffset * 4] = imgData.data[value];
                destData.data[TMFOffset * 4 + 1] = imgData.data[value + 1];
                destData.data[TMFOffset * 4 + 2] = imgData.data[value + 2];
                destData.data[TMFOffset * 4 + 3] = imgData.data[value + 3];
            }
        }
        // apply the transformation to the back buffer
        ctx.putImageData(destData, XL, YT);
    }
    //---- [end] private methods
    //---- [begin] protected methods
    // update the animation
    update() {
    }
    // render the animation
    render() {
        this.pcBackBuffer.flip();
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
exports.LensAnim = LensAnim;


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
 * @date	2018-10-21
 *
 * @brief	Main entry point for the Lens effect
 * @history
 *			2018-10-21 - 1.0.0 - SLE
 *			Initial Version
 */
Object.defineProperty(exports, "__esModule", { value: true });
//------ imports
const lensanim_1 = __webpack_require__(/*! ./lensanim */ "./src/lensanim.ts");
//------ begin
// create a new instance of lens object
let lensObject = new lensanim_1.LensAnim(document.getElementById("output"));
// run the application once everything is loaded
window.onload = () => {
    lensObject.run();
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL3NlYmFzdGllbi9Eb2N1bWVudHMvUHJvamVjdHMvMTBfV0lQL3RzZGVtby9zb3VyY2VzL2xpYnJhcnkvYW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8vaG9tZS9zZWJhc3RpZW4vRG9jdW1lbnRzL1Byb2plY3RzLzEwX1dJUC90c2RlbW8vc291cmNlcy9saWJyYXJ5L2JhY2tidWZmZXIudHMiLCJ3ZWJwYWNrOi8vLy9ob21lL3NlYmFzdGllbi9Eb2N1bWVudHMvUHJvamVjdHMvMTBfV0lQL3RzZGVtby9zb3VyY2VzL2xpYnJhcnkvc3VyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGVuc2FuaW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2Q2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw4Q0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLHdEQUFtQjtBQUMvQyxxQkFBcUIsbUJBQU8sQ0FBQywwREFBb0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEVBQUUsT0FBTyxFQUFFLFFBQVEsR0FBRztBQUNsRCx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvSGE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAqIEBmaWxlXHRhbmltYXRpb24udHNcbiAqIEBhdXRob3JcdFNlYmFzdGllbiBMRUdSQU5EXG4gKiBAZW1haWxcdG9heGxleUBnbWFpbC5jb21cbiAqIEBkYXRlXHQyMDE4LTA5LTA2XG4gKlxuICogQGJyaWVmXHRNYWluIEFuaW1hdGlvbiBjbGFzc1xuICogQGhpc3RvcnlcbiAqXHRcdFx0MjAxOC0wOS0wNiAtIDEuMC4wIC0gU0xFXG4gKlx0XHRcdEluaXRpYWwgVmVyc2lvblxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLy0tLS0tLSBpbXBvcnRzXG4vLy0tLS0tLSBjbGFzc2VzXG5jbGFzcyBBbmltYXRpb24ge1xuICAgIC8vLS0tLSBtZXRob2RzXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vLS0tLSBtZW1iZXJzXG4gICAgICAgIHRoaXMuaXNBbmltYXRlZF8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uRnJhbWVzXyA9IDA7XG4gICAgfVxuICAgIC8vIHN0YXJ0IHRoZSBhbmltYXRpb25cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkXyA9IHRydWU7XG4gICAgfVxuICAgIC8vIHN0b3AgdGhlIGFuaW1hdGlvblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuaXNBbmltYXRlZF8gPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gdG9nZ2xlIGJldHdlZW4gc3RhcnQgLyBzdG9wXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmlzQW5pbWF0ZWRfID0gIXRoaXMuaXNBbmltYXRlZF87XG4gICAgfVxuICAgIC8vIHJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSBmbGFnXG4gICAgaXNBbmltYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBbmltYXRlZF87XG4gICAgfVxufVxuZXhwb3J0cy5BbmltYXRpb24gPSBBbmltYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gKiBAZmlsZVx0YmFja2J1ZmZlci50c1xuICogQGF1dGhvclx0U2ViYXN0aWVuIExFR1JBTkRcbiAqIEBlbWFpbFx0b2F4bGV5QGdtYWlsLmNvbVxuICogQGRhdGVcdDIwMTgtMDktMDZcbiAqXG4gKiBAYnJpZWZcdEJhY2sgQnVmZmVyIC8gU3VyZmFjZSBkZWZpbml0aW9uXG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTA2IC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLS0tLS0tIGltcG9ydHNcbmNvbnN0IHN1cmZhY2VfMSA9IHJlcXVpcmUoXCIuL3N1cmZhY2VcIik7XG4vLy0tLS0tLSBjbGFzc2VzXG5jbGFzcyBCYWNrQnVmZmVyIGV4dGVuZHMgc3VyZmFjZV8xLlN1cmZhY2Uge1xuICAgIC8vLS0tLSBtZXRob2RzXG4gICAgY29uc3RydWN0b3Ioc291cmNlKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBjYW52YXMgdG8gaG9sZCB0aGUgYmFja2J1ZmZlclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gc291cmNlLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc291cmNlLmhlaWdodDtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgU3VyZmFjZSBwYXJlbnQgY2xhc3Mgd2l0aCB0aGUgbmV3IGNhbnZhc1xuICAgICAgICBzdXBlcihjYW52YXMpO1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBcInNjcmVlblwiXG4gICAgICAgIHRoaXMucFNjcmVlbiA9IHNvdXJjZTtcbiAgICB9XG4gICAgLy8gZmxpcCB0aGUgYmFjayBidWZmZXIgdG8gdGhlIFwic2NyZWVuXCJcbiAgICBmbGlwKCkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5wU2NyZWVuLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhbnZhcygpLCAwLCAwKTtcbiAgICB9XG59XG5leHBvcnRzLkJhY2tCdWZmZXIgPSBCYWNrQnVmZmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQGZpbGVcdHN1cmZhY2UudHNcbiAqIEBhdXRob3JcdFNlYmFzdGllbiBMRUdSQU5EXG4gKiBAZW1haWxcdG9heGxleUBnbWFpbC5jb21cbiAqIEBkYXRlXHQyMDE4LTA5LTA1XG4gKlxuICogQGJyaWVmXHRTdXJmYWNlIGRlZmluaXRpb25cbiAqIEBoaXN0b3J5XG4gKlx0XHRcdDIwMTgtMDktMDUgLSAxLjAuMCAtIFNMRVxuICpcdFx0XHRJbml0aWFsIFZlcnNpb25cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8tLS0tLS0gY2xhc3Nlc1xuY2xhc3MgU3VyZmFjZSB7XG4gICAgLy8tLS0tIG1ldGhvZHNcbiAgICAvLyBjb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhc18gPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY29udGV4dF8gPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLndpZHRoXyA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHRfID0gY2FudmFzLmhlaWdodDtcbiAgICB9XG4gICAgLy8gcmV0dXJuIHRoZSBjb250ZXh0IG9mIHRoZSBjYW52YXNcbiAgICBjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0XztcbiAgICB9XG4gICAgLy8gcmV0dXJuIHRoZSBjYW52YXMgaXRzZWxmXG4gICAgY2FudmFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNfO1xuICAgIH1cbiAgICAvLyByZXR1cm4gdGhlIGRpbWVuc2lvbiBvZiB0aGUgY2FudmFzXG4gICAgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoXyxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRfXG4gICAgICAgIH07XG4gICAgfVxuICAgIGRhdGEoeCkge1xuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoXywgdGhpcy5oZWlnaHRfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8ucHV0SW1hZ2VEYXRhKHgsIDAsIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNsZWFyIHRoZSBzdXJmYWNlXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dF8uY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGhfLCB0aGlzLmhlaWdodF8pO1xuICAgIH1cbn1cbmV4cG9ydHMuU3VyZmFjZSA9IFN1cmZhY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gKiBAZmlsZVx0bGVuc2FuaW0udHNcbiAqIEBhdXRob3JcdFNlYmFzdGllbiBMRUdSQU5EXG4gKiBAZW1haWxcdG9heGxleUBnbWFpbC5jb21cbiAqIEBkYXRlXHQyMDE4LTEwLTIxXG4gKlxuICogQGJyaWVmXHRTcHJpdGUgQW5pbWF0aW9uXG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTEwLTIxIC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLS0tLS0tIGltcG9ydHNcbmNvbnN0IGFuaW1hdGlvbl8xID0gcmVxdWlyZShcImxpYnJhcnkvYW5pbWF0aW9uXCIpO1xuY29uc3QgYmFja2J1ZmZlcl8xID0gcmVxdWlyZShcImxpYnJhcnkvYmFja2J1ZmZlclwiKTtcbi8vLS0tLS0tIGdsb2JhbHNcbmNvbnN0IExFTlNfTUFHTklGSUNBVElPTiA9IDEwO1xuY29uc3QgTEVOU19ESUFNRVRFUiA9IDIwMDtcbi8vLS0tLS0tIGludGVyZmFjZXNcbi8vLS0tLS0tIGNsYXNzZXNcbmNsYXNzIExlbnNBbmltIGV4dGVuZHMgYW5pbWF0aW9uXzEuQW5pbWF0aW9uIHtcbiAgICAvLy0tLS0gW2VuZF0gcHJvdGVjdGVkIG1ldGhvZHNcbiAgICAvLy0tLS0gW2JlZ2luXSBwdWJsaWMgbWV0aG9kc1xuICAgIGNvbnN0cnVjdG9yKG91dHB1dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhVHJhbnNNYXAgPSBbXTtcbiAgICAgICAgLy8gc2V0dXAgdGhlIGJhY2sgYnVmZmVyXG4gICAgICAgIHRoaXMucGNCYWNrQnVmZmVyID0gbmV3IGJhY2tidWZmZXJfMS5CYWNrQnVmZmVyKG91dHB1dCk7XG4gICAgICAgIHRoaXMucG5XaWR0aCA9IG91dHB1dC53aWR0aDtcbiAgICAgICAgdGhpcy5wbkhlaWdodCA9IG91dHB1dC5oZWlnaHQ7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgdHJhbnNmb3JtYXRpb24gbWFwXG4gICAgICAgIHRoaXMudHJhbnNNYXAoKTtcbiAgICAgICAgLy8gbG9hZCB0aGUgaW1hZ2VcbiAgICAgICAgdGhpcy5wY0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucGNJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBpbWFnZSB0byB0aGUgYmFja2J1ZmZlclxuICAgICAgICAgICAgbGV0IGN0eCA9IHRoaXMucGNCYWNrQnVmZmVyLmNvbnRleHQoKTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5wY0ltYWdlLCAwLCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wY0ltYWdlLnNyYyA9ICcvaW1hZ2VzL2xlbnMtYmFjay5qcGcnO1xuICAgICAgICAvLyBzZXQgdGhlIG1vdXNlIGhhbmRsZXJcbiAgICAgICAgdGhpcy5zZXRIYW5kbGVyKG91dHB1dCk7XG4gICAgfVxuICAgIC8vLS0tLSBbYmVnaW5dIHByaXZhdGUgbWV0aG9kc1xuICAgIC8vIHNldCB0aGUgbW91c2UgaGFuZGxlclxuICAgIHNldEhhbmRsZXIoY2FudmFzKSB7XG4gICAgICAgIHZhciByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjYW52YXMub25tb3VzZW1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbXB1dGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBtb3ZlLCByZWxhdGl2ZSB0byB0aGUgY2FudmFzXG4gICAgICAgICAgICBsZXQgWCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBsZXQgWSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIC8vIGNvbXB1dGUgdGhlIG5ldyBsZW5zIHBvc2l0aW9uXG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVMZW5zKFgsIFkpO1xuICAgICAgICAgICAgLy8gcmVuZGVyIHRoZSBhbmltYXRpb25cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIGNvbXB1dGUgdGhlIHRyYW5zZm9ybWF0aW9uIG1hcFxuICAgIHRyYW5zTWFwKCkge1xuICAgICAgICBsZXQgUiA9IExFTlNfRElBTUVURVIgPj4gMjtcbiAgICAgICAgbGV0IFIyID0gUiAqIFI7XG4gICAgICAgIGxldCBTID0gTWF0aC5zcXJ0KFIyIC0gTEVOU19NQUdOSUZJQ0FUSU9OICogTEVOU19NQUdOSUZJQ0FUSU9OKTtcbiAgICAgICAgbGV0IFMyID0gUyAqIFM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBSPSR7Un0gfCBTPSR7U30gfCBTMj0ke1MyfWApXG4gICAgICAgIGZvciAobGV0IHkgPSAtUjsgeSA8ICgtUiArIExFTlNfRElBTUVURVIpOyB5KyspIHtcbiAgICAgICAgICAgIGxldCBZMiA9IHkgKiB5O1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IC1SOyB4IDwgKC1SICsgTEVOU19ESUFNRVRFUik7IHgrKykge1xuICAgICAgICAgICAgICAgIGxldCBYMiA9IHggKiB4O1xuICAgICAgICAgICAgICAgIGxldCBBID0geDtcbiAgICAgICAgICAgICAgICBsZXQgQiA9IHk7XG4gICAgICAgICAgICAgICAgaWYgKChYMiArIFkyKSA8IFMyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBaID0gTWF0aC5zcXJ0KFIyIC0gWDIgLSBZMik7XG4gICAgICAgICAgICAgICAgICAgIEEgPSBNYXRoLnJvdW5kKCh4ICogTEVOU19NQUdOSUZJQ0FUSU9OKSAvIChaICsgMC41KSk7XG4gICAgICAgICAgICAgICAgICAgIEIgPSBNYXRoLnJvdW5kKCh5ICogTEVOU19NQUdOSUZJQ0FUSU9OKSAvIChaICsgMC41KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGFUcmFuc01hcFsoeSArIFIpICogTEVOU19ESUFNRVRFUiArICh4ICsgUildID0gKEIgKyBSKSAqIExFTlNfRElBTUVURVIgKyAoQSArIFIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGFUcmFuc01hcClcbiAgICB9XG4gICAgLy8gY29tcHV0ZSB0aGUgbGVuc1xuICAgIGNvbXB1dGVMZW5zKFgsIFkpIHtcbiAgICAgICAgLy8gY29weSB0aGUgaW1hZ2UgdG8gdGhlIGJhY2tidWZmZXJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMucGNCYWNrQnVmZmVyLmNvbnRleHQoKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnBjSW1hZ2UsIDAsIDApO1xuICAgICAgICAvLyBjb21wdXRlIHRoZSBsZW5zIGF0IHRoZSBzcG90XG4gICAgICAgIGxldCBYTCA9IFggLSAoTEVOU19ESUFNRVRFUiA+PiAyKTtcbiAgICAgICAgbGV0IFlUID0gWSAtIChMRU5TX0RJQU1FVEVSID4+IDIpO1xuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgY2FudmFzIHRoYXQgd2lsbCBob2xkIHRoZSBsZW5zXG4gICAgICAgIGxldCBpbWdEYXRhID0gY3R4LmdldEltYWdlRGF0YShYTCwgWVQsIExFTlNfRElBTUVURVIsIExFTlNfRElBTUVURVIpO1xuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgcGl4ZWxzIG9mIHRoZSBpbml0aWFsIGltYWdlXG4gICAgICAgIGxldCBkZXN0RGF0YSA9IG5ldyBJbWFnZURhdGEoTEVOU19ESUFNRVRFUiwgTEVOU19ESUFNRVRFUik7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgTEVOU19ESUFNRVRFUjsgeSsrKSB7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0geSAqIExFTlNfRElBTUVURVI7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IExFTlNfRElBTUVURVI7IHgrKykge1xuICAgICAgICAgICAgICAgIGxldCBUTUZPZmZzZXQgPSBvZmZzZXQgKyB4O1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucGFUcmFuc01hcFtUTUZPZmZzZXRdICogNDtcbiAgICAgICAgICAgICAgICBkZXN0RGF0YS5kYXRhW1RNRk9mZnNldCAqIDRdID0gaW1nRGF0YS5kYXRhW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICBkZXN0RGF0YS5kYXRhW1RNRk9mZnNldCAqIDQgKyAxXSA9IGltZ0RhdGEuZGF0YVt2YWx1ZSArIDFdO1xuICAgICAgICAgICAgICAgIGRlc3REYXRhLmRhdGFbVE1GT2Zmc2V0ICogNCArIDJdID0gaW1nRGF0YS5kYXRhW3ZhbHVlICsgMl07XG4gICAgICAgICAgICAgICAgZGVzdERhdGEuZGF0YVtUTUZPZmZzZXQgKiA0ICsgM10gPSBpbWdEYXRhLmRhdGFbdmFsdWUgKyAzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBhcHBseSB0aGUgdHJhbnNmb3JtYXRpb24gdG8gdGhlIGJhY2sgYnVmZmVyXG4gICAgICAgIGN0eC5wdXRJbWFnZURhdGEoZGVzdERhdGEsIFhMLCBZVCk7XG4gICAgfVxuICAgIC8vLS0tLSBbZW5kXSBwcml2YXRlIG1ldGhvZHNcbiAgICAvLy0tLS0gW2JlZ2luXSBwcm90ZWN0ZWQgbWV0aG9kc1xuICAgIC8vIHVwZGF0ZSB0aGUgYW5pbWF0aW9uXG4gICAgdXBkYXRlKCkge1xuICAgIH1cbiAgICAvLyByZW5kZXIgdGhlIGFuaW1hdGlvblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5wY0JhY2tCdWZmZXIuZmxpcCgpO1xuICAgIH1cbiAgICAvLyBtYWlubG9vcCBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIG1haW5Mb29wKHRpbWVzdGFtcCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgLy8gcnVuIHRoZSBhbmltYXRpb25cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMubWFpbkxvb3AoMCk7XG4gICAgfVxufVxuZXhwb3J0cy5MZW5zQW5pbSA9IExlbnNBbmltO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQGZpbGVcdG1haW4udHNcbiAqIEBhdXRob3JcdFNlYmFzdGllbiBMRUdSQU5EXG4gKiBAZW1haWxcdG9heGxleUBnbWFpbC5jb21cbiAqIEBkYXRlXHQyMDE4LTEwLTIxXG4gKlxuICogQGJyaWVmXHRNYWluIGVudHJ5IHBvaW50IGZvciB0aGUgTGVucyBlZmZlY3RcbiAqIEBoaXN0b3J5XG4gKlx0XHRcdDIwMTgtMTAtMjEgLSAxLjAuMCAtIFNMRVxuICpcdFx0XHRJbml0aWFsIFZlcnNpb25cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8tLS0tLS0gaW1wb3J0c1xuY29uc3QgbGVuc2FuaW1fMSA9IHJlcXVpcmUoXCIuL2xlbnNhbmltXCIpO1xuLy8tLS0tLS0gYmVnaW5cbi8vIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBsZW5zIG9iamVjdFxubGV0IGxlbnNPYmplY3QgPSBuZXcgbGVuc2FuaW1fMS5MZW5zQW5pbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKSk7XG4vLyBydW4gdGhlIGFwcGxpY2F0aW9uIG9uY2UgZXZlcnl0aGluZyBpcyBsb2FkZWRcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgbGVuc09iamVjdC5ydW4oKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9