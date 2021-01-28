import Home from './Home';

import CategoryList from './category/CategoryList';
import CategoryCreate from './category/CategoryCreate';
import CategoryEdit from './category/CategoryEdit';
import CategoryShow from './category/CategoryShow';

import ProductList from './product/ProductList';
import ProductCreate from './product/ProductCreate';
import ProductEdit from './product/ProductEdit';
import ProductShow from './product/ProductShow';

import TagList from './tag/TagList';
import TagCreate from './tag/TagCreate';
import TagEdit from './tag/TagEdit';
import TagShow from './tag/TagShow';

import PostList from './post/PostList';
import PostCreate from './post/PostCreate';
import PostEdit from './post/PostEdit';
import PostShow from './post/PostShow';

import NotFound from '../NotFound';

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

   { path: '/tag', component: TagList },
   { path: '/tag/new', component: TagCreate},
   { path: '/tag/edit/:id', component: TagEdit },
   { path: '/tag/:id', component: TagShow },

   { path: '/post', component: PostList },
   { path: '/post/new', component: PostCreate},
   { path: '/post/edit/:id', component: PostEdit },
   { path: '/post/:id', component: PostShow },

   { path: '*', component: NotFound }
];