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

//------ imports
import { Surface } from "./surface"

//------ classes
export class BackBuffer extends Surface {
    //---- members
    private pScreen:HTMLCanvasElement

    //---- methods
    constructor(source:HTMLCanvasElement) {
        // create a new canvas to hold the backbuffer
        let canvas = document.createElement("canvas")
        canvas.width  = source.width
        canvas.height = source.height

        // initialize the Surface parent class with the new canvas
        super(canvas)

        // keep track of the "screen"
        this.pScreen = source
    }

    // flip the back buffer to the "screen"
    public flip() {
        let ctx:CanvasRenderingContext2D = <CanvasRenderingContext2D> this.pScreen.getContext("2d")
        ctx.drawImage(this.canvas(), 0, 0)
    }
}