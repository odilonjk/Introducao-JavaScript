var titulo = document.querySelector("#titulo");
var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length;i++) {
	var paciente = pacientes[i];

	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;
	tdIMC = paciente.querySelector(".info-imc");

	if(peso <= 0 || peso >= 1000) {

		paciente.classList.add('paciente-invalido');
		tdIMC.textContent = 'Peso inválido.';

	} else if(altura <= 0 || altura >= 3.00) {

		paciente.classList.add('paciente-invalido');
		tdIMC.textContent = 'Altura inválida.';

	} else {

		var imc = calcularImc(peso, altura);
		tdIMC.textContent = imc;

	}

};

function calcularImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}
