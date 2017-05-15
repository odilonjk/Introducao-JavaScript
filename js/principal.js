var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length;i++) {
	var paciente = pacientes[i];

	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;

	if(peso <= 0 || peso >= 1000) {
		console.log("Peso inválido.")
	} else if(altura <= 0 || altura >= 3.00) {
		console.log("Altura inválida.")
	} else {
		var imc = peso / (altura * altura);
		paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
	}
}