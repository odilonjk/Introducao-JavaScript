var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach( function(paciente) {
  paciente.addEventListener("dblclick", function(){
    paciente.remove();
    mensagem("Paciente removido.");
  });
});