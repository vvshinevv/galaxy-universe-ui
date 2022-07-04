import { createWebHistory, createRouter } from 'vue-router';
import { trackRouter } from 'vue-gtag-next';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: 'home' */ '@/components/Home'),
    },
    {
        path: '/region',
        name: 'Region',
        component: () =>
            import( /* webpackChunkName: 'region' */'@/components/region/Region'),
    },
    {
        path: '/region2',
        name: 'Region2',
        component: () =>
            import( /* webpackChunkName: 'region2' */'@/components/region2/Region2'),
    },
    {
        path: '/region3',
        name: 'Region3',
        component: () =>
            import(/* webpackChunkName: 'region3' */'@/components/region3/Region3'),
    },
    {
        path: '/*',
        redirect: 'Home',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
trackRouter(router);
export default router;
