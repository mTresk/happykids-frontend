import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/grade/:slug',
		name: 'grade',
		component: () => import('@/views/Grade.vue'),
	},
	{
		path: '/section',
		name: 'section',
		component: () => import('@/views/Section.vue'),
	},
	{
		path: '/policy',
		name: 'policy',
		component: () => import('@/views/Policy.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/404.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
				top: 65,
			}
		} else
			return {
				top: 0,
				behavior: 'smooth',
			}
	},
	routes,
})

export default router
