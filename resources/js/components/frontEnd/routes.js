import Home from './Home';
import Categories from './Categories';
import Products from './Products';
import Tags from './Tags';
import Posts from './Posts';

import NotFound from '../NotFound';

export const routes = [
   { path: '/', component: Home },
   { path: '/categorias', component: Categories },
   { path: '/productos', component: Products },
   { path: '/etiquetas', component: Tags },
   { path: '/noticias', component: Posts },
   { path: '*', component: NotFound }
];