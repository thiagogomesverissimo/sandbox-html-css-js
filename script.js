let endpoint = 'https://thiagogomesverissimo.github.io/sandbox-html-css-js/products.json'

buscaProdutosDoEndpoint()

async function buscaProdutosDoEndpoint(){
    let res = await fetch(endpoint)
    let products = res.json()
    console.log(products)
}