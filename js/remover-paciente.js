var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

//  O escutador do evento é a tabela
tabela.addEventListener("dblclick", function(event) {

  //  O alvo é o filho, mas então é chamado o pai
  //  para realizar o remove() corretamente.
  event.target.parentNode.remove();

  //  Disparando mensagem para o usuario
  enviaMensagem(["Paciente removido."]);
});
