/*
 * @file	lensanim.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-10-21
 *
 * @brief	Sprite Animation
 * @history
 *			2018-10-21 - 1.0.0 - SLE
 *			Initial Version
 */

//------ imports
import { Animation } from "library/animation"
import { BackBuffer } from "library/backbuffer"

//------ globals
const LENS_MAGNIFICATION = 10
const LENS_DIAMETER = 200

//------ interfaces

//------ classes
export class LensAnim extends Animation {
    //---- members
    private pcBackBuffer:BackBuffer
    private pnWidth:number
    private pnHeight:number
    private pcImage:HTMLImageElement
    private paTransMap:number[] = []

    //---- [begin] private methods
    // set the mouse handler
    private setHandler(canvas:HTMLCanvasElement):void {
        var rect = canvas.getBoundingClientRect();
        canvas.onmousemove = (event) => {
            // compute the position of the move, relative to the canvas
            let X = event.clientX - rect.left
            let Y = event.clientY - rect.top

            // compute the new lens position
            this.computeLens(X, Y)

            // render the animation
            this.render()
        }
    }

    // compute the transformation map
    private transMap():void {
        let R:number = LENS_DIAMETER >> 2
        let R2:number = R*R
        let S:number = Math.sqrt( R2 - LENS_MAGNIFICATION*LENS_MAGNIFICATION )
        let S2:number = S*S

        // console.log(`R=${R} | S=${S} | S2=${S2}`)

        for(let y = -R; y < (-R + LENS_DIAMETER); y++) {
            let Y2:number = y*y
            for(let x = -R; x < (-R + LENS_DIAMETER); x++) {
                let X2:number = x*x
                let A:number = x
                let B:number = y
            
                if( (X2 + Y2) < S2) {
                    let Z:number = Math.sqrt(R2 - X2 - Y2)
                    A = Math.round( (x * LENS_MAGNIFICATION) / (Z + 0.5) )
                    B = Math.round( (y * LENS_MAGNIFICATION) / (Z + 0.5) )
                }

                this.paTransMap[(y+R)*LENS_DIAMETER + (x+R)] = (B+R)*LENS_DIAMETER + (A+R)              
            }
        }
        // console.log(this.paTransMap)
    }

    // compute the lens
    private computeLens(X:number, Y:number):void {
        // copy the image to the backbuffer
        let ctx = this.pcBackBuffer.context()
        ctx.drawImage(this.pcImage, 0, 0)
        
        // compute the lens at the spot
        let XL = X - (LENS_DIAMETER >> 2)
        let YT = Y - (LENS_DIAMETER >> 2)

        // create a new canvas that will hold the lens
        let imgData:ImageData = ctx.getImageData(XL, YT, LENS_DIAMETER, LENS_DIAMETER)
        
        // retrieve the pixels of the initial image
        let destData:ImageData = new ImageData(LENS_DIAMETER, LENS_DIAMETER)

        for(let y:number = 0; y < LENS_DIAMETER; y++) {
            let offset:number = y * LENS_DIAMETER
            for(let x = 0; x < LENS_DIAMETER; x++) {
                let TMFOffset:number = offset + x
                let value:number = this.paTransMap[TMFOffset] * 4
                destData.data[TMFOffset*4] = imgData.data[value]
                destData.data[TMFOffset*4+1] = imgData.data[value+1]
                destData.data[TMFOffset*4+2] = imgData.data[value+2]
                destData.data[TMFOffset*4+3] = imgData.data[value+3]
            }
        }

        // apply the transformation to the back buffer
        ctx.putImageData(destData, XL, YT)
    }

    //---- [end] private methods

    //---- [begin] protected methods
    // update the animation
    protected update():void {
    }

    // render the animation
    protected render():void {
        this.pcBackBuffer.flip()
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

        // setup the back buffer
        this.pcBackBuffer = new BackBuffer(output)
        this.pnWidth = output.width
        this.pnHeight = output.height

        // create the transformation map
        this.transMap()

        // load the image
        this.pcImage = new Image()
        this.pcImage.onload = () => {
            // copy the image to the backbuffer
            let ctx = this.pcBackBuffer.context()
            ctx.drawImage(this.pcImage, 0, 0)
        }
        this.pcImage.src = '/images/lens-back.jpg'


        // set the mouse handler
        this.setHandler(output)
    }

    // run the animation
    public run():void {
        this.mainLoop(0)
    }
    //---- [end] public methods
}