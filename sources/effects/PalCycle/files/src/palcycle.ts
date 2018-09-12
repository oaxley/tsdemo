/*
 * @file	palcycle.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-10
 *
 * @brief	Palette Cycle in typescript
 * @history
 *			2018-09-10 - 1.0.0 - SLE
 *			Initial Version
 */

//------ imports
import { Animation } from "library/animation"
import { BackBuffer } from "library/backbuffer"

//------ globals
const MOOD_STEP_INCREMENT = 0.01

//------ interfaces

//------ classes
export class PalCycle extends Animation {
    //---- members
    private pcBackBuffer:BackBuffer
    private pnWidth:number
    private pnHeight:number
    private paImage:number[] = []
    private pnMood:number = 0.0

    //---- [begin] private methods
    // load the image in the buffer
    private loadImage() {
        let img:HTMLImageElement = new Image()
        img.onload = () => {
            this.pcBackBuffer.context().drawImage(img, 0, 0)
            let imgData = this.pcBackBuffer.data()
            let position = 0
            for(let i = 0; i < imgData.data.length; i+=4) {
                let value = (imgData.data[i] + imgData.data[i+1] + imgData.data[i+2]) / 3
                value = (value > 255) ? 255 : Math.round(value)
                this.paImage[position++] = value
            }
            this.pcBackBuffer.clear()
        }
        img.src = "/images/background.jpg"
    }

    // print the mood value on the page
    private printMoodValue():void {
        let value:number = Math.trunc( this.pnMood * 100)
        // *** use the ! coercion operator to remove 'object is possibly null' warning
        document.getElementById("mood")!.innerHTML = String(value)
    }
    //---- [end] private methods

    //---- [begin] protected methods
    // update
    protected update():void {
        // the 3 main colors
        let gray:number = 1
        let red:number = 0
        let blue:number = 0

        // compute the percentage of each color depending on the mood level
        if( this.pnMood == 0 ) {
            [ gray, red, blue ] = [ 1.0, 0.0, 0.0]
        } else {
            if( this.pnMood > 0 ) {
                gray = 1 - this.pnMood
                gray = (gray < 0) ? 0 : gray
                red = 1 - gray
            } else {
                gray = this.pnMood + 1
                gray = (gray < 0) ? 0 : gray
                blue = 1 - gray
            }
        }

        // redraw the picture with the right proportions 
        let num_colors = 256 - Math.round(gray * 255);
        let imgData:ImageData = this.pcBackBuffer.data()
        for(let y = 0; y < this.pnHeight; y++) {
            let offset = y * this.pnWidth
            for(let x = 0; x < this.pnWidth; x++) {
                let value = this.paImage[offset + x]
                let position = (offset + x) << 2

                if( value < num_colors ) {
                    if( red > 0 ) {
                        // red 
                        imgData.data[position++] = value
                        imgData.data[position++] = 0
                        imgData.data[position++] = 0
                        imgData.data[position++] = 255
                    } else {
                        // blue
                        imgData.data[position++] = 0
                        imgData.data[position++] = 0
                        imgData.data[position++] = value
                        imgData.data[position++] = 255
                    }
                } else {
                    imgData.data[position++] = value
                    imgData.data[position++] = value
                    imgData.data[position++] = value
                    imgData.data[position++] = 255
                }
            }
        }
        this.pcBackBuffer.data(imgData)
    }

    // render
    protected render():void {
        this.pcBackBuffer.flip()
    }  

    // mainloop
    protected mainLoop(timestamp:number):void {
        this.update()
        this.render()
        requestAnimationFrame(this.mainLoop.bind(this))
    }
    //---- [end] protected methods

    //---- [begin] public methods
    // constructor
    constructor(output:HTMLCanvasElement) {
        super()
    
        this.pcBackBuffer = new BackBuffer(output)
        this.pnWidth  = output.width
        this.pnHeight = output.height
        
        // load the image
        this.loadImage()

        // print the current mood value
        this.printMoodValue()
    }

    // run
    public run():void {
        this.mainLoop(0)
    }

    // increase the mood indicator
    public increaseMood():void {
        this.pnMood += MOOD_STEP_INCREMENT
        this.pnMood = ( this.pnMood > 1.0) ? 1.0 : this.pnMood
        this.printMoodValue()
    }

    // decrease the mood indicator
    public decreaseMood():void {
        this.pnMood -= MOOD_STEP_INCREMENT
        this.pnMood = ( this.pnMood < -1.0) ? -1.0 : this.pnMood
        this.printMoodValue()
    }

    // reset the mood value
    public resetMood():void {
        this.pnMood = 0.0
        this.printMoodValue()
    }
    //---- [end] public methods
}