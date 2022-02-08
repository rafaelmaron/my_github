
function mascaraCPF(){

	var cpf = document.getElementById("cpf")

	var bol = 1

	if(cpf.value.length == 3 || cpf.value.length == 7){
		cpf.value += "."
	} else if (cpf.value.length == 11)
		cpf.value += "-"
}

function onlynumber(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode( key );
   var regex = /^[0-9]+$/;
   if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}