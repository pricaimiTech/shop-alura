let product;
let productQuantity;
let price;
let totalShop = 0; 
const totalPrice = []

cleanShop()

function addShop() {
    product = document.getElementById("produto").value
    productQuantity = document.getElementById("quantidade").value

    if (productQuantity <= 0) {
        alert("A quantidade do produto não pode ser zero")
    } else {
        addProductShop(product, productQuantity)
    }

}

function cleanShop() {
    totalShop = "0,00"
    document.getElementById("quantidade").value = ''
    document.getElementById("lista-produtos").innerHTML = ''
    document.getElementById("valor-total").innerHTML = `R$ ${totalShop}`
}

/**
 * @description função responsável por adicionar o produto, realizar a soma e adicionar ao carrinho
 * @param {*} product produto a ser comprado
 * @param {*} productQuantity quantidade do produto comprado
 */
function addProductShop(product, productQuantity) {
    // zera o valor do campo quantidade
    document.getElementById("quantidade").value = ''
    price = sum(product, productQuantity)
    totalPrice.push(price)
    addListProduct(productQuantity, product, price)
    console.log(`totalprice ${totalPrice}`)
    totalShopPrice(totalPrice)
}

/**
 * 
 * @param {*} product recebe o produto
 * @param {*} productQuantity recebe a quantidade de compra
 * @returns o subtotal da compra do produto
 */
function sum(product, productQuantity) {
    price = regexPrice(product)
    return price * productQuantity
}

/**
 * @description função regex para pegar apenas o valor do texto do produto
 * @param {*} product produto com o valor
 * @returns retorna apenas o valor do produto
 */
function regexPrice(product) {

    let regex = /R\$(\d+)/;
    let resultado = product.match(regex);

    if (resultado) {
        return resultado[1]; // O valor estará no primeiro grupo de captura Saída: 100
    } else {
        alert("Produto fora do estoque");
    }

}

function addListProduct(productQuantity, product, price) {
    document.getElementById("lista-produtos").innerHTML = document.getElementById("lista-produtos").innerHTML +
    `
    <section class="carrinho__produtos__produto">
        <span class="texto-azul">${productQuantity}x</span> ${product.split('-')[0]} <span class="texto-azul">R$ ${price}</span>
    </section>
    `
}


function totalShopPrice(totalPrice) {
    totalShop = 0
    totalPrice.forEach((itemprice)=>{
        totalShop = totalShop+itemprice
    })
    document.getElementById("valor-total").innerHTML = `R$ ${totalShop}`
}