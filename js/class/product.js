import { Products } from "./products.js";


class Product {
    #products = []
    #backend_url = ''

    constructor(url) {
        this.#backend_url = url
    }

    getProducts = () => {
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url)
            .then(response => response.json())
            .then(json => {
                resolve(this.#readJson(json))
            }), (error) => {
                reject(error)
            }
        })
    }

    #readJson = (json) => {
        json.array.forEach(node => {
            const post = new Product(node.id, node.name, node.price, node.description, node.image)
            this.#products.push(product)
        });
    }
}

export {Product}