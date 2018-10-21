/*
 * @file	animation.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-06
 *
 * @brief	Main Animation class
 * @history
 *			2018-09-06 - 1.0.0 - SLE
 *			Initial Version
 */

//------ imports

//------ classes
export abstract class Animation {
    //---- members
    private isAnimated_:boolean = false
    protected nFrames_:number = 0

    //---- methods
    constructor() {
    }

    // start the animation
    public start():void {
        this.isAnimated_ = true
    }

    // stop the animation
    public stop():void {
        this.isAnimated_ = false
    }

    // toggle between start / stop
    public toggle():void {
        this.isAnimated_ = !this.isAnimated_
    }

    // return the value for the flag
    public isAnimated():boolean {
        return this.isAnimated_
    }

    // run the animation
    public abstract run():void

    // update the animation
    protected abstract update():void

    // render the animation
    protected abstract render():void

    // mainloop for the requestAnimationFrame
    protected abstract mainLoop(timestamp:number):void
}