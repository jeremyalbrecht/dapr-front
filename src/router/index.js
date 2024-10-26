import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ArticlesView from '../views/ArticleView.vue';
import OrdersView from '../views/OrdersView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/articles', component: ArticlesView },
    { path: '/orders', component: OrdersView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
