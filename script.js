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

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");
btnTemaEscuro.addEventlistener("click" , mudaTema);
function mudaTema(){
    const corpoPagina = document.body
    if(corpoPagina.classlist.contains("tema-escuro")) {
        corpoPagina.classlist.remove ("tema-escuro");
    } else {
        corpoPagina.classlit.add("tema-escuro");
    }
}
