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
        path: '/avadream',
        name: 'Region',
        component: () =>
            import( /* webpackChunkName: 'region' */'@/components/region/Region'),
    },
    {
        path: '/rainbowshadow',
        name: 'Region2',
        component: () =>
            import( /* webpackChunkName: 'region2' */'@/components/region2/Region2'),
    },
    {
        path: '/avadream',
        name: 'Region3',
        component: () =>
            import(/* webpackChunkName: 'region3' */'@/components/region3/Region3'),
    },
    {
        path: '/*',
        redirect: 'Region',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
trackRouter(router);
export default router;
