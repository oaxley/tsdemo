/*
 * @file	color.ts
 * @author	Sebastien LEGRAND
 * @email	oaxley@gmail.com
 * @date	2018-09-06
 *
 * @brief	Color class definition
 * @history
 *			2018-09-06 - 1.0.0 - SLE
 *			Initial Version
 */

//------ imports

//------ globals

// color models
export enum COLOR_MODEL {
    RGB,
    HSL,
    HSV,
    UNKNOWN
}

// epsilon value to compare float
const epsilon = 0.0001

//------ interfaces
interface RGBA {
    r:number,
    g:number,
    b:number,
    a:number
}

interface HSLA {
    h:number,
    s:number,
    l:number,
    a:number
}

interface HSVA {
    h:number,
    s:number,
    v:number,
    a:number
}


//------ classes
export class Color {
    //---- members
    private model_:COLOR_MODEL = COLOR_MODEL.UNKNOWN    // the color model
    private x_:number = 0                               // the 1st component (R or H)
    private y_:number = 0                               // the 2nd component (G or S)
    private z_:number = 0                               // the 3rd component (B or L or V)
    private a_:number = 1.0                             // the alpha value


    //---- methods
    constructor(model:COLOR_MODEL = COLOR_MODEL.UNKNOWN, x:number = 0, y:number = 0, z:number = 0, a:number = 1.0) {
        a = (a > 1.0) ? (a / 255) : a
        this.setValues(model, x, y, z, a)
    }

    // set the members
    private setValues(model:COLOR_MODEL, x:number, y:number, z:number, a:number) {
        if( model == COLOR_MODEL.RGB ) {
            [ this.model_, this.x_, this.y_, this.z_, this.a_ ] = [ model, Math.round(x), Math.round(y), Math.round(z), a ]
        } else {
            [ this.model_, this.x_, this.y_, this.z_, this.a_ ] = [ model, Math.round(x), y, z, a ]
        }
    }

    // transcode a color from one space to another
    private transcodeTo(model:COLOR_MODEL):RGBA|HSLA|HSVA {
        switch(this.model_) {
            case COLOR_MODEL.RGB:
                switch(model) {
                    case COLOR_MODEL.HSL:
                        return this.transcodeRGBtoHSL()
                        break
                    case COLOR_MODEL.HSV:
                        return this.transcodeRGBtoHSV()
                        break
                }
                break
            case COLOR_MODEL.HSL:
                switch(model) {
                    case COLOR_MODEL.RGB:
                        return this.transcodeHSLtoRGB()
                        break
                    case COLOR_MODEL.HSV:
                        return this.transcodeHSLtoHSV()
                        break
                }
                break
            case COLOR_MODEL.HSV:
                switch(model) {
                    case COLOR_MODEL.RGB:
                        return this.transcodeHSVtoRGB()
                        break
                    case COLOR_MODEL.HSL:
                        return this.transcodeHSVtoHSL()
                        break
                }
                break
            default:
                throw new Error("Unable to transcode from Unknown color model!")
        }
        throw new Error("Unable to transcode a model to itself!")
    }

    //---- [begin] transcode main functions
    private transcodeRGBtoHSL():HSLA {
        let r:number, g:number, b:number
        let h:number, s:number, l:number
        let min:number, max:number, delta:number

        [ r, g, b ] = [ (this.x_ / 255.0), (this.y_ / 255.0), (this.z_ / 255.0) ]

        min = Math.min(r, g, b);
        max = Math.max(r, g, b);
        delta = max - min;

        // luminance
        l = (min + max) / 2.0;

        // saturation
        if( delta < epsilon ) {
            s = 0;
        } else {
            if( l < 0.5 ) {
                s = delta / (max + min);
            } else {
                s = delta / (2.0 - max - min);
            }
        }

        // hue
        if( (delta - epsilon) < 0 ) {
            h = 0;      // no hue if no saturation
        } else {
            if( (max - r) < epsilon ) {
                h = (g - b) / delta;
            } else {
                if( (max - g) < epsilon ) {
                    h = 2.0 + (b - r) / delta;
                } else {
                    h = 4.0 + (r - g) / delta;
                }
            }

            h = h * 60;
            while (h < 0) {
                h = h + 360;
            }
        }

        // encode the object - keep 3 decimals for precision
        return {
            'h': Math.round(h),
            's': Math.trunc(1000 * s) / 1000,
            'l': Math.trunc(1000 * l) / 1000,
            'a': this.a_ 
        };
    }
    private transcodeRGBtoHSV():HSVA {
        let r:number, g:number, b:number
        let h:number, s:number, v:number
        let min:number, max:number, delta:number

        [ r, g, b ] = [ (this.x_ / 255.0), (this.y_ / 255.0), (this.z_ / 255.0) ]

        min = Math.min(r, g, b);
        max = Math.max(r, g, b);
        delta = max - min;

        // hue
        if( (delta - epsilon) < 0 ) {
            h = 0;      // no hue if no saturation
        } else {
            if( (max - r) < epsilon ) {
                h = (g - b) / delta;
            } else {
                if( (max - g) < epsilon ) {
                    h = 2.0 + (b - r) / delta;
                } else {
                    h = 4.0 + (r - g) / delta;
                }
            }

            h = h * 60;
            while (h < 0) {
                h = h + 360;
            }
        }

        // saturation
        if( (max - epsilon) < 0) {
            s = 0;
        } else {
            s = delta / max;
        }

        // value
        v = max;

        // encode the object - keep 3 decimals for precision
        return {
            'h': Math.round(h),
            's': Math.trunc(1000 * s) / 1000,
            'v': Math.trunc(1000 * v) / 1000,
            'a': this.a_
        };
    }

