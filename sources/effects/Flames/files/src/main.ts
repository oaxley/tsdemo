/*
 * @file	main.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-08
 *
 * @brief	Main entry point for the Flames effect
 * @history
 *			2018-09-08 - 1.0.0 - SLE
 *			Initial Version
 */

//------ imports
import { Flames } from "./flames"

//------ begin
// retrieve the canvas element
let output = <HTMLCanvasElement> document.getElementById("output")

// new instance of the class
let flames = new Flames(output)

// handler to start/stop the animation
window.onclick = (event) => {
    flames.toggle()
}

// run the animation
flames.run()