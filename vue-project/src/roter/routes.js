import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Products from '../views/Products.vue'
import displayProduct from '../components/displayProduct.vue'
import Nbg from '../views/Nbg.vue'


const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/products',
        name: "Products",
        component: Products,
    },
    {
        path: '/cart',
        name: "Cart",
        component: Cart
    },
    {
        path: '/product/:id',
        name: "Product",
        component: displayProduct
    },
    {
        path: '/Nbg',
        name: "Nbg",
        component: Nbg
    },
]

export default routes