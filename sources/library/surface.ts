/*
 * @file	surface.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-05
 *
 * @brief	Surface definition
 * @history
 *			2018-09-05 - 1.0.0 - SLE
 *			Initial Version
 */

//------ imports

//------ interfaces
export interface Size {
    width:number,
    height:number
}

//------ classes
export abstract class Surface {
    //---- members
    private width_:number                         // width of the surface
    private height_:number                        // height of the surface
    private canvas_:HTMLCanvasElement             // the underlying canvas for the surface
    private context_:CanvasRenderingContext2D     // the context for the surface

    //---- methods
    // constructor
    constructor(canvas:HTMLCanvasElement) {
        this.canvas_  = canvas
        this.context_ = <CanvasRenderingContext2D> canvas.getContext("2d")
        this.width_   = canvas.width
        this.height_  = canvas.height
    }

    // return the context of the canvas
    public context(): CanvasRenderingContext2D {
        return this.context_
    }

    // return the canvas itself
    public canvas(): HTMLCanvasElement {
        return this.canvas_
    }

    // return the dimension of the canvas
    public size(): Size {
        return {
            width: this.width_,
            height: this.height_
        }
    }

    // get or set the imagedata of the canvas
    public data(x:ImageData):void;
    public data():ImageData;
    public data(x?:ImageData): ImageData|void {
        if( typeof x === "undefined" ) {
            return this.context_.getImageData(0, 0, this.width_, this.height_)
        } else {
            this.context_.putImageData(x, 0, 0)
        }
    }

    // clear the surface
    public clear():void {
        this.context_.clearRect(0, 0, this.width_, this.height_)
    }
}
