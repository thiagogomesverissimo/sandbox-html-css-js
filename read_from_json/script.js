let endpoint = 'https://thiagogomesverissimo.github.io/sandbox-html-css-js/products.json'

buscaProdutosDoEndpoint();

async function buscaProdutosDoEndpoint(){
    let res = await fetch(endpoint);
    let products = await res.json();

    montaLista(products);
}

function montaLista(products){
    products.forEach(product => montaItem(product));
}

function montaItem(product){
    
    let ul_produtos = document.getElementById('produtos__lista');

    ul_produtos.innerHTML += `
        <li class="produtos__lista__item">
            <div class="produtos__lista__item__conteudo">
                <img src="${product.img}" alt="Uma foto qualquer de computador">
                <div class="produtos__lista__conteudo__informacoes">
                    <h3>${product.nome}</h3>
                    <p>${product.descricao}</p>
                    <h4>${product.valorComDesconto} <s>${product.valorSemDesconto}</s></h4>
                    <p>${product.tipoEntrega}</p>
                </div>
            </div>
        </li>    
    `
}

