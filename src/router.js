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
	},
	{
		path: '/getdata',
		name: 'get-data',
		component: () => import(/* webpackChunkName: "GetData.vue", webpackMode: "lazy" */'./views/GetData.vue')
	} 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;