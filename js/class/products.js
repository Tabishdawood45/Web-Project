class Products {
    #id
    #name
    #price
    #description
    #image

    constructor (id, message) {
        this.#id = id
        this.#name = name
        this.#price = price
        this.#description = description
        this.#image = image
    }

    getId() {
        return this.#id
    }

    getName() {
        return this.#name
    }

    getPrice() {
        return this.#price
    }

    getDescription() {
        return this.#description
    }

    getImage() {
        return this.#image
    }
}

export {Products}


