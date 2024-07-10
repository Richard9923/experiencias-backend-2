const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');


async function showProdutos () {

    try {
        const res = await fetch('http://localhost:8000/api/products');
        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }
    
        const produtos = await res.json();
        output.innerHTML = '';
    
        produtos.forEach( (produto) => {
            const produtoEl = document.createElement('div');
            produtoEl.textContent = produto.name;
            output.appendChild(produtoEl);
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

//
button.addEventListener('click', showProdutos);