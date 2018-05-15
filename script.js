document.getElementById("calculate-button").onclick= function(){
// Coletar números dentro das caixas de input da calculdadora
let elem1 = document.getElementById('elem-1');
let elem2 = document.getElementById('elem-2');
let resultElement= document.getElementById('result');
// Coletar apenas os valores presentes na caixa e não a caixa inteira/ Além da parseInt que faz com que inputs string sejam interpretados como variáveis number
let val1 = parseInt(elem1.value);
let val2 = parseInt(elem2.value);
// Fazer o If para avaliar o NaN ( Desafio)    
    if(isNaN(val1)) {
        // Caso o primeiro espaço esteja vazio
        alert('Não se esqueça de preencher os espaços');
        document.getElementById('elem-1').focus();
    } else if(isNaN(val2)) {
        // Caso o segundo input esteja vazio
        alert('Não se esqueça de preencher os espaços');
        document.getElementById('elem-2').focus();
    } else {
       // Tal condição só será utilizada se ambas as caixas estiverem preenchidas
       // Usar o querySelector para selecionar o tipo de operação que queremos através do ID
		let choice= document.querySelector('input[name="operation"]:checked');
		let operation= choice.value;
		//Chama a função e coleta o input do resultado dentro da inputbox do HTML
		//Argumentos: dois números válidos e um símbolo de operação.
        let result = getResult(num1, num2, operation);
        document.getElementById('result').innerHTML = result;
    }
} 
/**
*  Função que coleta os valores dentro das inputboxes e realiza o cálculo dependendo do símbolo escolhido. 
*/
function getResult(val1,val2,operation) {
if (operation ==="+") {
	return  val1 + val2;
} else if (operation  === "-") {
	return  val1 - val2;
} else if (operation === "*") {
	return  val1 * val2;
} else if (operation === "/") {	
	return  val1 / val2;
	}	
}




