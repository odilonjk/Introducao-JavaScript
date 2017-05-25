var botaoBusca = document.querySelector('#buscar-paciente');

botaoBusca.addEventListener('click', function() {

  //  Criando o http request
  var xhr = new XMLHttpRequest();

  //  Acessando o endereço da api.
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  //  Escuta para receber o resultado ao fim do load
  xhr.addEventListener("load", function() {

    //  Verificando resposta
    if(xhr.status == 200) {
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      //  Adicionando cada paciente na tabela
      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      //  Retornando feedback em caso de falha
      enviaMensagemErro([xhr.status + " " + xhr.responseText]);
    }


  });

  xhr.send();
});
