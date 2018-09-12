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

//------ imports
import { SpriteAnim } from "./spriteanim"

//------ begin
let spriteanim:SpriteAnim = new SpriteAnim(<HTMLCanvasElement> document.getElementById("output"))

window.onload = () => {
    spriteanim.run()
}