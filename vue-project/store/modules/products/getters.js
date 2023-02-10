const getters = {
    getProductsObject(state){
        return state.products
    },
    getCartObject(state){
        return state.cart
    },
    getactiveProduct(state) {
        return state.activeProduct
    }
}

export default getters