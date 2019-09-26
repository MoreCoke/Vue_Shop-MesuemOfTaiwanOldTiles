import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Shop from './views/Shop.vue';
import Cart from './views/Cart.vue';
import Admin from './views/Admin.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'product',
          name: 'product',
          component: () => import('@/components/admin/Product.vue'),
          // children: [
          //   {
          //     path: ':page',
          //     name: 'productPage',
          //   }
          // ],
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('@/components/admin/Order.vue'),
        },
        {
          path: 'offer',
          name: 'offer',
          component: () => import('@/components/admin/Offer.vue'),
        },
      ],
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '',
          name: 'shop',
          component: () => import('@/components/shop/Products.vue'),
        },
        {
          path: ':id',
          name: 'item',
          component: () => import('@/components/shop/Product.vue'),
          // props: ['product',],
        },
      ],
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
