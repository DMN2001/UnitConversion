// conversion calculator script
const form = document.getElementById('calculator');
const output = document.getElementById('output');
const dd = document.getElementById('unitsfrom');
const convert = {
	in2ft: (measurement) => measurment / 12,
	in2yd: (measurement) => measurement / 36,
	in2mi: (measurement) => measurement / 63360,
	in2mm: (measurement) => measurement * 25.4,
	in2cm: (measurement) => measurement * 2.54,
	in2m: (measurement) => measurement * 0.254,
	in2km: (measurement) => measurement * 0.025,
	ft2in: (measurement) => measurement * 12,
	ft2yd: (measurement) => measurement / 36,
	ft2mi: (measurement) => measurement / 5280,
	ft2mm: (measurement) => measurement * 304.8,
	ft2cm: (measurement) => measurement * 30.48,
	ft2m: (measurement) => measurement * 0.3048,
	ft2km: (measurement) => measurement * 0.0003048,
	yd2in: (measurement) => measurement * 36,
	yd2ft: (measurement) => measurement * 3,
	yd2mi: (measurement) => measurement * 0.00056,
	yd2mm: (measurement) => measurement * 914.4,
	yd2cm: (measurement) => measurement * 91.44,
	yd2m: (measurement) => measurement * 0.9144,
	yd2km: (measurement) => measurement * 0.009144,
	mi2in: (measurement) => measurement * 63360,
	mi2ft: (measurement) => measurement * 5280,
	mi2yd: (measurement) => measurement * 1760,
	mi2mm: (measurement) => measurement * 1609340,
	mi2cm: (measurement) => measurement * 160934,
	mi2m: (measurement) => measurement * 1609.34,
	mi2km: (measurement) => measurement * 1.60934,
	mm2in: (measurement) => measurement / 25.4,
	mm2ft: (measurement) => measurement / 304.8,
	mm2yd: (measurement) => measurement / 914.4,
	mm2mi: (measurement) => measurement / 1609344,
	mm2cm: (measurement) => measurement / 10,
	mm2m: (measurement) => measurement / 1000,
	mm2km: (measurement) => measurement / 1000000,
	cm2in: (measurement) => measurement / 2.54,
	cm2ft: (measurement) => measurement / 30.48,
	cm2yd: (measurement) => measurement / 91.44,
	cm2mi: (measurement) => measurement / 160934.4,
	cm2mm: (measurement) => measurement * 10,
	cm2m: (measurement) => measurement / 10,
	cm2km: (measurement) => measurement / 100000,
	m2in: (measurement) => measurement / 0.0254,
	m2ft: (measurement) => measurement / 0.3048,
	m2yd: (measurement) => measurement / 0.9144,
	m2mi: (measurement) => measurement / 1609.344,
	m2mm: (measurement) => measurement * 1000,
	m2cm: (measurement) => measurement * 100,
	m2km: (measurement) => measurement / 1000,
	km2in: (measurement) => measurement / 0.0000254,
	km2ft: (measurement) => measurement / 0.0003048,
	km2yd: (measurement) => measurement / 0.0009144,
	km2mi: (measurement) => measurement / 1.609344,
	km2mm: (measurement) => measurement * 1000000,
	km2cm: (measurement) => measurement * 100000,
	km2m: (measurement) => measurement * 1000,
	run: (formula, measurement) => formula(measurement)
}

/*form.onsubmit() {
  event.preventDefault() // Keep the page from refreshing on submit
  let formula = dd.options[dd.selectedIndex].value;
  let measurement = form.elements['startval'].value;
  console.log(formula);
  console.log(measurement);
  let result = convert.run(convert[formula],measurement);
  output.innerHTML = result;
}*/
