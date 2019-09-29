//Create a constant of array of objects containing appliances and their power ratings.
const appliances_with_power = [
	{	
		appliance: 'BLENDER',
		power: 0.5
		},
		{
		appliance: 'CAN OPENER',
		power: 0.15
		},
		{
		appliance: 'COFFEE MACHINE',
		power: 1
		},
		{
		appliance: 'DISHWASHER',
		power: 1.5
		},
		{
		appliance: 'ESPRESSO MACHINE',
		power: 0.8
		},
		{
		appliance: 'FREEZER - UPRIGHT - 15 CU. FT.',
		power: 1.248
		},
		{
		appliance: 'FREEZER - CHEST - 15 CU. FT.',
		power: 1.08
		} ,
		{
		appliance: 'FRIDGE - 20 CU. FT. (AC)',
		power: 1.416
		},
		{
		appliance: 'FRIDGE - 16 CU. FT. (AC)',
		power: 1.2
		},
		{
		appliance: 'GARBAGE DISPOSAL',
		power: 0.45
		} ,
		{
		appliance: 'KETTLE - ELECTRIC',
		power: 1.2
		},
		{
		appliance: 'MICROWAVE',
		power: 1
		},
		{
		appliance: 'OVEN ELECTRIC',
		power: 1.2
		},
		{
		appliance: 'TOASTER',
		power: 0.85
		},
		{
		appliance: 'TOASTER OVEN',
		power: 1.2
		},
		{
		appliance: 'STAND MIXER',
		power: 0.3
		} ,
		{
		appliance: 'BOX FAN',
		power: 0.2
		},
		{
		appliance: 'CEILING FAN',
		power: 0.12
		},
		{
		appliance: 'CENTRAL AIR CONDITIONER - 24,000 BTU NA',
		power: 3.8
		},
		{
		appliance: 'CENTRAL AIR CONDITIONAL - 10,000 BTU NA',
		power: 3.25
		},
		{
		appliance: 'FURNACE FAN BLOWER',
		power: 0.8
		},
		{
		appliance: 'SPACE HEATER NA',
		power: 1.5
		},
		{
		appliance: 'TANKLESS WATER HEATER - ELECTRIC',
		power: 1.5
		},
		{
		appliance: 'WATER HEATER - ELECTRIC',
		power: 4.5
		},
		{
		appliance: 'WINDOW AIR CONDITIONER 10,000 BTU',
		power: 0.9
		},
		{
		appliance: 'WINDOW AIR CONDITONER 12,000 BTU NA',
		power: 1.2
		},
		{
		appliance: 'WELL PUMP - 1/3 I HP',
		power: 0.75
		},
		{
		appliance: 'CLOTHES DRYER - ELECTRIC',
		power: 3
		},
		{
		appliance: 'CLOTHES DRYER - GAS',
		power: 1.8
		},
		{
		appliance: 'CLOTHES WASHES',
		power: 0.8
		},
		{
		appliance: 'BLURAY PLAYER',
		power: 0.015
		},
		{
		appliance: 'CABLE BOX',
		power: 0.035
		},
		{
		appliance: 'DVD PLAYER',
		power: 0.015
		},
		{
		appliance: 'TV - LCD',
		power: 0.15
		},
		{
		appliance: 'TV - PLASMA',
		power: 0.2
		},
		{
		appliance: 'SATELLITE DISH',
		power: 0.025
		},
		{
		appliance: 'STEREO RECEIVER',
		power: 0.45
		},
		{
		appliance: 'VIDEO GAME CONSOLE',
		power: 0.15
		},
		{
		appliance: 'CFL BULB - 40 WATT EQUIVALENT',
		power: 0.011
		},
		{
		appliance: 'CFL BULB - 60 WATT EQUIVALENT',
		power: 0.018
		},
		{
		appliance: 'CFL BULB - 75 WATT EVAIVALENT',
		power: 0.02
		},
		{
		appliance: 'CFL  BULB - 100 WATT EQUIVALENT',
		power: 0.03
		},
		{
		appliance: 'COMPACT FLUORESCENT 20 WATT',
		power: 0.022
		},
		{
		appliance: 'COMPACT FLUORESCENT 25 WATT',
		power: 0.028
		},
		{
		appliance: 'HALOGEN - 40 WATT',
		power: 0.04
		},
		{
		appliance: 'INCANDESCENT 50 WATT',
		power: 0.05
		},
		{
		appliance: 'INCANDESCENT 100 WATT',
		power: 0.1
		},
		{
		appliance: 'LED BULB - 40 WATT EQUIVALENT',
		power: 0.01
		},
		{
		appliance: 'LED BULB - 60 WATT EQUIVALENT',
		power: 0.013
		},
		{
		appliance: 'LED BULB - 75 WATT EQUIVALENT',
		power: 0.018
		},
		{
		appliance: 'LED BULB - 100 WATT EQUIVALENT',
		power: 0.023
		},
		{
		appliance: 'DESKTOP COMPUTER (STANDARD)',
		power: 0.2
		},
		{
		appliance: 'DESKTOP COMPUTER (GAMING)',
		power: 0.5
		},
		{
		appliance: 'LAPTOP',
		power: 0.1
		},
		{
		appliance: 'LCD MONITOR',
		power: 0.1
		},
		{
		appliance: 'MODEM',
		power: 0.007
		},
		{
		appliance: 'MODEM',
		power: 0.15
		},
		{
		appliance: 'PRINTER',
		power: 0.1
		},
		{
		appliance: 'ROUTER',
		power: 0.007
		},
		{
		appliance: 'SMART PHOE - RECHARGE',
		power: 0.006
		},
		{
		appliance: 'TABLET - RECHARGE',
		power: 0.008
		},
		{
		appliance: 'BAND SAW - 14"',
		power: 1.1
		},
		{
		appliance: 'BELT SANDER - 3"',
		power: 1
		},
		{
		appliance: 'CHAIN SAW - 12"',
		power: 1.1
		},
		{
		appliance: 'CIRCULAR SAW - 7-1/4"',
		power: 0.9
		},
		{
		appliance: 'CIRCULAR SAW 8-1/4"',
		power: 1.4
		},
		{
		appliance: 'DISC SANDER - 9"',
		power: 1.2
		},
		{
		appliance: 'DRILL - 1/4"',
		power: 0.25
		},
		{
		appliance: 'DRILL - 1/2"',
		power: 0.75
		},
		{
		appliance: 'DRILL - 1"',
		power: 0.1
		},
		{
		appliance: 'HEDGE TRIMMER',
		power: 0.45
		},
		{
		appliance: 'WEED EATER',
		power: 0.5
		},
		{
		appliance: 'CLOCK RADIO',
		power: 0.007
		},
		{
		appliance: 'CURLING IRON',
		power: 0.15
		},
		{
		appliance: 'DEHUMIDIFIER',
		power: 0.28
		},
		{
		appliance: 'ELECTRIC SHAVER',
		power: 0.015
		},
		{
		appliance: 'ELECTRIC BLANKET',
		power: 0.2
		},
		{
		appliance: 'HAIR DRYER',
		power: 1.5
		},
		{
		appliance: 'HUMIDIFIER',
		power: 0.2
		},
		{
		appliance: 'RADIOTELEPHONE - RECEIVE',
		power: 0.005
		},
		{
		appliance: 'RADIOTELEPHONE - TRANSMIT',
		power: 0.075
		},
		{
		appliance: 'SEWING MACHING',
		power: 0.1
		},
		{
		appliance: 'VACUUM',
		power: 1
		}
		];

