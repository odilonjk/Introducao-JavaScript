var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //  Extraindo informações do paciente
    var paciente = obtemPacienteDoForm(form);


    if(validaPaciente(paciente)) {
      //  Cria TR e TD
      var pacienteTr = montaTr(paciente);

      var tabela = document.querySelector("#tabela-pacientes");

      //  Adiciona TR na tabela
      tabela.appendChild(pacienteTr);

      mensagem("Paciente adicionado com sucesso!");
      form.reset();
    }
});

function obtemPacienteDoForm(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value)
  }

  return paciente;
};

function montaTr(paciente) {

  //  Cria a tr
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //  Cria as tds
  var nomeTd = montaTd(paciente.nome, "info-nome");
  var pesoTd = montaTd(paciente.peso, "info-peso");
  var alturaTd = montaTd(paciente.altura, "info-altura");
  var gorduraTd = montaTd(paciente.gordura, "info-gordura");
  var imcTd = montaTd(paciente.imc, "info-imc");


  //  Adiciona as tds ao tr
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;

};

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

//  Verifica o paciente e retorna boolean
function validaPaciente(paciente) {
  var mensagemErro = document.querySelector("#mensagem-erro");
  mensagemErro.innerHTML = "";
  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("Nome é obrigatório.");
  }
  if(validaPeso(paciente.peso)) {
    erros.push("Peso inválido.");
  }
  if(validaAltura(paciente.altura)) {
    erros.push("Altura inválida.");
  }
  if(validaGordura(paciente.gordura)){
    erros.push("Gordura inválida.");
  }
  if(erros.length > 0) {
    mensagemErro(erros);
  }
  return erros.length == 0;
}
