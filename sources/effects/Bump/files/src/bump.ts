/*
 * @file	bump.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-09
 *
 * @brief	Bump Mapping Effect
 * @history
 *			2018-09-09 - 1.0.0 - SLE
 *			Initial Version
 */
//------ imports
import { Animation } from "library/animation"
import { BackBuffer } from "library/backbuffer"

//------ globals
const ENVIRON_MAP_WIDTH  = 256
const ENVIRON_MAP_HEIGHT = 256

//------ classes
export class Bump extends Animation {
    //---- members
    private pcBackBuffer:BackBuffer
    private pnWidth:number
    private pnHeight:number
    private paEnvironMap:number[] = []
    private paImage:number[] = []

    //---- [begin] private methods
    // generate the environ map
    private generateEnvMap():void {
        let x:number, y:number
        let nx:number, ny:number, nz:number

        // environ map center 
        let cx = ENVIRON_MAP_WIDTH >> 1
        let cy = ENVIRON_MAP_HEIGHT >> 1

        for(let y = 0; y < ENVIRON_MAP_HEIGHT; y++) {
            let offset = y * ENVIRON_MAP_WIDTH
            for(let x = 0; x < ENVIRON_MAP_WIDTH; x++) {
                nx = ((x - cx) / cx);
                ny = ((y - cy) / cy);

                nz = 1 - Math.sqrt(nx * nx + ny * ny);
                nz = (nz < 0) ? 0 : nz

                this.paEnvironMap[offset + x] = Math.round(255*nz);
            }
        }
    }

    // load the image
    private loadImage():void {
        let img:HTMLImageElement = new Image()
        img.onload = () => {

            // use the backbuffer to paint the image
            this.pcBackBuffer.context().drawImage(img, 0, 0)

            // retrieve the data to build the image map
            let imgData = this.pcBackBuffer.data()
            let pos = 0;
            for(let i = 0; i < imgData.data.length; i+=4) {
                let value = (imgData.data[i] + imgData.data[i+1] + imgData.data[i+2]) / 3
                value = (value > 255) ? 255 : Math.round(value)
                this.paImage[pos++] = value
            } 

            // clear the backbuffer
            this.pcBackBuffer.clear()
        }
        img.src = "/images/bump.png"
    }

    // set the mouse handler
    private setHandler(canvas:HTMLCanvasElement):void {
        var rect = canvas.getBoundingClientRect();
        canvas.onmousemove = (event) => {
            // compute the position of the move, relative to the canvas
            let X = event.clientX - rect.left;
            let Y = event.clientY - rect.top;

            // compute the bump mapping
            this.bump(X, Y);

            // render the animation
            this.render()
        }
    }

    // generate the bump from the mouse position
    private bump(lightX:number, lightY:number):void {
        let imgData = this.pcBackBuffer.data()
        for(let y = 1; y < this.pnHeight - 1; y++ ) {
            let offset = y * this.pnWidth
            for(let x = 0; x < this.pnWidth; x++ ) {
                let nx:number = this.paImage[offset + (x+1)] - this.paImage[offset + (x-1)];
                let ny:number = this.paImage[offset + this.pnWidth + x] - this.paImage[offset - this.pnWidth + x];

                let lx:number = x - lightX;
                let ly:number = y - lightY;

                nx = nx - lx;
                ny = ny - ly;
                nx = nx + 128;
                ny = ny + 128;

                nx = ( nx < 0 || nx > (ENVIRON_MAP_WIDTH - 1)) ? (ENVIRON_MAP_WIDTH - 1) : nx;
                ny = ( ny < 0 || ny > (ENVIRON_MAP_HEIGHT - 1)) ? (ENVIRON_MAP_HEIGHT - 1) : ny;

                let value = this.paEnvironMap[ENVIRON_MAP_WIDTH*ny +nx];
                let position = (offset + x) << 2
                imgData.data[position] = value;
                imgData.data[++position] = value;
                imgData.data[++position] = value;
                imgData.data[++position] = 255;
            }
        }

        this.pcBackBuffer.data(imgData)
    }
    //---- [end] private methods

    //---- [begin] protected methods
    // update
    protected update():void {
    }

    // render
    protected render():void {
        this.pcBackBuffer.flip()
    }

    // mainloop
    protected mainLoop(timestamp:number) {
    }
    //---- [end] protected methods
    
    //---- [begin] public methods
    // constructor
    constructor(output:HTMLCanvasElement) {
        super()

        // setup the back buffer
        this.pcBackBuffer = new BackBuffer(output)
        this.pnWidth  = output.width
        this.pnHeight = output.height 

        // environ mapping
        this.generateEnvMap()

        // load the image
        this.loadImage()

        // set the mouse handler
        this.setHandler(output)
    }
    
    // run
    public run():void {
    }
    //---- [end] public methods
}