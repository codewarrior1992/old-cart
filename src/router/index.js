import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/admin',
		component: () => import('../views/Admin.vue'),
		children: [
			{
				name: 'Home',
				path: '',
				component: () => import('../components/admin/Home.vue'),
			},
			{
				name: 'Products',
				path: 'products',
				component: () => import('../components/admin/Products.vue'),
			},
			{
				name: 'Orders',
				path: 'orders',
				component: () => import('../components/admin/Orders.vue'),
			},
			{
				name: 'Coupons',
				path: 'coupons',
				component: () => import('../components/admin/Coupons.vue'),
			},
		],
	},
];

const router = new VueRouter({
	// mode: 'history',
	// linkActiveClass: 'linkActive',
	routes,
});

export default router;
