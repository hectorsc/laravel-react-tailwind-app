import Home from "./components/Home";

import CategoryList from './components/category/CategoryList';
import CategoryCreate from './components/category/CategoryCreate';
import CategoryEdit from './components/category/CategoryEdit';
import CategoryShow from './components/category/CategoryShow';
import ProductList from './components/product/ProductList';
import ProductCreate from './components/product/ProductCreate';
import ProductEdit from './components/product/ProductEdit';
import ProductShow from './components/product/ProductShow';

import NotFound from './components/NotFound';

export const routes = [
   { path: '/dashboard', component: Home },

   { path: '/category', component: CategoryList },
   { path: '/category/new', component: CategoryCreate},
   { path: '/category/edit/:id', component: CategoryEdit },
   { path: '/category/:id', component: CategoryShow },

   { path: '/product', component: ProductList },
   { path: '/product/new', component: ProductCreate},
   { path: '/product/edit/:id', component: ProductEdit },
   { path: '/product/:id', component: ProductShow },

   { path: '*', component: NotFound }
];