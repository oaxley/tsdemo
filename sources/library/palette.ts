/*
 * @file	palette.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-08
 *
 * @brief	Color Palette management
 * @history
 *			2018-09-08 - 1.0.0 - SLE
 *			Initial Version
 */

//------ imports
import { Color, COLOR_MODEL } from "./color"

//------ classes
export class Palette {
    //---- members
    private colors:Color[] = []

    //---- methods
    constructor() {
    }

    // return the size of the palette
    public count():number {
        return this.colors.length
    }
    
    // set a color in the palette 
    public setColor(index:number, color:Color):void {
        this.colors[index] = color
    }

    // retrieve a color at a specified index
    public getColor(index:number):Color|undefined {
        if( index > this.colors.length )
            return undefined
        else
            return this.colors[index]
    }

    // push a new color in the palette
    public push(color:Color):void {
        this.colors.push(color)
    }

    // swap 2 colors in the palette
    public swap(index1:number, index2:number):void {
        if( (index1 > this.colors.length) || (index2 > this.colors.length) )
            return
        [ this.colors[index1], this.colors[index2] ] = [ this.colors[index2], this.colors[index1] ]
    }

    // create a color gradient
    public gradient(begin:Color, end:Color, count:number):void {
        for (const it of Color.gradient(begin, end, count)) {
            this.colors.push(it)
        }
    }
}