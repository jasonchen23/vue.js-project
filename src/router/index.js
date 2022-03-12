import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import RegisterView from '../views/RegisterView.vue'
import RegisterView from '../views/LoginView.vue'
const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/products/:productId',
    name: 'product',
    component: ProductView
  },
  {
    path: '/register',
    name: 'registerView',
    component: RegisterView
  },
    {
      path: '/login',
      name: 'loginView',
      component: LoginView
    },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
