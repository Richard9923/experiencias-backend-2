
document.addEventListener('DOMContentLoaded', () => {
    const output = document.querySelector('#output');
    const button = document.querySelector('#get-posts-btn');

    async function showProdutos () {
        try {
            const res = await fetch("http://localhost:8000/api/products");
            if (!res.ok) {
                throw new Error ("erro 1")
            }

            const produtos = await res.json();
            output.innerHTML = '';

            for (let i = 0; i < produtos.length; i++) {
                let produto = produtos[i];
                const produtoEl = document.createElement('div');
                produtoEl.textContent = produto.name;
                output.appendChild(produtoEl);

            }
        } catch (error) {
            console.log("Não foi possível fetching nos produtos")
        }
    }
    button.addEventListener('click', showProdutos);
});