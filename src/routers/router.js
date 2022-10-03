import { createWebHistory, createRouter } from 'vue-router';
import { trackRouter } from 'vue-gtag-next';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import( /* webpackChunkName: 'region' */'@/components/region/Region'),
    },
    {
        path: '/firstlight',
        name: 'Region3',
        component: () =>
            import( /* webpackChunkName: 'region3' */'@/components/region3/Region3'),
    },
    {
        path: '/rainbowshadow',
        name: 'Region2',
        component: () =>
            import( /* webpackChunkName: 'region2' */'@/components/region2/Region2'),
    },
    {
        path: '/avadream',
        name: 'Region',
        component: () =>
            import(/* webpackChunkName: 'region' */'@/components/region/Region'),
    },
    {
        path: '/*',
        redirect: 'Region3',
    },
];

const router = createRouter({
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
    history: createWebHistory(),
    routes,
});
trackRouter(router);
export default router;
