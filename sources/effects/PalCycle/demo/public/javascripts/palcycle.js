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
 * @date	2018-09-10
 *
 * @brief	Main entry point for the Palette Cycle effect
 * @history
 *			2018-09-10 - 1.0.0 - SLE
 *			Initial Version
 */
Object.defineProperty(exports, "__esModule", { value: true });
//------ imports
const palcycle_1 = __webpack_require__(/*! ./palcycle */ "./src/palcycle.ts");
//------ begin
// create a new instance of the object
let palcycle = new palcycle_1.PalCycle(document.getElementById("output"));
// set the keyboard handlers
window.addEventListener("keypress", (event) => {
    switch (event.keyCode) {
        case 117:
            palcycle.increaseMood();
            break;
        case 110:
            palcycle.decreaseMood();
            break;
        case 114:
            palcycle.resetMood();
            break;
    }
});
// run the application once everything is loaded
window.onload = () => {
    palcycle.run();
};


/***/ }),

/***/ "./src/palcycle.ts":
/*!*************************!*\
  !*** ./src/palcycle.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @file	palcycle.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-10
 *
 * @brief	Palette Cycle in typescript
 * @history
 *			2018-09-10 - 1.0.0 - SLE
 *			Initial Version
 */
Object.defineProperty(exports, "__esModule", { value: true });
//------ imports
const animation_1 = __webpack_require__(/*! library/animation */ "../../../library/animation.ts");
const backbuffer_1 = __webpack_require__(/*! library/backbuffer */ "../../../library/backbuffer.ts");
//------ globals
const MOOD_STEP_INCREMENT = 0.01;
//------ interfaces
//------ classes
class PalCycle extends animation_1.Animation {
    //---- [end] protected methods
    //---- [begin] public methods
    // constructor
    constructor(output) {
        super();
        this.paImage = [];
        this.pnMood = 0.0;
        this.pcBackBuffer = new backbuffer_1.BackBuffer(output);
        this.pnWidth = output.width;
        this.pnHeight = output.height;
        // load the image
        this.loadImage();
        // print the current mood value
        this.printMoodValue();
    }
    //---- [begin] private methods
    // load the image in the buffer
    loadImage() {
        let img = new Image();
        img.onload = () => {
            this.pcBackBuffer.context().drawImage(img, 0, 0);
            let imgData = this.pcBackBuffer.data();
            let position = 0;
            for (let i = 0; i < imgData.data.length; i += 4) {
                let value = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
                value = (value > 255) ? 255 : Math.round(value);
                this.paImage[position++] = value;
            }
            this.pcBackBuffer.clear();
        };
        img.src = "/images/background.jpg";
    }
    // print the mood value on the page
    printMoodValue() {
        let value = Math.trunc(this.pnMood * 100);
        // *** use the ! coercion operator to remove 'object is possibly null' warning
        document.getElementById("mood").innerHTML = String(value);
    }
    //---- [end] private methods
    //---- [begin] protected methods
    // update
    update() {
        // the 3 main colors
        let gray = 1;
        let red = 0;
        let blue = 0;
        // compute the percentage of each color depending on the mood level
        if (this.pnMood == 0) {
            [gray, red, blue] = [1.0, 0.0, 0.0];
        }
        else {
            if (this.pnMood > 0) {
                gray = 1 - this.pnMood;
                gray = (gray < 0) ? 0 : gray;
                red = 1 - gray;
            }
            else {
                gray = this.pnMood + 1;
                gray = (gray < 0) ? 0 : gray;
                blue = 1 - gray;
            }
        }
        // redraw the picture with the right proportions 
        let num_colors = 256 - Math.round(gray * 255);
        let imgData = this.pcBackBuffer.data();
        for (let y = 0; y < this.pnHeight; y++) {
            let offset = y * this.pnWidth;
            for (let x = 0; x < this.pnWidth; x++) {
                let value = this.paImage[offset + x];
                let position = (offset + x) << 2;
                if (value < num_colors) {
                    if (red > 0) {
                        // red 
                        imgData.data[position++] = value;
                        imgData.data[position++] = 0;
                        imgData.data[position++] = 0;
                        imgData.data[position++] = 255;
                    }
                    else {
                        // blue
                        imgData.data[position++] = 0;
                        imgData.data[position++] = 0;
                        imgData.data[position++] = value;
                        imgData.data[position++] = 255;
                    }
                }
                else {
                    imgData.data[position++] = value;
                    imgData.data[position++] = value;
                    imgData.data[position++] = value;
                    imgData.data[position++] = 255;
                }
            }
        }
        this.pcBackBuffer.data(imgData);
    }
    // render
    render() {
        this.pcBackBuffer.flip();
    }
    // mainloop
    mainLoop(timestamp) {
        this.update();
        this.render();
        requestAnimationFrame(this.mainLoop.bind(this));
    }
    // run
    run() {
        this.mainLoop(0);
    }
    // increase the mood indicator
    increaseMood() {
        this.pnMood += MOOD_STEP_INCREMENT;
        this.pnMood = (this.pnMood > 1.0) ? 1.0 : this.pnMood;
        this.printMoodValue();
    }
    // decrease the mood indicator
    decreaseMood() {
        this.pnMood -= MOOD_STEP_INCREMENT;
        this.pnMood = (this.pnMood < -1.0) ? -1.0 : this.pnMood;
        this.printMoodValue();
    }
    // reset the mood value
    resetMood() {
        this.pnMood = 0.0;
        this.printMoodValue();
    }
}
exports.PalCycle = PalCycle;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zZWJhc3RpZW4vU291cmNlcy8wMF9TYW5kYm94L2phdmFzY3JpcHQvZGVtb3NjZW5lL3NvdXJjZXMvbGlicmFyeS9hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zZWJhc3RpZW4vU291cmNlcy8wMF9TYW5kYm94L2phdmFzY3JpcHQvZGVtb3NjZW5lL3NvdXJjZXMvbGlicmFyeS9iYWNrYnVmZmVyLnRzIiwid2VicGFjazovLy8vVXNlcnMvc2ViYXN0aWVuL1NvdXJjZXMvMDBfU2FuZGJveC9qYXZhc2NyaXB0L2RlbW9zY2VuZS9zb3VyY2VzL2xpYnJhcnkvc3VyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFsY3ljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwYWxjeWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gKiBAZmlsZVx0YW5pbWF0aW9uLnRzXG4gKiBAYXV0aG9yXHRTZWJhc3RpZW4gTEVHUkFORFxuICogQGVtYWlsXHRvYXhsZXlAZ21haWwuY29tXG4gKiBAZGF0ZVx0MjAxOC0wOS0wNlxuICpcbiAqIEBicmllZlx0TWFpbiBBbmltYXRpb24gY2xhc3NcbiAqIEBoaXN0b3J5XG4gKlx0XHRcdDIwMTgtMDktMDYgLSAxLjAuMCAtIFNMRVxuICpcdFx0XHRJbml0aWFsIFZlcnNpb25cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8tLS0tLS0gaW1wb3J0c1xuLy8tLS0tLS0gY2xhc3Nlc1xuY2xhc3MgQW5pbWF0aW9uIHtcbiAgICAvLy0tLS0gbWV0aG9kc1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLy0tLS0gbWVtYmVyc1xuICAgICAgICB0aGlzLmlzQW5pbWF0ZWRfID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHN0YXJ0IHRoZSBhbmltYXRpb25cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkXyA9IHRydWU7XG4gICAgfVxuICAgIC8vIHN0b3AgdGhlIGFuaW1hdGlvblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuaXNBbmltYXRlZF8gPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gdG9nZ2xlIGJldHdlZW4gc3RhcnQgLyBzdG9wXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmlzQW5pbWF0ZWRfID0gIXRoaXMuaXNBbmltYXRlZF87XG4gICAgfVxuICAgIC8vIHJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSBmbGFnXG4gICAgaXNBbmltYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBbmltYXRlZF87XG4gICAgfVxufVxuZXhwb3J0cy5BbmltYXRpb24gPSBBbmltYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gKiBAZmlsZVx0YmFja2J1ZmZlci50c1xuICogQGF1dGhvclx0U2ViYXN0aWVuIExFR1JBTkRcbiAqIEBlbWFpbFx0b2F4bGV5QGdtYWlsLmNvbVxuICogQGRhdGVcdDIwMTgtMDktMDZcbiAqXG4gKiBAYnJpZWZcdEJhY2sgQnVmZmVyIC8gU3VyZmFjZSBkZWZpbml0aW9uXG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTA2IC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLS0tLS0tIGltcG9ydHNcbmNvbnN0IHN1cmZhY2VfMSA9IHJlcXVpcmUoXCIuL3N1cmZhY2VcIik7XG4vLy0tLS0tLSBjbGFzc2VzXG5jbGFzcyBCYWNrQnVmZmVyIGV4dGVuZHMgc3VyZmFjZV8xLlN1cmZhY2Uge1xuICAgIC8vLS0tLSBtZXRob2RzXG4gICAgY29uc3RydWN0b3Ioc291cmNlKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBjYW52YXMgdG8gaG9sZCB0aGUgYmFja2J1ZmZlclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gc291cmNlLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc291cmNlLmhlaWdodDtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgU3VyZmFjZSBwYXJlbnQgY2xhc3Mgd2l0aCB0aGUgbmV3IGNhbnZhc1xuICAgICAgICBzdXBlcihjYW52YXMpO1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBcInNjcmVlblwiXG4gICAgICAgIHRoaXMucFNjcmVlbiA9IHNvdXJjZTtcbiAgICB9XG4gICAgLy8gZmxpcCB0aGUgYmFjayBidWZmZXIgdG8gdGhlIFwic2NyZWVuXCJcbiAgICBmbGlwKCkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5wU2NyZWVuLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNhbnZhcygpLCAwLCAwKTtcbiAgICB9XG59XG5leHBvcnRzLkJhY2tCdWZmZXIgPSBCYWNrQnVmZmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQGZpbGVcdHN1cmZhY2UudHNcbiAqIEBhdXRob3JcdFNlYmFzdGllbiBMRUdSQU5EXG4gKiBAZW1haWxcdG9heGxleUBnbWFpbC5jb21cbiAqIEBkYXRlXHQyMDE4LTA5LTA1XG4gKlxuICogQGJyaWVmXHRTdXJmYWNlIGRlZmluaXRpb25cbiAqIEBoaXN0b3J5XG4gKlx0XHRcdDIwMTgtMDktMDUgLSAxLjAuMCAtIFNMRVxuICpcdFx0XHRJbml0aWFsIFZlcnNpb25cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8tLS0tLS0gY2xhc3Nlc1xuY2xhc3MgU3VyZmFjZSB7XG4gICAgLy8tLS0tIG1ldGhvZHNcbiAgICAvLyBjb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhc18gPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY29udGV4dF8gPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLndpZHRoXyA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHRfID0gY2FudmFzLmhlaWdodDtcbiAgICB9XG4gICAgLy8gcmV0dXJuIHRoZSBjb250ZXh0IG9mIHRoZSBjYW52YXNcbiAgICBjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0XztcbiAgICB9XG4gICAgLy8gcmV0dXJuIHRoZSBjYW52YXMgaXRzZWxmXG4gICAgY2FudmFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNfO1xuICAgIH1cbiAgICAvLyByZXR1cm4gdGhlIGRpbWVuc2lvbiBvZiB0aGUgY2FudmFzXG4gICAgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoXyxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRfXG4gICAgICAgIH07XG4gICAgfVxuICAgIGRhdGEoeCkge1xuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoXywgdGhpcy5oZWlnaHRfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8ucHV0SW1hZ2VEYXRhKHgsIDAsIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNsZWFyIHRoZSBzdXJmYWNlXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dF8uY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGhfLCB0aGlzLmhlaWdodF8pO1xuICAgIH1cbn1cbmV4cG9ydHMuU3VyZmFjZSA9IFN1cmZhY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gKiBAZmlsZVx0bWFpbi50c1xuICogQGF1dGhvclx0U2ViYXN0aWVuIExFR1JBTkRcbiAqIEBlbWFpbFx0b2F4bGV5QGdtYWlsLmNvbVxuICogQGRhdGVcdDIwMTgtMDktMTBcbiAqXG4gKiBAYnJpZWZcdE1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSBQYWxldHRlIEN5Y2xlIGVmZmVjdFxuICogQGhpc3RvcnlcbiAqXHRcdFx0MjAxOC0wOS0xMCAtIDEuMC4wIC0gU0xFXG4gKlx0XHRcdEluaXRpYWwgVmVyc2lvblxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLy0tLS0tLSBpbXBvcnRzXG5jb25zdCBwYWxjeWNsZV8xID0gcmVxdWlyZShcIi4vcGFsY3ljbGVcIik7XG4vLy0tLS0tLSBiZWdpblxuLy8gY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBvYmplY3RcbmxldCBwYWxjeWNsZSA9IG5ldyBwYWxjeWNsZV8xLlBhbEN5Y2xlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpKTtcbi8vIHNldCB0aGUga2V5Ym9hcmQgaGFuZGxlcnNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2ZW50KSA9PiB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMTE3OlxuICAgICAgICAgICAgcGFsY3ljbGUuaW5jcmVhc2VNb29kKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMTA6XG4gICAgICAgICAgICBwYWxjeWNsZS5kZWNyZWFzZU1vb2QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExNDpcbiAgICAgICAgICAgIHBhbGN5Y2xlLnJlc2V0TW9vZCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG4vLyBydW4gdGhlIGFwcGxpY2F0aW9uIG9uY2UgZXZlcnl0aGluZyBpcyBsb2FkZWRcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgcGFsY3ljbGUucnVuKCk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICogQGZpbGVcdHBhbGN5Y2xlLnRzXG4gKiBAYXV0aG9yXHRTZWJhc3RpZW4gTEVHUkFORFxuICogQGVtYWlsXHRvYXhsZXlAZ21haWwuY29tXG4gKiBAZGF0ZVx0MjAxOC0wOS0xMFxuICpcbiAqIEBicmllZlx0UGFsZXR0ZSBDeWNsZSBpbiB0eXBlc2NyaXB0XG4gKiBAaGlzdG9yeVxuICpcdFx0XHQyMDE4LTA5LTEwIC0gMS4wLjAgLSBTTEVcbiAqXHRcdFx0SW5pdGlhbCBWZXJzaW9uXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vLS0tLS0tIGltcG9ydHNcbmNvbnN0IGFuaW1hdGlvbl8xID0gcmVxdWlyZShcImxpYnJhcnkvYW5pbWF0aW9uXCIpO1xuY29uc3QgYmFja2J1ZmZlcl8xID0gcmVxdWlyZShcImxpYnJhcnkvYmFja2J1ZmZlclwiKTtcbi8vLS0tLS0tIGdsb2JhbHNcbmNvbnN0IE1PT0RfU1RFUF9JTkNSRU1FTlQgPSAwLjAxO1xuLy8tLS0tLS0gaW50ZXJmYWNlc1xuLy8tLS0tLS0gY2xhc3Nlc1xuY2xhc3MgUGFsQ3ljbGUgZXh0ZW5kcyBhbmltYXRpb25fMS5BbmltYXRpb24ge1xuICAgIC8vLS0tLSBbZW5kXSBwcm90ZWN0ZWQgbWV0aG9kc1xuICAgIC8vLS0tLSBbYmVnaW5dIHB1YmxpYyBtZXRob2RzXG4gICAgLy8gY29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihvdXRwdXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wYUltYWdlID0gW107XG4gICAgICAgIHRoaXMucG5Nb29kID0gMC4wO1xuICAgICAgICB0aGlzLnBjQmFja0J1ZmZlciA9IG5ldyBiYWNrYnVmZmVyXzEuQmFja0J1ZmZlcihvdXRwdXQpO1xuICAgICAgICB0aGlzLnBuV2lkdGggPSBvdXRwdXQud2lkdGg7XG4gICAgICAgIHRoaXMucG5IZWlnaHQgPSBvdXRwdXQuaGVpZ2h0O1xuICAgICAgICAvLyBsb2FkIHRoZSBpbWFnZVxuICAgICAgICB0aGlzLmxvYWRJbWFnZSgpO1xuICAgICAgICAvLyBwcmludCB0aGUgY3VycmVudCBtb29kIHZhbHVlXG4gICAgICAgIHRoaXMucHJpbnRNb29kVmFsdWUoKTtcbiAgICB9XG4gICAgLy8tLS0tIFtiZWdpbl0gcHJpdmF0ZSBtZXRob2RzXG4gICAgLy8gbG9hZCB0aGUgaW1hZ2UgaW4gdGhlIGJ1ZmZlclxuICAgIGxvYWRJbWFnZSgpIHtcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wY0JhY2tCdWZmZXIuY29udGV4dCgpLmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgbGV0IGltZ0RhdGEgPSB0aGlzLnBjQmFja0J1ZmZlci5kYXRhKCk7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAoaW1nRGF0YS5kYXRhW2ldICsgaW1nRGF0YS5kYXRhW2kgKyAxXSArIGltZ0RhdGEuZGF0YVtpICsgMl0pIC8gMztcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSA+IDI1NSkgPyAyNTUgOiBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhSW1hZ2VbcG9zaXRpb24rK10gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGNCYWNrQnVmZmVyLmNsZWFyKCk7XG4gICAgICAgIH07XG4gICAgICAgIGltZy5zcmMgPSBcIi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIjtcbiAgICB9XG4gICAgLy8gcHJpbnQgdGhlIG1vb2QgdmFsdWUgb24gdGhlIHBhZ2VcbiAgICBwcmludE1vb2RWYWx1ZSgpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gTWF0aC50cnVuYyh0aGlzLnBuTW9vZCAqIDEwMCk7XG4gICAgICAgIC8vICoqKiB1c2UgdGhlICEgY29lcmNpb24gb3BlcmF0b3IgdG8gcmVtb3ZlICdvYmplY3QgaXMgcG9zc2libHkgbnVsbCcgd2FybmluZ1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vb2RcIikuaW5uZXJIVE1MID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gICAgLy8tLS0tIFtlbmRdIHByaXZhdGUgbWV0aG9kc1xuICAgIC8vLS0tLSBbYmVnaW5dIHByb3RlY3RlZCBtZXRob2RzXG4gICAgLy8gdXBkYXRlXG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvLyB0aGUgMyBtYWluIGNvbG9yc1xuICAgICAgICBsZXQgZ3JheSA9IDE7XG4gICAgICAgIGxldCByZWQgPSAwO1xuICAgICAgICBsZXQgYmx1ZSA9IDA7XG4gICAgICAgIC8vIGNvbXB1dGUgdGhlIHBlcmNlbnRhZ2Ugb2YgZWFjaCBjb2xvciBkZXBlbmRpbmcgb24gdGhlIG1vb2QgbGV2ZWxcbiAgICAgICAgaWYgKHRoaXMucG5Nb29kID09IDApIHtcbiAgICAgICAgICAgIFtncmF5LCByZWQsIGJsdWVdID0gWzEuMCwgMC4wLCAwLjBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucG5Nb29kID4gMCkge1xuICAgICAgICAgICAgICAgIGdyYXkgPSAxIC0gdGhpcy5wbk1vb2Q7XG4gICAgICAgICAgICAgICAgZ3JheSA9IChncmF5IDwgMCkgPyAwIDogZ3JheTtcbiAgICAgICAgICAgICAgICByZWQgPSAxIC0gZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyYXkgPSB0aGlzLnBuTW9vZCArIDE7XG4gICAgICAgICAgICAgICAgZ3JheSA9IChncmF5IDwgMCkgPyAwIDogZ3JheTtcbiAgICAgICAgICAgICAgICBibHVlID0gMSAtIGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVkcmF3IHRoZSBwaWN0dXJlIHdpdGggdGhlIHJpZ2h0IHByb3BvcnRpb25zIFxuICAgICAgICBsZXQgbnVtX2NvbG9ycyA9IDI1NiAtIE1hdGgucm91bmQoZ3JheSAqIDI1NSk7XG4gICAgICAgIGxldCBpbWdEYXRhID0gdGhpcy5wY0JhY2tCdWZmZXIuZGF0YSgpO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucG5IZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHkgKiB0aGlzLnBuV2lkdGg7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMucG5XaWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5wYUltYWdlW29mZnNldCArIHhdO1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IChvZmZzZXQgKyB4KSA8PCAyO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8IG51bV9jb2xvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0RhdGEuZGF0YVtwb3NpdGlvbisrXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nRGF0YS5kYXRhW3Bvc2l0aW9uKytdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0RhdGEuZGF0YVtwb3NpdGlvbisrXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdEYXRhLmRhdGFbcG9zaXRpb24rK10gPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBibHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdEYXRhLmRhdGFbcG9zaXRpb24rK10gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nRGF0YS5kYXRhW3Bvc2l0aW9uKytdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0RhdGEuZGF0YVtwb3NpdGlvbisrXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nRGF0YS5kYXRhW3Bvc2l0aW9uKytdID0gMjU1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWdEYXRhLmRhdGFbcG9zaXRpb24rK10gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaW1nRGF0YS5kYXRhW3Bvc2l0aW9uKytdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGltZ0RhdGEuZGF0YVtwb3NpdGlvbisrXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpbWdEYXRhLmRhdGFbcG9zaXRpb24rK10gPSAyNTU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGNCYWNrQnVmZmVyLmRhdGEoaW1nRGF0YSk7XG4gICAgfVxuICAgIC8vIHJlbmRlclxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5wY0JhY2tCdWZmZXIuZmxpcCgpO1xuICAgIH1cbiAgICAvLyBtYWlubG9vcFxuICAgIG1haW5Mb29wKHRpbWVzdGFtcCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgLy8gcnVuXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLm1haW5Mb29wKDApO1xuICAgIH1cbiAgICAvLyBpbmNyZWFzZSB0aGUgbW9vZCBpbmRpY2F0b3JcbiAgICBpbmNyZWFzZU1vb2QoKSB7XG4gICAgICAgIHRoaXMucG5Nb29kICs9IE1PT0RfU1RFUF9JTkNSRU1FTlQ7XG4gICAgICAgIHRoaXMucG5Nb29kID0gKHRoaXMucG5Nb29kID4gMS4wKSA/IDEuMCA6IHRoaXMucG5Nb29kO1xuICAgICAgICB0aGlzLnByaW50TW9vZFZhbHVlKCk7XG4gICAgfVxuICAgIC8vIGRlY3JlYXNlIHRoZSBtb29kIGluZGljYXRvclxuICAgIGRlY3JlYXNlTW9vZCgpIHtcbiAgICAgICAgdGhpcy5wbk1vb2QgLT0gTU9PRF9TVEVQX0lOQ1JFTUVOVDtcbiAgICAgICAgdGhpcy5wbk1vb2QgPSAodGhpcy5wbk1vb2QgPCAtMS4wKSA/IC0xLjAgOiB0aGlzLnBuTW9vZDtcbiAgICAgICAgdGhpcy5wcmludE1vb2RWYWx1ZSgpO1xuICAgIH1cbiAgICAvLyByZXNldCB0aGUgbW9vZCB2YWx1ZVxuICAgIHJlc2V0TW9vZCgpIHtcbiAgICAgICAgdGhpcy5wbk1vb2QgPSAwLjA7XG4gICAgICAgIHRoaXMucHJpbnRNb29kVmFsdWUoKTtcbiAgICB9XG59XG5leHBvcnRzLlBhbEN5Y2xlID0gUGFsQ3ljbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9