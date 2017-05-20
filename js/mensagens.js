function enviaMensagemErro(erros) {
  var ulErro = document.querySelector("#mensagem-erro");
  ulErro.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    li.classList.add("mensagem-erro");
    ulErro.appendChild(li);
  });
};

function enviaMensagem(mensagens) {
  var ulMensagem = document.querySelector("#mensagem");
  ulMensagem.innerHTML = "";

  mensagens.forEach(function (mensagem) {
    var li = document.createElement("li");
    li.textContent = mensagem;
    li.classList.add("mensagem-default");
    ulMensagem.appendChild(li);
  });
};
