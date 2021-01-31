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
   { path: '/admin/dashboard', component: Home },

   { path: '/admin/category', component: CategoryList },
   { path: '/admin/category/new', component: CategoryCreate},
   { path: '/admin/category/edit/:id', component: CategoryEdit },
   { path: '/admin/category/:id', component: CategoryShow },

   { path: '/admin/product', component: ProductList },
   { path: '/admin/product/new', component: ProductCreate},
   { path: '/admin/product/edit/:id', component: ProductEdit },
   { path: '/admin/product/:id', component: ProductShow },

   { path: '/admin/tag', component: TagList },
   { path: '/admin/tag/new', component: TagCreate},
   { path: '/admin/tag/edit/:id', component: TagEdit },
   { path: '/admin/tag/:id', component: TagShow },

   { path: '/admin/post', component: PostList },
   { path: '/admin/post/new', component: PostCreate},
   { path: '/admin/post/edit/:id', component: PostEdit },
   { path: '/admin/post/:id', component: PostShow },

   { path: '*', component: NotFound }
];