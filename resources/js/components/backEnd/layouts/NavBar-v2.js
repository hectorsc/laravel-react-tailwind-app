import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHome, HiOutlineNewspaper, HiOutlineTag, HiOutlineShoppingBag, HiOutlineBookmark } from "react-icons/hi";
import '../../../../css/navBar.css';

const NavBarV2 = () => {
   
   return (
      <React.Fragment>
         <input type="checkbox" id="menu" />
         <label htmlFor="menu" className="icon">
            <div className="menu"></div>
         </label>
         <nav className="my-nav py-14 w-15 shadow min-h-screen text-white bg-indigo-600">
            <ul>
               <NavLink
                  activeClassName="bg-pink-700 "
                  to="/admin/dashboard"
                  className="flex items-center px-4 py-3 border-b border-indigo-200 border-t border-opacity-25 hover:bg-pink-700"
               >
                  <div className="-mx-0.5">
                     <HiOutlineHome size={28} />
                  </div>
                  <p className="ml-5 text-sm uppercase font-semibold">
                     Home
                  </p>
               </NavLink>

               <NavLink
                  activeClassName="bg-pink-700 "
                  to="/admin/category"
                  className="flex items-center px-4 py-3 border-b border-indigo-200 border-opacity-25 hover:bg-pink-700"
               >
                  <div className="-mx-0.5">
                     <HiOutlineBookmark size={28} />
                  </div>
                  <p className="ml-5 text-sm uppercase font-semibold">
                     Categorías
                  </p>
               </NavLink>

               <NavLink
                  activeClassName="bg-pink-700 "
                  to="/admin/product"
                  className="flex items-center px-4 py-3 border-b border-indigo-200 border-opacity-25 hover:bg-pink-700"
               >
                  <div className="-mx-0.5">
                     <HiOutlineShoppingBag size={28} />
                  </div>
                  <p className="ml-5 text-sm uppercase font-semibold">
                     Productos
                  </p>
               </NavLink>

               <NavLink
                  activeClassName="bg-pink-700 "
                  to="/admin/tag"
                  className="flex items-center px-4 py-3 border-b border-indigo-200 border-opacity-25 hover:bg-pink-700"
               >
                  <div className="-mx-0.5">
                     <HiOutlineTag size={28} />
                  </div>
                  <p className="ml-5 text-sm uppercase font-semibold">
                     Etiquetas
                  </p>
               </NavLink>

               <NavLink
                  activeClassName="bg-pink-700 "
                  to="/admin/post"
                  className="flex items-center px-4 py-3 border-b border-indigo-200 border-opacity-25 hover:bg-pink-700"
               >
                  <div className="-mx-0.5">
                     <HiOutlineNewspaper size={28} />
                  </div>
                  <p className="ml-5 text-sm uppercase font-semibold">
                     Noticias
                  </p>
               </NavLink>
            </ul>
         </nav>
      </React.Fragment>
   );
};

export default NavBarV2;
