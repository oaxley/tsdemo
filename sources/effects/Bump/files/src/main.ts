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
import { Bump } from "./bump"

//------ begin
// retrieve the canvas element
let output:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("output")

// create a new instance
let bump = new Bump(output)

// wait for the image to be loaded
window.onload = () => {
    bump.run()
}