    private transcodeHSLtoRGB():RGBA {
        let r:number, g:number, b:number
        let h:number, s:number, l:number
        let t1:number, t2:number
        let tr:number, tg:number, tb:number

        // function to compute the values
        function _computeValues(x:number):number {
            let y;
            if( (6 * x) < 1.0 ) {
                y = t2 + ((t1 - t2) * 6 * x);
            } else {
                if( (2 * x) < 1.0 ) {
                    y = t1;
                } else {
                    if( (3 * x) < 2.0 ) {
                        y = t2 + ((t1 - t2) * (0.666 - x) * 6);
                    } else {
                        y = t2;
                    }
                }
            }
            return y;
        };

        // setup values
        [ h, s, l ] = [ this.x_, this.y_, this.z_ ]

        if( s == 0 ) {
            r = Math.round(255 * l);
            g = Math.round(255 * l);
            b = Math.round(255 * l);
        } else {
            
            // compute temporary values
            if( l < 0.5 ) {
                t1 = l * (1.0 + s);
            } else {
                t1 = (l + s) - (l * s);
            }
            
            t2 = (2 * l) - t1;
            h = h / 360.0;

            tr = ((h + 0.333) > 1.0) ? (h + 0.333 - 1.0) : (h + 0.333);
            tg = h;
            tb = ((h - 0.333) < 0.0) ? (h - 0.333 + 1.0) : (h - 0.333);

            // RGB values
            r = Math.round(255 * _computeValues(tr));
            g = Math.round(255 * _computeValues(tg));
            b = Math.round(255 * _computeValues(tb));
        }

        // return the object
        return {
            'r': r,
            'g': g,
            'b': b,
            'a': Math.round(this.a_ * 255)
        };        
    }
    private transcodeHSLtoHSV():HSVA {
        let h:number, s:number, l:number
        let v:number, x:number

        [ h, s, l ] = [ this.x_, this.y_, this.z_ ]

        if( l < 0.5 ) {
            x = s * l;
        } else {
            x = s * (1 - l);
        }

        v = l + x;
        s = (2 * x) / v;

        // encode the object - keep 3 decimals for precision
        return {
            'h': Math.round(h),
            's': Math.trunc(1000 * s) / 1000,
            'v': Math.trunc(1000 * v) / 1000,
            'a': this.a_
        };
    }

    private transcodeHSVtoRGB():RGBA {
        let r:number, g:number, b:number
        let h:number, s:number, v:number
        let c:number, x:number, m:number

        [ h, s, v ] = [ this.x_, this.y_, this.z_ ]

        c = v * s;
        m = v - c;
        x = c * (1 - Math.abs( ((h/60) % 2) - 1 ) );

        if( (h >= 0) && (h < 60) ) {
            [ r, g, b ] = [ c, x, 0 ]
        } else if( (h >= 60) && (h < 120) ) {
            [ r, g, b ] = [ x, c, 0 ]
        } else if( (h >= 120) && (h < 180) ) {
            [ r, g, b ] = [ 0, c, x ]
        } else if( (h >= 180) && (h < 240) ) {
            [ r, g, b ] = [ 0, x, c ]
        } else if( (h >= 240) && (h < 300) ) {
            [ r, g, b ] = [ x, 0, c ]
        } else if( (h >= 300) && (h < 360) ) {
            [ r, g, b ] = [ c, 0, x ]
        } else {
            [ r, g, b ] = [0, 0, 0]
        }

        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        // return the object
        return {
            'r': r,
            'g': g,
            'b': b,
            'a': Math.round(this.a_ * 255)
        };
    }
    private transcodeHSVtoHSL():HSLA {
        let h:number, s:number, l:number
        let v:number, x:number

        [ h, s, v ] = [ this.x_, this.y_, this.z_ ]

        x = (2 - s) * v;

        // saturation
        if( x < 1 ) {
            s = (s * v) / x;
        } else {
            s = (s * v) / (2 - x);
        }

        // luminance
        l = x / 2;

        // encode the object - keep 3 decimals for precision
        return {
            'h': Math.round(h),
            's': Math.trunc(1000 * s) / 1000,
            'l': Math.trunc(1000 * v) / 1000,
            'a': this.a_
        };
    }
    //---- [end] transcode main functions

    //---- [begin] public methods
    public model():COLOR_MODEL {
        return this.model_
    }

