/*
 * @file	display.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-05
 *
 * @brief	Display / Surface definition
 * @history
 *			2018-09-05 - 1.0.0 - SLE
 *			Initial Version
 */
//------ imports
import { Surface } from "./surface"

//------ classes
export class Display extends Surface {
    //---- members

    //---- methods
    constructor(canvas:HTMLCanvasElement) {
        super(canvas)
    }
}