var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {

  var pacientes = document.querySelectorAll(".paciente");

  if(this.value.length > 0 ) {

    for(var i=0; i<pacientes.length; i++) {

      var paciente = pacientes[i];

      //  Recuperado td que contem o nome
      var tdNome = paciente.querySelector(".info-nome");

      //  Recuperando o nome de dentro do td
      var nomePaciente = tdNome.textContent;

      //  Criando exp. regular para filtrar
      var expressao = new RegExp(this.value,"i");
      if(expressao.test(nomePaciente)){
        paciente.classList.remove("invisivel");
      } else {
        paciente.classList.add("invisivel");
      }
    }
  } else {

    //  Remover classe invisivel caso não
    //  exista filtro digitado
    for(var i=0; i<pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});
