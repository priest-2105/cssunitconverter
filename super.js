const units = [
    {
        type: "absolute",
        subunits: [
            {
                name: "inch",
                abbreviation: "in",
                conversionRate: 96
            },
            {
                name: "pixels",
                abbreviation: "px",
                conversionRate: 1
            },
            {
                name: "points",
                abbreviation: "pt",
                conversionRate: 1.333
            },
            {
                name: "centimeters",
                abbreviation: "cm",
                conversionRate: 37.8
            },
            {
                name: "millimeters",
                abbreviation: "mm",
                conversionRate: 3.78
            },
            {
                name: "picas",
                abbreviation: "pc",
                conversionRate: 16
            },
            {
                name: "quarter millimeters",
                abbreviation: "Q",
                conversionRate: 0.944
            }
        ]
    },
    {
        type: "relative",
        subunits: [
            {
                name: "em",
                abbreviation: "em",
                conversionRate: 16,
                description: "Relative to the element's font size"
            },
            {
                name: "rem",
                abbreviation: "rem",
                conversionRate: 16,
                description: "Relative to the root font size"
            },
            {
                name: "percent",
                abbreviation: "%",
                conversionRate: null,
                description: "Percentage relative to parent element"
            },
            {
                name: "viewport width",
                abbreviation: "vw",
                conversionRate: window.innerWidth / 100,
                description: "Relative to 1% of the viewport width"
            },
            {
                name: "viewport height",
                abbreviation: "vh",
                conversionRate: window.innerHeight / 100,
                description: "Relative to 1% of the viewport height"
            },
            {
                name: "viewport minimum",
                abbreviation: "vmin",
                conversionRate: Math.min(window.innerWidth, window.innerHeight) / 100,
                description: "Relative to 1% of the smaller dimension (width or height)"
            },
            {
                name: "viewport maximum",
                abbreviation: "vmax",
                conversionRate: Math.max(window.innerWidth, window.innerHeight) / 100,
                description: "Relative to 1% of the larger dimension (width or height)"
            },
            {
                name: "character width",
                abbreviation: "ch",
                conversionRate: null,
                description: "Width of the '0' character in the current font"
            },
            {
                name: "x-height",
                abbreviation: "ex",
                conversionRate: null,
                description: "Height of the lowercase 'x' in the current font"
            }
        ]
    },
    {
        type: "angle",
        subunits: [
            {
                name: "degrees",
                abbreviation: "deg",
                conversionRate: 1,
                description: "Used for rotations"
            },
            {
                name: "radians",
                abbreviation: "rad",
                conversionRate: 57.2958,
                description: "Used for rotations"
            },
            {
                name: "gradians",
                abbreviation: "grad",
                conversionRate: 0.9,
                description: "Used for rotations"
            },
            {
                name: "turns",
                abbreviation: "turn",
                conversionRate: 360,
                description: "Full circle"
            }
        ]
    },
    {
        type: "time",
        subunits: [
            {
                name: "seconds",
                abbreviation: "s",
                conversionRate: 1,
                description: "Time unit for animations"
            },
            {
                name: "milliseconds",
                abbreviation: "ms",
                conversionRate: 0.001,
                description: "Time unit for animations"
            }
        ]
    },
    {
        type: "resolution",
        subunits: [
            {
                name: "dots per inch",
                abbreviation: "dpi",
                conversionRate: 1,
                description: "Resolution unit for screens"
            },
            {
                name: "dots per centimeter",
                abbreviation: "dpcm",
                conversionRate: 2.54,
                description: "Resolution unit for screens"
            },
            {
                name: "dots per pixel",
                abbreviation: "dppx",
                conversionRate: 96,
                description: "Resolution unit for screens"
            }
        ]
    }
];
