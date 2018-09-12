/*
 * @file	flames.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-08
 *
 * @brief	Flames Effect in typescript
 * @history
 *			2018-09-08 - 1.0.0 - SLE
 *			Initial Version
 */

//------ imports
import { Animation } from "library/animation"
import { Color, COLOR_MODEL } from "library/color"
import { Palette } from "library/palette"
import { BackBuffer } from "library/backbuffer"

//------ globals
const WHITE_VALUE_PERCENTAGE = 0.4
const WHITE_VALUE_INDEX = 255
const BLACK_VALUE_INDEX = 0

//------ classes
export class Flames extends Animation {
    //---- members
    private pcBackBuffer:BackBuffer
    private pcPalette:Palette
    private pnWidth:number
    private pnHeight:number
    private paFlames:number[]


    //---- [begin] private methods
    // generate the flames at the bottom
    private generate():void {
        if( !this.isAnimated() )
            return
    
        for(let y = this.pnHeight - 2; y < this.pnHeight; y++) {
            let offset = y * this.pnWidth
            for(let x = 0; x < this.pnWidth; x+=2) {
                let color = BLACK_VALUE_INDEX
                
                let value = Math.random()
                if( value > WHITE_VALUE_PERCENTAGE ) {
                    color = WHITE_VALUE_INDEX
                }

                this.paFlames[offset + x] = color
                this.paFlames[offset + (x+1)] = color
            }
        }
    }
    //---- [end] private methods

    //---- [begin] protected methods
    // update
    protected update():void {
        if( !this.isAnimated() )
            return
        
        for(let y = 1; y < this.pnHeight - 1; y++) {
            let offset = y * this.pnWidth
            for(let x = 1; x < this.pnWidth - 1; x++) {
                let value = 0
                value = value + this.paFlames[offset - this.pnWidth + x ]
                value = value + this.paFlames[offset + x - 1 ]
                value = value + this.paFlames[offset + x + 1 ]
                value = value + this.paFlames[offset + this.pnWidth + x ]

                // reduce the flames
                value -= 5;
                value = ( value < 0 ) ? 0 : value

                // store the new value one line above
                this.paFlames[offset - this.pnWidth + x] = value >> 2
            }
        }
    }

    // render
    protected render():void {
        if ( !this.isAnimated() )
            return
        
        // retrieve the backbuffer data        
        let img_data:ImageData = this.pcBackBuffer.data()

        // copy the flames to the backbuffer
        for(let y = 0; y < this.pnHeight; y++) {
            let offset = y * this.pnWidth
            for(let x = 0; x < this.pnWidth; x++) {
                // retrieve the color index
                let index = this.paFlames[offset + x]
                let color = this.pcPalette.getColor(index)
                if( color === undefined ) {
                    throw Error("Undefined color during rendering!")
                }

                // get RGB components
                let values = color.getRGBA()

                // set the color in the back-buffer
                let position = (offset + x) << 2
                img_data.data[position]   = values.r
                img_data.data[++position] = values.g
                img_data.data[++position] = values.b
                img_data.data[++position] = 255 
            }
        }

        // set the backbuffer with the new data
        this.pcBackBuffer.data(img_data)
    }

    // mainloop
    protected mainLoop(timestamp:number):void {
        // update the flames
        this.update()

        // render the flames to the backbuffer
        this.render()

        // flip the backbuffer to the screen
        this.pcBackBuffer.flip()

        // re-generate the bottom line
        this.generate()

        // request animation on the next frame
        requestAnimationFrame(this.mainLoop.bind(this))
    }
    //---- [begin] protected methods

    //---- [begin] public methods
    // constructor
    constructor(output:HTMLCanvasElement) {
        super()

        // initialize private members
        this.pcBackBuffer = new BackBuffer(output)
        this.pnWidth = output.width
        this.pnHeight = output.height
        
        // create the palette
        this.pcPalette = new Palette()
        for(let i = 0; i < 256; i++) {
            let lum = (i < 192) ? i/192 : 1.0;
            this.pcPalette.push(new Color(COLOR_MODEL.HSL, i / 3, 1.0, lum))
        }

        // flames buffer
        this.paFlames = []
        for(let i = 0; i < (this.pnWidth * this.pnHeight); i++) {
            this.paFlames[i] = BLACK_VALUE_INDEX
        }
    }

    // run
    public run():void {
        console.log('Starting the flames generation...')
        this.toggle()
        this.generate()
        this.mainLoop(0)
    }
    //---- [end] public methods
}