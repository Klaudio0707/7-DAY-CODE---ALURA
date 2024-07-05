const frm = document.querySelector("form");
const btnRemov = document.querySelector("#btnRemov"); 

//select das tags de saída no html

const outFruta = document.querySelector("#outFrutas");
const outCongelados = document.querySelector("#outCongelados");
const outDoces = document.querySelector("#outDoces");
const outLaticinios = document.querySelector("#outLaticinios");


// vetores que vao ser usados para armazena os produtos
const laticinio = [];
const congelados = [];
const doces = [];
const frutas = [];


// variaveis que são usadas para armazenar informações durante a execução do codigo

let categoria = "";
let produto = "";


frm.addEventListener("submit", (e) => {
e.preventDefault();

const inProduto = (frm.inProduto.value);

 categoria = prompt("Escolha uma categoria para seu produto\n Laticinio -  Doces - Congelados - Frutas");

switch (categoria) {
    case value:
        
        break;

    default:
        break;
}



});
