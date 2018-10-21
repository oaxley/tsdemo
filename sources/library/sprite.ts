/*
 * @file	sprite.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-06
 *
 * @brief	Sprite / Surface definition
 * @history
 *			2018-09-06 - 1.0.0 - SLE
 *			Initial Version
 */

//------ imports
import { Surface } from "./surface"
import { Color } from "./color"

//------ interfaces


//------ classes
export class Sprite extends Surface {
    //---- members

    //---- methods
    constructor(img:HTMLImageElement, transparency?:Color) {
        // create a canvas to hold the image
        let canvas:HTMLCanvasElement = document.createElement("canvas")
        canvas.width  = img.width
        canvas.height = img.height
        
        // copy the image on the canvas
        let ctx:CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d")
        ctx.drawImage(img, 0, 0)

        if( transparency !== undefined ) {
            let color = transparency.getRGBA()
            let imgData = ctx.getImageData(0, 0, img.width, img.height)

            for(let y = 0; y < img.height; y++) {
                let offset = y * img.width
                for(let x = 0; x < img.width; x++) {
                    let position = (offset + x) << 2
                    let r = imgData.data[position++]
                    let g = imgData.data[position++]
                    let b = imgData.data[position++]
                    
                    if( (r == color.r) && (g == color.g) && (b == color.b) ) {
                        imgData.data[position++] = 0
                    }
                }
            }

            ctx.putImageData(imgData, 0, 0)
        }
        

        // initialize the parent class
        super(canvas)
    }

    // draw the sprite on another surface
    public draw(x:number, y:number, target:Surface, mode?:string):void {
        let ctx:CanvasRenderingContext2D = <CanvasRenderingContext2D> target.context()
        ctx.globalCompositeOperation = ( mode !== undefined ) ? mode : 'source-over'
        ctx.drawImage(this.canvas(), x, y)
    }
}