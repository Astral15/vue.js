import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

const productsModule = {
    state() {
        return {
            activeProduct: null ,
            products: {
                name: "პროდუქტები",
                action: true,
                data: [
                    { id: 1, name: "Product 1", price: 100 , description: 'random description'},
                    { id: 2, name: "Product 2", price: 200 , description: 'random description'},
                    { id: 3, name: "Product 3", price: 300 , description: 'random description'},
                    { id: 4, name: "Product 4", price: 400 , description: 'random description'},
                    { id: 5, name: "Product 5", price: 500 , description: 'random description'},
                ]
            },
            cart: {
                name: "კალათა",
                action: false,
                data: []
            },
        }
    },
    getters,
    mutations,
    actions
}

export default productsModule