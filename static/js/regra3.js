function calcular(){
	document.getElementById("valor").innerHTML = " ";
	
	peso = parseFloat(document.getElementById("peso").value);
	if(peso && peso != 0){
		valor = peso/1000 * 50;
		document.getElementById("valor").innerHTML = "Valor do pão é: R$ " + parseFloat(valor).toFixed(2);
	}
}