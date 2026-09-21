const botoes= document.querySelectorAII("button");

    botoes.forEach( function(botao) {
      let curtiu = false;
      botao.addEventlistener("click", botaoClicado),
  function botaoClicado() {
  console.log("fui clicado");
  let texto= botao.querySelector("span");
     if (curtiu === false) { 
     textao.textContent++;
  }
  }
  });
