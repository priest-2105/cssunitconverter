const units = [
    {
     type: 'select unit'
    },
    {
        type: "absolute",
        subunits: [
            {
            name: 'select subunit'
            },
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
    // {
    //     type: "relative",
    //     subunits: [
    //         {
    //         name: 'select subunit'
    //         },
    //         {
    //             name: "em",
    //             abbreviation: "em",
    //             conversionRate: 16,
    //             description: "Relative to the element's font size"
    //         },
    //         {
    //             name: "rem",
    //             abbreviation: "rem",
    //             conversionRate: 16,
    //             description: "Relative to the root font size"
    //         },
    //         {
    //             name: "percent",
    //             abbreviation: "%",
    //             conversionRate: null,
    //             description: "Percentage relative to parent element"
    //         },
    //         {
    //             name: "viewport width",
    //             abbreviation: "vw",
    //             conversionRate: window.innerWidth / 100,
    //             description: "Relative to 1% of the viewport width"
    //         },
    //         {
    //             name: "viewport height",
    //             abbreviation: "vh",
    //             conversionRate: window.innerHeight / 100,
    //             description: "Relative to 1% of the viewport height"
    //         },
    //         {
    //             name: "viewport minimum",
    //             abbreviation: "vmin",
    //             conversionRate: Math.min(window.innerWidth, window.innerHeight) / 100,
    //             description: "Relative to 1% of the smaller dimension (width or height)"
    //         },
    //         {
    //             name: "viewport maximum",
    //             abbreviation: "vmax",
    //             conversionRate: Math.max(window.innerWidth, window.innerHeight) / 100,
    //             description: "Relative to 1% of the larger dimension (width or height)"
    //         },
    //         {
    //             name: "character width",
    //             abbreviation: "ch",
    //             conversionRate: null,
    //             description: "Width of the '0' character in the current font"
    //         },
    //         {
    //             name: "x-height",
    //             abbreviation: "ex",
    //             conversionRate: null,
    //             description: "Height of the lowercase 'x' in the current font"
    //         }
    //     ]
    // },
    {
        type: "angle",
        subunits: [
            {
            name: 'select subunit'
            },
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
            name: 'select subunit'
            },
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
            name: 'select subunit'
            },
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








const unitSelections_El = document.getElementById('unitSelection');
const fromSubUnitSelections_El = document.getElementById('fromSubUnitSelection');
const toSubUnitSelections_El = document.getElementById('toSubUnitSelection');
const convertButton_El = document.getElementById('convertButton');
const convertValue_El = document.getElementById('convertValue');
const resultValueContainer_El = document.getElementById('resultValueContainer');
const convertIcon_El = document.getElementById('convertIcon');
const unitResult_El = document.getElementById('unitResult');
const copyClipboard_El = document.getElementById('copyclipboard');
const copyClipboardCheck_El = document.getElementById('copyclipboardcheck');
const icons_El = document.querySelectorAll('i');
const labels_El = document.querySelectorAll('label');


function initializeUI() {
    // Initially hide elements
    toSubUnitSelections_El.style.display = 'none';
    fromSubUnitSelections_El.style.display = 'none';
    convertButton_El.style.display = 'none';
    convertValue_El.style.display = 'none';
    resultValueContainer_El.style.display = 'none';
    convertIcon_El.style.display = 'none';
    copyClipboardCheck_El.style.display = 'none';
    
    // Hide all icons and labels
    icons_El.forEach(icon => icon.style.display = 'none');
    labels_El.forEach(label => label.style.display = 'none');  // Set display to none initially

    // Populate unit dropdown
    units.forEach(unit => {
        const option = document.createElement('option');
        option.value = unit.type;
        option.innerText = unit.type;
        unitSelections_El.appendChild(option);
    });
}

unitSelections_El.addEventListener('change', () => {
    populateSubUnits();
    convertButton_El.style.display = 'block';
});

function populateSubUnits() {
    const selectedUnitType = unitSelections_El.value;
    const selectedUnit = units.find(unit => unit.type === selectedUnitType);

    if (selectedUnit) {
        // Clear previous subunits
        fromSubUnitSelections_El.innerHTML = '';
        toSubUnitSelections_El.innerHTML = '';

        // Show subunits dropdowns
        fromSubUnitSelections_El.style.display = 'block';
        toSubUnitSelections_El.style.display = 'block';
        convertButton_El.style.display = 'none';  // Hide the button until selection

        // Show icons and labels again
        icons_El.forEach(icon => icon.style.display = 'block');
        labels_El.forEach(label => label.style.display = 'block');  // Show labels

        // Populate subunits in the dropdown
        selectedUnit.subunits.forEach(subunit => {
            const fromOption = document.createElement('option');
            fromOption.value = subunit.name;
            fromOption.innerText = subunit.name;

            const toOption = document.createElement('option');
            toOption.value = subunit.name;
            toOption.innerText = subunit.name;

            fromSubUnitSelections_El.appendChild(fromOption);
            toSubUnitSelections_El.appendChild(toOption);
        });

        // Show the input field and the convert button
        convertValue_El.style.display = 'block';
        convertIcon_El.style.display = 'block';
    }
}

convertButton_El.addEventListener('click', () => {
    const selectedUnitType = unitSelections_El.value;
    const fromSubUnit = fromSubUnitSelections_El.value;
    const toSubUnit = toSubUnitSelections_El.value;
    const inputValue = parseFloat(convertValue_El.value);

    if (!isNaN(inputValue)) {
        const fromRate = getConversionRate(fromSubUnit, selectedUnitType);
        const toRate = getConversionRate(toSubUnit, selectedUnitType);

        if (fromRate && toRate) {
            const baseValue = inputValue * fromRate;
            const resultValue = baseValue / toRate;

            unitResult_El.innerText = resultValue.toFixed(2);
            resultValueContainer_El.style.display = 'block';
            copyClipboard_El.style.display = 'inline-block';
        } else {
            unitResult_El.innerText = "Invalid conversion";
            resultValueContainer_El.style.display = 'block';
        }
    }
});

copyClipboard_El.addEventListener('click', () => {
    navigator.clipboard.writeText(unitResult_El.innerText)
        .then(() => {
            copyClipboard_El.style.display = 'none';
            copyClipboardCheck_El.style.display = 'inline-block';
            setTimeout(() => {
                copyClipboardCheck_El.style.display = 'none';
                copyClipboard_El.style.display = 'inline-block';
            }, 2000); // Revert after 2 seconds
        })
        .catch(err => {
            console.log('Failed to copy: ', err);
        });
});

function getConversionRate(subunitName, unitType) {
    const selectedUnit = units.find(unit => unit.type === unitType);
    const subunit = selectedUnit.subunits.find(sub => sub.name === subunitName);
    return subunit ? subunit.conversionRate : null;
}

initializeUI();