    public setRGBA(r:number, g:number, b:number, a:number):void
    public setRGBA(o:RGBA):void
    public setRGBA(x:RGBA|number, y?:number, z?:number, a?:number):void {
        if( typeof x !== "number" ) {
            let a = (x.a > 1.0) ? (x.a / 255) : x.a
            this.setValues(COLOR_MODEL.RGB, x.r, x.g, x.b, a)
        } else {
            // take care of undefined parameters
            y = (y === undefined) ? 0 : y
            z = (z === undefined) ? 0 : z
            a = (a === undefined) ? 1.0 : a

            // clamp the alpha channel to [0.0, 1.0]
            a = (a > 1.0) ? (a / 255) : a    
            this.setValues(COLOR_MODEL.RGB, x, y, z, a)
        }
    }

    public setHSLA(h:number, s:number, l:number, a:number):void
    public setHSLA(o:HSLA):void
    public setHSLA(x:HSLA|number, y?:number, z?:number, a?:number):void {
        if( typeof x !== "number" ) {
            this.setValues(COLOR_MODEL.HSL, x.h, x.s, x.l, x.a)
        } else {
            // take care of undefined parameters
            y = (y === undefined) ? 0 : y
            z = (z === undefined) ? 0 : z
            a = (a === undefined) ? 1.0 : a
            this.setValues(COLOR_MODEL.HSL, x, y, z, a)
        }
    }

    public setHSVA(h:number, s:number, l:number, a:number):void
    public setHSVA(o:HSVA):void
    public setHSVA(x:HSVA|number, y?:number, z?:number, a?:number):void {
        if( typeof x !== "number" ) {
            this.setValues(COLOR_MODEL.HSV, x.h, x.s, x.v, x.a)
        } else {
            // take care of undefined parameters
            y = (y === undefined) ? 0 : y
            z = (z === undefined) ? 0 : z
            a = (a === undefined) ? 1.0 : a
            this.setValues(COLOR_MODEL.HSV, x, y, z, a)
        }
    }

    public getRGBA():RGBA {
        if( this.model_ == COLOR_MODEL.RGB ) { 
            return {
                r: this.x_,
                g: this.y_,
                b: this.z_,
                a: Math.round(this.a_ * 255)
            }
        } else {
            return <RGBA> this.transcodeTo(COLOR_MODEL.RGB)
        }
    }

    public getHSLA():HSLA {
        if( this.model_ == COLOR_MODEL.HSL) {
            return {
                h: this.x_,
                s: this.y_,
                l: this.z_,
                a: this.a_
            }
        } else {
            return <HSLA> this.transcodeTo(COLOR_MODEL.HSL)
        }
    }

    public getHSVA():HSVA {
        if( this.model_ == COLOR_MODEL.HSV ) {
            return {
                h: this.x_,
                s: this.y_,
                v: this.z_,
                a: this.a_
            }
        } else {
            return <HSVA> this.transcodeTo(COLOR_MODEL.HSV)
        }
    }
    //---- [end] public methods

    //---- [begin] CSS public methods
    public CSSRGBValues():string {
        let values = this.getRGBA()
        return `rgb(${values.r}, ${values.g}, ${values.b})`
    }
    public CSSRGBAValues():string {
        let values = this.getRGBA()
        return `rgba(${values.r}, ${values.g}, ${values.b}, ${values.a})`
    }

    public CSSHSLValues():string {
        let values = this.getHSLA()
        return `hsl(${values.h}, ${values.s}, ${values.l})`
    }
    public CSSHSLAValues():string {
        let values = this.getHSLA()
        return `hsl(${values.h}, ${values.s}, ${values.l}, ${values.a})`
    }

    public CSSHexa():string {
        function _hexConversion(value:number):string {
            let str = value.toString(16)
            str = (str.length < 2) ? '0' + str : str
            return str
        }
        let values = this.getRGBA()
        let r = _hexConversion(values.r)
        let g = _hexConversion(values.g)
        let b = _hexConversion(values.b)

        return `#${r}${g}${b}`
    }

    public static *gradient(begin:Color, end:Color, count:number): IterableIterator<Color> {
        let xi:number, yi:number, zi:number, ai:number
        let xf:number, yf:number, zf:number, af:number
        let dx:number, dy:number, dz:number, da:number
        let c1:RGBA|HSLA|HSVA, c2:RGBA|HSLA|HSVA

        // check the color model
        if( begin.model() != end.model() ) {
            throw Error("cannot create a gradient from different models!")
        }

        switch(begin.model()) {
            case COLOR_MODEL.RGB:
                c1 = begin.getRGBA()
                xi = c1.r, yi = c1.g, zi = c1.b, ai = c1.a

                c2 = end.getRGBA()
                xf = c2.r, yf = c2.g, zf = c2.b, af = c2.a
                break
            default:
                throw Error("Unknown color model!")
        }

        // compute the delta for each components
        dx = (xf - xi) / count
        dy = (yf - yi) / count
        dz = (zf - zi) / count
        da = (af - ai) / count
        
        for(var i = 0; i < count; i++) {
            // return the new color
            yield new Color(begin.model(), xi, yi, zi, ai)
            
            // increment the values
            xi = xi + dx
            yi = yi + dy
            zi = zi + dz
            ai = ai + da
        }

    }
    //---- [end] CSS public methods
}