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
    {
        type: "relative",
        subunits: [
            {
            name: 'select subunit'
            },
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
const unitInputContainerTwo_El = document.getElementById('unitInputContainerTwo');
const convertValue_El = document.getElementById('convertValue');
const resultValueContainer_El = document.getElementById('resultValueContainer');
const convertIcon_El = document.getElementById('convertIcon');
const fromSubunitSelectionContainer_El = document.getElementById('fromSubunitSelectionContainer');
const toSubunitSelectionContainer_El = document.getElementById('toSubunitSelectionContainer');
const unitResult_El = document.getElementById('unitResult');
const copyClipboard_El = document.getElementById('copyclipboard');
const copyClipboardCheck_El = document.getElementById('copyclipboardcheck');

// Initial hiding of elements
toSubunitSelectionContainer_El.style.display = 'none';
fromSubunitSelectionContainer_El.style.display = 'none';
convertButton_El.style.display = 'none';
convertValue_El.style.display = 'none';
resultValueContainer_El.style.display = 'none';
convertIcon_El.style.display = 'none';
copyClipboardCheck_El.style.display = 'none';  // Initially hide the checkmark clipboard icon

// Populate unit selection dropdown
units.forEach((unit, i) => {
    let unitOption = document.createElement('option');
    unitOption.value = unit.type;
    unitOption.innerText = unit.type;
    unitSelections_El.appendChild(unitOption);
    unitIndex = i; 
});

unitSelections_El.addEventListener('change', () => {
    getSelectedSubUnit();
});

function getSelectedSubUnit() {
    let selectedValue = unitSelections_El.value;
    let selectedIndex = Array.from(unitSelections_El.options).findIndex(option => option.value === selectedValue);
    fromSubUnitSelections_El.innerHTML = '';
    toSubUnitSelections_El.innerHTML = '';

    if (selectedIndex >= 0 && units[selectedIndex].subunits) {
        fromSubUnitSelections_El.style.display = 'block';
        toSubUnitSelections_El.style.display = 'block';

        units[selectedIndex].subunits.forEach((subunit) => {
            let fromSubUnitOption = document.createElement('option');
            let toSubUnitOption = document.createElement('option');
            fromSubUnitOption.value = subunit.name;
            toSubUnitOption.value = subunit.name;
            fromSubUnitOption.innerText = subunit.name;
            toSubUnitOption.innerText = subunit.name;
            fromSubUnitSelections_El.appendChild(fromSubUnitOption);
            toSubUnitSelections_El.appendChild(toSubUnitOption);
        });
    }
}

// Show conversion input fields when the toSubUnit is selected
toSubUnitSelections_El.addEventListener('change', () => {
    convertButton_El.style.display = 'block';
    convertValue_El.style.display = 'block';
    convertIcon_El.style.display = 'block';
});

// Convert units when the button is clicked
convertButton_El.addEventListener('click', () => {
    convertUnits();
});

// Clipboard functionality
copyClipboard_El.addEventListener('click', () => {
    navigator.clipboard.writeText(unitResult_El.innerText).then(() => {
        copyClipboard_El.style.display = 'none';
        copyClipboardCheck_El.style.display = 'block';  // Show checkmark icon

        setTimeout(() => {
            copyClipboardCheck_El.style.display = 'none';
            copyClipboard_El.style.display = 'block';  // Reset to clipboard icon after 2 seconds
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

function getConversionRate(subunitName, unitType) {
    const selectedUnit = units.find(unit => unit.type === unitType);
    const subunit = selectedUnit.subunits.find(sub => sub.name === subunitName);
    return subunit ? subunit.conversionRate : null;
}

function convertUnits() {
    const selectedUnitType = unitSelections_El.value;
    const fromSubUnit = fromSubUnitSelections_El.value;
    const toSubUnit = toSubUnitSelections_El.value;
    const inputValue = parseFloat(convertValue_El.value);

    const fromRate = getConversionRate(fromSubUnit, selectedUnitType);
    const toRate = getConversionRate(toSubUnit, selectedUnitType);

    if (fromRate && toRate && !isNaN(inputValue)) {
        const baseValue = inputValue * fromRate;
        const resultValue = baseValue / toRate;

        unitResult_El.innerText = `${resultValue.toFixed(2)} ${toSubUnit}`;
        resultValueContainer_El.style.display = 'block';
    } else {
        unitResult_El.innerText = "Invalid conversion";
        resultValueContainer_El.style.display = 'block';
    }
}
