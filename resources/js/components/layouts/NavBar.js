import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineNewspaper, HiOutlineTag, HiOutlineShoppingBag, HiOutlineBookmark, HiMenu } from "react-icons/hi";

const NavBar = () => {

   const [menu, setMenu] = useState('hidden');

   const hiddenMenu = () => {
      const hidden = menu == 'hidden' ? '' : 'hidden';
      setMenu(hidden);
   };

   return (
      <React.Fragment>
         <div className="md:hidden absolute">
            <button onClick={hiddenMenu}  className="flex p-1 bg-indigo-600 text-white hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
               <HiMenu /> 
            </button>
         </div>
         <nav className={`${menu} text-white bg-indigo-500 min-h-screen w-64 md:block border-r border-gray-300`}>
            <div className="sm:px-8 bg-indigo-600 p-3 px-4 text-xl">
               Menú
            </div>
            <ul className="flex flex-col text-base">
               <NavLink
                  activeClassName="bg-pink-700 "
                  to="/dashboard"
                  className="flex px-4 py-3 border-b border-indigo-200 border-t border-opacity-25 hover:bg-pink-700"
               >
                  <HiOutlineHome size={20} />
                  <p className="mx-2">Home</p>
               </NavLink>

               <NavLink
                  activeClassName="bg-pink-700"
                  to="/category"
                  className="flex px-4 py-3 border-b border-indigo-200 border-opacity-25 hover:bg-pink-700"
               >
                  <HiOutlineBookmark size={20} />
                  <p className="mx-2">Categorías</p>
               </NavLink>

               <NavLink
                  activeClassName="bg-pink-700"
                  to="/product"
                  className="flex px-4 py-3 border-b border-indigo-200 border-opacity-25 hover:bg-pink-700"
               >
                  <HiOutlineShoppingBag size={20} />
                  <p className="mx-2">Productos</p>
               </NavLink>

               <NavLink
                  activeClassName="bg-pink-700"
                  to="/tag"
                  className="flex px-4 py-3 border-b border-indigo-200 border-opacity-25 hover:bg-pink-700"
               >
                  <HiOutlineTag size={20} />
                  <p className="mx-2">Etiquetas</p>
               </NavLink>

               <NavLink
                  activeClassName="bg-pink-700"
                  to="/post"
                  className="flex px-4 py-3 border-b border-indigo-200 border-opacity-25 hover:bg-pink-700"
               >
                  <HiOutlineNewspaper size={20} />
                  <p className="mx-2">Noticias</p>
               </NavLink>
            </ul>
         </nav>
      </React.Fragment>
   );
};

export default NavBar;
