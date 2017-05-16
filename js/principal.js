var titulo = document.querySelector("#titulo");
var pacientes = document.querySelectorAll(".paciente");
var botaoAdicionar = document.querySelector("#adicionar-paciente");


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
	
		var imc = peso / (altura * altura);
		tdIMC.textContent = imc.toFixed(2);
	
	}

};

titulo.addEventListener('click', function() {
	window.location.reload(true);
});

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});