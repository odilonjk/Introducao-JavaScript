function mensagemErro(erros) {
  var ulErro = document.querySelector("#mensagem-erro");
  ulErro.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    li.classList.add("mensagem-erro");
    ulErro.appendChild(li);
  });
};

function mensagem(msgs) {
  var ulMensagem = document.querySelector("#mensagem");
  ulMensagem.innerHTML = "";

  msgs.forEach(function(msg) {
    var li = document.createElement("li");
    li.textContent = msg;
    li.classList.add("mensagem-default");
    ulMensagem.appendChild(li);
  })
};
