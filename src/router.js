import { createRouter, createWebHistory } from "vue-router";


const routes = [
	{
		path: '/',
		name: 'Main',
		component: () => import(/* webpackChunkName: "Main.vue", webpackMode: "lazy" */'./views/Main.vue')
	},
	{
		path: '/dataprocesing',
		name: 'data-processing',
		component: () => import(/* webpackChunkName: "DataProcessing.vue", webpackMode: "lazy" */'./views/DataProcessing.vue')
	}
	
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