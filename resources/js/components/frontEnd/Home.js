import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineNewspaper, HiOutlineTag, HiOutlineShoppingBag, HiOutlineBookmark } from "react-icons/hi";

class Home extends React.Component {

   render() {
      return (
         <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="p-6">
                  <div className="flex items-center">
                     <HiOutlineBookmark className="text-gray-500" size={28} />
                     <div className="ml-4 text-lg leading-7 font-semibold">
                        <Link to="/categorias" className="underline text-gray-900 dark:text-white">Categorías</Link>
                     </div>
                  </div>

                  <div className="ml-12">
                     <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                        Todas las categorías creadas en el sistema con sus productos y el usuario al que pertenece la categoría.
                     </div>
                  </div>
               </div>
               
               <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                  <div className="flex items-center">
                     <HiOutlineShoppingBag className="text-gray-500" size={28} />
                     <div className="ml-4 text-lg leading-7 font-semibold">
                        <Link to="/productos" className="underline text-gray-900 dark:text-white">Productos</Link>
                     </div>
                  </div>
               
                  <div className="ml-12">
                     <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                        Todos los productos creados en el sistema con su categoría y el usuario al que pertenece el producto.
                     </div>
                  </div>
               </div>

               <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                     <HiOutlineTag className="text-gray-500" size={28} />
                     <div className="ml-4 text-lg leading-7 font-semibold">
                        <Link to="/etiquetas" className="underline text-gray-900 dark:text-white">Etiquetas</Link>
                     </div>
                  </div>

                  <div className="ml-12">
                     <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                        Todas las etiquetas creadas en el sistema con sus noticias y el usuario al que pertenece la etiqueta.
                     </div>
                  </div>
               </div>

               <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                  <div className="flex items-center">
                     <HiOutlineNewspaper className="text-gray-500" size={28} />
                     <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                        <Link to="/noticias" className="underline text-gray-900 dark:text-white">Noticias</Link>
                     </div>
                  </div>

                  <div className="ml-12">
                     <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                        Todas las noticias creadas en el sistema con sus etiquetas y el usuario al que pertenece la noticia.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      ); 
   }
};

export default Home;
