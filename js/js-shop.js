
let products = document.getElementById('products')

console.log(products)

let shopItemsData = [{
    id: "1",
    name: "SCULPT ZIP THROUGH JACKET",
    price: 35,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "images/sport clothes1.jpg"
},
{
    id: "2",
    name: "WORKOUT SHIRT",
    price: 20,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "images/sport clothes 2.jpg"
},
{
    id: "3",
    name: "HEVYWEIGHT HOODY",
    price: 60,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "images/sport clothes 3.jpg"
},
{
    id: "4",
    name: "OUTDOOR SPORT SUIT",
    price: 70,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "images/sport clothes 4.jpg"
}]

let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop = () => {
    return (products.innerHTML = shopItemsData.map((item) => {
        
        return `
        <div id=product-id-${item.id} class="item">
                <img width="220" height="280" src="${item.img}" alt="">
                <div class="details">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <div class="price">
                        <h2>€ ${item.price}</h2>
                    </div>
                    <button onclick="increment(${item.id})" class="buy-button"> Add to cart</button>
                </div>
            </div>
            `
    }).join(""));
};

let increment = (id) => {
    let selectedItem = id
    let search = basket.find((items)=> items.id === selectedItem.id);
    if(search === undefined) {
        basket.push({
        id: selectedItem.id,
        item: 1
    })
    } else {
        search.item += 1
    }
    localStorage.setItem("data", JSON.stringify(basket))
    update(selectedItem.id)
}

let update = (id) => {
    let search = basket.find((items)=> items.id === id)
    console.log(search.item)
    add()
}

let add = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((items)=> items.item).reduce((x, y) => x + y, 0)
}    

generateShop()
add()