//Initialise the environment by loading the appliances into the select options.
const initialise = () => {
    document.querySelector('.home').click();
	loadAppliances();
};

const loadAppliances = () => {
	const appliancesSelector = document.querySelectorAll(".appliance");
	const qtySelector = document.querySelectorAll(".qty");
	const powerSelector = document.querySelectorAll(".power");

	for(let i = 0; i < appliancesSelector.length; i++) {
		for(let j = 0; j < appliances_with_power.length; j++) {
			let optn = document.createElement("OPTION");
			optn.text = appliances_with_power[j].appliance;
			optn.value = j + 1;
			
			appliancesSelector[i].options.add(optn);			
		}

		appliancesSelector[i].addEventListener("change", () => {
			document.querySelector("#power" + (i + 1)).value = appliances_with_power[appliancesSelector[i].value - 1].power;
			document.querySelector("#quantity" + (i+1)).value = 1;
		}, false);

		qtySelector[i].addEventListener("click", () => {
			if( ( (qtySelector[i].value < 1) || (qtySelector[i].value > 0) ) && (appliancesSelector[i].value == "prompt") ) {
				qtySelector[i].value = "";
			}else if(qtySelector[i].value < 1) {
				qtySelector[i].value = 1;
			}
		}, false);

		powerSelector[i].attributes.s
	}
};

document.querySelector(".home").addEventListener("click", () => {
	document.querySelector(".home").classList.add("clicked");
	document.querySelector(".about").classList.remove("clicked");
	document.querySelector(".team").classList.remove("clicked");
},  false);

document.querySelector(".about").addEventListener("click", () => {
	document.querySelector(".home").classList.remove("clicked");
	document.querySelector(".about").classList.add("clicked");
	document.querySelector(".team").classList.remove("clicked");
}, false);

document.querySelector(".team").addEventListener("click", () => {
	document.querySelector(".home").classList.remove("clicked");
	document.querySelector(".about").classList.remove("clicked");
	document.querySelector(".team").classList.add("clicked");
}, false);

document.querySelector("#total").addEventListener("click", () => {
	let total = 0;

	const qtySelector = document.querySelectorAll(".qty");
	const powerSelector = document.querySelectorAll(".power");
	const output = document.querySelector("#output");

	for(let i = 0; i < qtySelector.length; i++) {
		if(qtySelector[i].value >= 1) {
			total += (qtySelector[i].value * powerSelector[i].value);
		}
	}
	if(total > 0) {
		output.innerHTML = "You are consuming " + total + " kW of Power";
		output.style.visibility = "visible";
	}
}, false);

