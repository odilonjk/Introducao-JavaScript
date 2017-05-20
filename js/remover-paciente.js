var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach( function(paciente) {
  paciente.addEventListener("dblclick", function(){
    paciente.remove();
    var msgs = [];
    msgs.push("Paciente removido.");
    enviaMensagem(msgs);
  });
});
