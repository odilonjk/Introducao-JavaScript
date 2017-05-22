var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

//  O escutador do evento é a tabela
tabela.addEventListener("dblclick", function(event) {

  event.target.parentNode.classList.add("fade-out");

  //  Para o fade-out funcionar, é necessario usar
  //  Timeout com espera de 500ms.
  setTimeout(function() {

    //  O target é o filho, então chamamos o pai
    //  atravez de parentNode() para
    //  realizar o remove() corretamente.
    event.target.parentNode.remove();

  }, 500);


  //  Disparando mensagem para o usuario
  enviaMensagem(["Paciente removido."]);
});
