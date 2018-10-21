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
const MAX_PARTICULES = 200

//------ interfaces
interface point2D {
    x:number,
    y:number,
    ix:number,
    iy:number
}

interface particules {
    p0:point2D,             // start point
    p1:point2D,             // end point
}

//------ classes
export class SpriteAnim extends Animation {
    //---- members
    private pcSprite:Sprite|null = null
    private pcBackBuffer:BackBuffer
    private paParticules:particules[] = []
    private nMaxWidth:number = 0
    private nMaxHeight:number = 0
    private nMood:number = 0

    //---- [begin] private methods
    // load the image
    private loadImage():void {
        let img = new Image()
        img.onload = () => {
            this.pcSprite = new Sprite(img, new Color(COLOR_MODEL.RGB, 44, 156, 0) )
        }
        img.src = "/images/mad_scientist.png"
    }


    // select the color
    private getColor():string {
        let result:string = ''
        if( this.nMood == 0 ) {
            result = 'rgba(128,128,128,1)'
        } else {
            if( this.nMood < 0 ) {
                let alpha:number = - this.nMood
                let r:number = Math.round( (255*alpha) + (1-alpha)*128 )
                let g:number = Math.round( (0*alpha) + (1-alpha)*128 )
                let b:number = Math.round( (0*alpha) + (1-alpha)*128 )
                result = `rgba(${r}, ${g}, ${b}, 1)`
            } else {
                let alpha:number = this.nMood
                let r:number = Math.round( (0*alpha) + (1-alpha)*128 )
                let g:number = Math.round( (255*alpha) + (1-alpha)*128 )
                let b:number = Math.round( (0*alpha) + (1-alpha)*128 )
                result = `rgba(${r}, ${g}, ${b}, 1)`
            }
        }

        return result
    }

    //---- [end] private methods
    
    //---- [begin] protected methods
    // update the animation
    protected update():void {
        // updates the particules
        if( (this.nFrames_ > 0) && (this.nFrames_ % 2 == 0) ) {
            this.paParticules.forEach(p => {
                p.p1.x += p.p1.ix
                if( (p.p1.x > this.nMaxWidth) || (p.p1.x < 0) ) {
                    p.p1.ix = -p.p1.ix
                    p.p1.x += p.p1.ix
                }

                p.p1.y += p.p1.iy
                if( (p.p1.y > this.nMaxHeight) || (p.p1.y < 0) ) {
                    p.p1.iy = -p.p1.iy
                    p.p1.y += p.p1.iy
                }

                p.p0.x += p.p0.ix
                if( (p.p0.x > this.nMaxWidth) || (p.p0.x < 0) ) {
                    p.p0.ix = -p.p0.ix
                    p.p0.x += p.p0.ix
                }

                p.p0.y += p.p0.iy
                if( (p.p0.y > this.nMaxHeight) || (p.p0.y < 0) ) {
                    p.p0.iy = -p.p0.iy
                    p.p0.y += p.p0.iy
                }
            })
        }
    }

    // render the animation
    protected render():void {
        let ctx = this.pcBackBuffer.context()

        // no more particules, make the image disappeared
        if( this.paParticules.length == 0 ) {
            if( this.nFrames_ % 50 == 0 ) {
                ctx.fillStyle = "rgba(0,0,0,0.1)"
                ctx.fillRect(0, 0, this.nMaxWidth, this.nMaxHeight)
            }
        } else {
            ctx.globalCompositeOperation = 'source-over'
            ctx.fillStyle = "rgba(0,0,0,0.08)"
            ctx.fillRect(0, 0, this.nMaxWidth, this.nMaxHeight)
            ctx.globalCompositeOperation = 'lighter'
        
            this.paParticules.forEach(pi => {
                this.paParticules.forEach(pf => {
                    let xd = pf.p1.x - pi.p1.x
                    let yd = pf.p1.y - pi.p1.y
                    let distance = Math.sqrt(xd*xd + yd*yd)

                    if( distance < 100 ) {
                        ctx.beginPath()
                        ctx.moveTo(pi.p1.x, pi.p1.y)
                        ctx.lineTo(pf.p1.x, pf.p1.y)
                        ctx.lineWidth = 1
                        ctx.strokeStyle = this.getColor()
                        ctx.stroke()
                    }

                    xd = pf.p0.x - pi.p0.x
                    yd = pf.p0.y - pi.p0.y
                    distance = Math.sqrt(xd*xd + yd*yd)
                    if( distance < 100 ) {
                        ctx.beginPath()
                        ctx.moveTo(pi.p0.x, pi.p0.y)
                        ctx.lineTo(pf.p0.x, pf.p0.y)
                        ctx.lineWidth = 1
                        ctx.strokeStyle = this.getColor()
                        ctx.stroke()
                    }
                })
            })
        }

        // draw the sprite on top of the canvas
        this.pcSprite!.draw(319, 100, this.pcBackBuffer)

        this.pcBackBuffer.flip()
        this.pcBackBuffer.clear()

        // increase the number of frames
        this.nFrames_ = (this.nFrames_ > 10000) ? 0 : this.nFrames_ + 1
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
        this.nMaxWidth  = output.width
        this.nMaxHeight = output.height

        // load the sprite
        this.loadImage()
    }

    // run the animation
    public run():void {
        this.mainLoop(0)
    }

    // add a new particule
    public addParticule():void {
        if( this.paParticules.length >= MAX_PARTICULES ) return

        let x0:number = Math.round(Math.random() * this.nMaxWidth)
        let y0:number = Math.round(Math.random() * this.nMaxHeight)

        let incx:number = ( Math.random() > 0.5 ) ? -1 : 1
        let incy:number = ( Math.random() > 0.5 ) ? -1 : 1

        let p0:point2D = {x:x0, y:y0, ix:incx, iy:incy}
        let p1:point2D = {x:x0, y:y0, ix:incx, iy:incy}

        this.paParticules.push({
            p0: p0,
            p1: p1
        })
    }

    // remove a particule
    public delParticule():void {
        this.paParticules.pop()
    }

    // increase the mood
    public incMood():void {
        this.nMood = (this.nMood > 1.0) ? 1.0 : (this.nMood + 0.1)
    }

    public decMood():void {
        this.nMood = (this.nMood < -1.0) ? -1.0 : (this.nMood - 0.1)
    }
    
    //---- [end] public methods

}