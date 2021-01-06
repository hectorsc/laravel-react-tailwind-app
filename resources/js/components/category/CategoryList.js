import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAllData } from '../../api/crudActions';
import DataTable from '../datatable/DataTable';
import { columns, sweetAlertCategory } from '../datatable/config';

class CategoryList extends React.Component {

   fetchCategories = async () => {
      return await fetchAllData('category');
   }
   
   render() {
      return (
         <div className="my-container w-full mx-auto sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between mb-4">
               <h1 className="font-bold text-2xl">Categorías</h1>
               <Link to='/category/new' className="btn-create">Crear categoría</Link>
            </div>
            <DataTable 
               data={this.fetchCategories} 
               columns={columns}
               path={'category'}
               sweetAlert={sweetAlertCategory} 
            />
         </div>
      );
   }
}

export default CategoryList;
