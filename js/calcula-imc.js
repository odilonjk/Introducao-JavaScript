var titulo = document.querySelector("#titulo");
var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length;i++) {
	var paciente = pacientes[i];

	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;
	var tdIMC = paciente.querySelector(".info-imc");
	var ok = true;

	if(validaPeso(peso)) {

		paciente.classList.add('paciente-invalido');
		tdIMC.textContent = 'Peso inválido.';
		ok = false;

	}
	if(validaAltura(altura)) {

		paciente.classList.add('paciente-invalido');
		tdIMC.textContent = 'Altura inválida.';
		ok = false;
	}

	if(ok) {
		var imc = calcularImc(peso, altura);
		tdIMC.textContent = imc;
	}

};

function calcularImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}

function validaPeso(peso) {
	return peso <= 0 || peso >= 500;
}

function validaAltura(altura) {
	return altura <= 0 || altura >= 3.00;
}

function validaGordura(gordura) {
	return gordura < 0 || gordura > 100 || gordura.length == 0;
}
