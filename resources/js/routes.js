import Home from "./components/Home";

import CategoryList from './components/category/CategoryList';
import CategoryCreate from './components/category/CategoryCreate';
import CategoryEdit from './components/category/CategoryEdit';
import CategoryShow from './components/category/CategoryShow';

export const routes = [
   { path: '/dashboard', component: Home },

   { path: '/category', component: CategoryList },
   { path: '/category/new', component: CategoryCreate},
   { path: '/category/edit/:id', component: CategoryEdit },
   { path: '/category/:id', component: CategoryShow },
];