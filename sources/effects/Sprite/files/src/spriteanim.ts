/*
 * @file	spriteanim.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-11
 *
 * @brief	Sprite Animation
 * @history
 *			2018-09-11 - 1.0.0 - SLE
 *			Initial Version
 */

//------ imports
import { Animation } from "library/animation"
import { Sprite } from "library/sprite"
import { BackBuffer } from "library/backbuffer"
import { Color, COLOR_MODEL } from "library/color"

//------ globals

//------ interfaces

//------ classes
export class SpriteAnim extends Animation {
    //---- members
    private pcSprite:Sprite|null = null
    private pcBackBuffer:BackBuffer
    
    //---- [begin] private methods
    private loadImage():void {
        let img = new Image()
        img.onload = () => {
            this.pcSprite = new Sprite(img, new Color(COLOR_MODEL.RGB, 44, 156, 0) )
        }
        img.src = "/images/mad_scientist.png"
    }
    //---- [end] private methods
    
    //---- [begin] protected methods
    // update the animation
    protected update():void {
        let ctx = this.pcBackBuffer.context()
        
        for(let i = 0; i < 50; i++) {
            let x1 = Math.random() * 640
            let y1 = Math.random() * 400
            let x2 = Math.random() * 640
            let y2 = Math.random() * 400
            
            let r = Math.random() * 255
            let g = Math.random() * 255
            let b = Math.random() * 255
            
            let color:Color = new Color(COLOR_MODEL.RGB, r, g, b)

            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.strokeStyle = color.CSSHexa()
            ctx.stroke()
        }
        this.pcSprite!.draw(319, 100, this.pcBackBuffer)
    }

    // render the animation
    protected render():void {
        this.pcBackBuffer.flip()
        this.pcBackBuffer.clear()
    }

    // mainloop for the requestAnimationFrame
    protected mainLoop(timestamp:number):void {
        this.update()
        this.render()
        requestAnimationFrame(this.mainLoop.bind(this))
    }
    //---- [end] protected methods

    //---- [begin] public methods
    constructor(output:HTMLCanvasElement) {
        super()

        this.pcBackBuffer = new BackBuffer(output)

        // load the sprite
        this.loadImage()
    }

    // run the animation
    public run():void {
        this.mainLoop(0)
    }

    //---- [end] public methods

}