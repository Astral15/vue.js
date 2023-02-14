import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'
import Products from '../views/Products.vue'
import displayProduct from '../components/displayProduct.vue'
import NbgComponent from '../views/NbgComponent.vue'


const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/about',
        name: "About",
        component: About
    },
    {
        path: '/contact',
        name: "Contact",
        component: Contact
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
        path: '/nbg',
        name: "Nbg",
        component: () => ('...NbgComponent')
    },
]

export default routes