const frm = document.querySelector("form");
const btnProduto = document.querySelector("inProduto"); 




const laticinio = [];
const congelados = [];
const doces = [];
const frutas = [];

let resp = "";


function conf() {
    const confirmar = confirm("Você deseja adicionar uma comida\n na seu carrinho de compras ? ");

if (confirmar == true) {
    alert("Informe um produto na caixa de texto abaixo!\nDepois informe a qual seção o produto pertence")


btnProduto.focus();
    
}else{
alert("Até mais!!");
window.close();


}
    
}

frm.addEventListener("submit", (e) => {
e.preventDefault();






});

conf();


