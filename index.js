const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");


frm.addEventListener("submit", (e) => {
e.preventDefault();
const nome = frm.inNome.value;
const idade = Number(frm.inIdade.value);
const linguagem = frm.inLinguagem.value;

resp.innerText = `Olá ${nome}, voce tem ${idade} anos e já está aprendendo a linguagem ${linguagem}`;


});