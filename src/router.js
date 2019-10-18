import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Shop from './views/Shop.vue';
import Admin from './views/Admin.vue';
import Products from '@/components/shop/Products.vue';
import Product from '@/components/shop/Product.vue';
import Order from '@/components/shop/Order.vue';
import Sidebar from '@/components/shop/Sidebar.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
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
      component: Admin,
      children: [
        {
          path: '',
          name: 'admin',
          component: () => import('@/components/admin/Product.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'product',
          name: 'adminProduct',
          component: () => import('@/components/admin/Product.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'order',
          name: 'adminOrder',
          component: () => import('@/components/admin/Order.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'offer',
          name: 'adminOffer',
          component: () => import('@/components/admin/Offer.vue'),
          meta: { requiresAuth: true },
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
          components: {
            default: Products,
            sidebar: Sidebar,
          },
        },
        {
          path: 'product_id=:id',
          name: 'item',
          components: {
            default: Product,
            sidebar: Sidebar,
          },
          meta: { scroll: true },
        },
        {
          path: 'all',
          name: 'all',
          components: {
            default: Products,
            sidebar: Sidebar,
          },
          meta: { scroll: true },
        },
        {
          path: 'taiwan_old_tiles',
          name: 'taiwan_old_tile',
          components: {
            default: Products,
            sidebar: Sidebar,
          },
          meta: { scroll: true },
        },
        {
          path: 'mirrors',
          name: 'mirror',
          components: {
            default: Products,
            sidebar: Sidebar,
          },
          meta: { scroll: true },
        },
        {
          path: 'magnets',
          name: 'magnet',
          components: {
            default: Products,
            sidebar: Sidebar,
          },
          meta: { scroll: true },
        },
        {
          path: 'coasters',
          name: 'coaster',
          components: {
            default: Products,
            sidebar: Sidebar,
          },
          meta: { scroll: true },
        },
        {
          path: 'order_id=:id',
          name: 'order',
          components: {
            default: Order,
            sidebar: Sidebar,
          },
          meta: { scroll: true },
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.matched.some(record => record.meta.scroll)) {
      return { x: 0, y: 510 };
    }
    return { x: 0, y: 0 };
  },
});
