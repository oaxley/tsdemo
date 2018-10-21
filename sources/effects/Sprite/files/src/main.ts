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

// set the keyboard handlers
window.addEventListener("keypress", (event) => {
    switch(event.charCode) {
        case 117:   // 'u'
            spriteanim.addParticule()
            break
        case 110:   // 'n'
            spriteanim.delParticule()
            break
        case 43:    // '+'
            spriteanim.incMood()
            break;
        case 45:    // '-'
            spriteanim.decMood()
            break
    }
})

window.onload = () => {
    spriteanim.run()
}