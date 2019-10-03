import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Shop from './views/Shop.vue';
import Admin from './views/Admin.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/shop'
    },
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
      // name: 'admin',
      component: Admin,
      children: [
        {
          path: '',
          name: 'admin',
          component: () => import('@/components/admin/Product.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'product',
          name: 'adminProduct',
          component: () => import('@/components/admin/Product.vue'),
          meta: { requiresAuth: true }
          // children: [
          //   {
          //     path: ':page',
          //     name: 'productPage',
          //     component: () => import('@/components/admin/Product.vue'),
          //   }
          // ],
        },
        {
          path: 'order',
          name: 'adminOrder',
          component: () => import('@/components/admin/Order.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'offer',
          name: 'adminOffer',
          component: () => import('@/components/admin/Offer.vue'),
          meta: { requiresAuth: true }
        },
      ],
    },
    {
      path: '/shop',
      // name: 'shop',
      component: Shop,
      children: [
        {
          path: '',
          name: 'shop',
          component: () => import('@/components/shop/Products.vue'),
        },
        {
          path: 'product_id=:id',
          name: 'item',
          component: () => import('@/components/shop/Product.vue'),
        },
        {
          path: 'taiwan_old_tiles',
          name: 'taiwan_old_tiles',
          component: () => import('@/components/shop/Products.vue'),
        },
        {
          path: 'mirrors',
          name: 'mirror',
          component: () => import('@/components/shop/Products.vue'),
        },
        {
          path: 'magnets',
          name: 'magnet',
          component: () => import('@/components/shop/Products.vue'),
        },
        {
          path: 'coasters',
          name: 'coaster',
          component: () => import('@/components/shop/Products.vue'),
        },
        {
          path: 'order_id=:id',
          name: 'order',
          component: () => import('@/components/shop/Order.vue'),
        },
      ],
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
