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

//------ imports
import { PalCycle } from "./palcycle"

//------ begin

// create a new instance of the object
let palcycle:PalCycle = new PalCycle(<HTMLCanvasElement> document.getElementById("output"))

// set the keyboard handlers
window.addEventListener("keypress", (event) => {
    switch(event.keyCode) {
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
})

// run the application once everything is loaded
window.onload = () => {
    palcycle.run()
}
