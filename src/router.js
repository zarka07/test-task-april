import { createRouter, createWebHistory } from "vue-router";
import Main from '@/components/Main.vue';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main,
	},
	// {
	// 	path: '/project3/product/:id',
	// 	name: 'ProductId',
	// 	props: true,
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "Product.vue", webpackMode: "lazy" */'./components/Project3/Product.vue')
	// }, 
	
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;