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

//------ imports
import { LensAnim } from "./lensanim"

//------ begin

// create a new instance of lens object
let lensObject:LensAnim = new LensAnim(<HTMLCanvasElement> document.getElementById("output"))

// run the application once everything is loaded
window.onload = () => {
    lensObject.run()
}