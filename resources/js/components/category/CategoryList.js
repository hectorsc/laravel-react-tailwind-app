import { fromPairs } from 'lodash';
import React from 'react';
import { HiOutlineTrash, HiOutlinePencilAlt, HiOutlineInformationCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';

class CategoryList extends React.Component {

   render() {
      return (
         <div className="my-container w-full mx-auto sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between mb-4">
               <h1 className="font-bold text-2xl">Categorías</h1>
               <Link to='/category/new' className="btn-create">Crear categoría</Link>

            </div>

            
            {/* <div className="flex flex-col"> */}
               <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                     <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">


                     <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              
              <td className="flex items-center justify-end gap-1 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="bg-pink-700 rounded p-2 text-white hover:bg-pink-900">
                  <HiOutlineInformationCircle size={22} />

                </a>
                <a href="#" className="bg-blue-700 rounded p-2 text-white hover:bg-blue-900">
                  <HiOutlinePencilAlt size={22} />

                </a>
                <button className="bg-red-700 rounded p-2 text-white hover:bg-red-900 active:bg-red-900 focus:outline-none">
                  <HiOutlineTrash size={22} />

                </button>
              </td>
            </tr>

           
          </tbody>
        </table>

                                    
                     </div>
                  </div>
               </div>
            {/* </div> */}
         </div>
      );
   }
}

export default CategoryList;
