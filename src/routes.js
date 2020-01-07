import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import CategoryPage from './pages/CategoryPage';

export default [
    {
        path: '/',
        name: 'movies.home',
        component: HomePage,
    },
    {
        path: '/watch/:slug',
        name: 'movies.view',
        component: ViewPage,
        props: {
        }
    },
    {
        path: '/category/:slug',
        name: 'movies.category',
        component: CategoryPage,
        props: {
        }
    },

]