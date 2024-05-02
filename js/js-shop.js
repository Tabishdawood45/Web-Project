

let basket = JSON.parse(localStorage.getItem("data")) || [];


const productContainer = document.querySelector('.products-container')

fetch('http://localhost:3001', {
    method: 'GET',
    headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
    }
}).then(res => res.json())
.then(data => {
    data.forEach(product => {
        
        const div = document.createElement('div')
        div.classList.add('item')
        div.setAttribute('product-id', product.id)
        div.innerHTML = 
        `
                <img width="220" height="280" src="${product.image}" alt="">
                <div class="details">
                    <h4>${product.name}</h4>
                    <p>${product.description}</p>
                    <div class="price">
                        <h2>€ ${product.price}</h2>
                    </div>
                    <button onclick="increment(${product.id})" class="buy-button"> Add to cart</button>
                </div>
        `
        productContainer.appendChild(div)
        
    });
}) 




let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    
    if (search === undefined) {
        basket.push({
        id: selectedItem.id,
        item: 1,
        });
    } else {
        search.item += 1;
    }
    
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};


let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };

