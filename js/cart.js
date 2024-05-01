let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");



let basket = JSON.parse(localStorage.getItem("data")) || [];



let add = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((items)=> items.item).reduce((x, y) => x + y, 0)
}    


let generateCartItem = () => {
    if(basket.length !== 0) {
        return (shoppingCart.innerHTML = basket
            .map((items) => {
                console.log(items);
                let {id, item} = items
                let search = shopItemsData.find((data) => data.id === id) || []
                
                return `
                <div class="cart-item">
                    <img width="100" src="${search.img}" alt=""/>
                    <div className="title-price">
                        <h4>
                            <p>${search.name}</p>
                        </h4>
                        <i class="bi bi-x"></i>
                    </div>
                    <div className="cart-buttons"></div>
                </div>`
            }).join(""))
    } else {
        shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href="shop.html">
            <button class="homeBtn">Back to Shop</button>
        </a>
        `
    }
}

add()
generateCartItem()