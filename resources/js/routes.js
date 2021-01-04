import Home from "./components/Home";

import CategoryList from './components/category/CategoryList';
import CategoryCreate from "./components/category/CategoryCreate";


export const routes = [
   { path: '/dashboard', component: Home },

   { path: '/category', component: CategoryList },
   { path: '/category/new', component: CategoryCreate},
];