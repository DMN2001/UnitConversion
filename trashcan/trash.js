const form = document.forms['calculator'];
form.onsubmit = function() {
  event.preventDefault();
  var number = form.elements['startval'].value;
  number = Number(number);
  var uf = document.getElementById("unitsfrom");
  var ut = document.getElementById("unitsto");
  var unitfrom = uf.options[uf.selectedIndex].value;
  var unitto = ut.options[ut.selectedIndex].value;
  var input = math.unit(number, unitfrom);
  var output1 = input.toNumber(unitto);
  var output = Math.round(output1);
  document.getElementById('output').innerHTML = `${number}` + " " + `${unitfrom}` +  " equals " + `${output}` + " " + `${unitto}`;
}