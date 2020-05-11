var needle = $('needle');
var el = $('el');

$.getJSON('http://demo6451583.mockable.io/virtualcar' , function(json_data){
	document.getElementById("el").setAttribute('data-value', json_data.speed);
	levelchange(json_data.speed);
});

function levelchange(val){
  var temp="rotate("+val+"deg)";
  document.getElementById("needle").style.transform = temp;
}