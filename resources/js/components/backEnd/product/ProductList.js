import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAllData } from '../../../api/crudActions';
import DataTable from '../datatable/DataTable';
import { columnsProduct, sweetAlertProduct } from '../datatable/config';

class ProductList extends React.Component {

   fetchProducts = async () => {
      const response = await fetchAllData('product');
      return response.data;
   }
   
   render() {
      return (
         <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between mb-4">
               <h1 className="font-bold text-2xl">Productos</h1>
               <Link to='/admin/product/new' className="btn-create">Crear producto</Link>
            </div>
            <DataTable 
               data={this.fetchProducts} 
               columns={columnsProduct}
               path={'product'}
               sweetAlert={sweetAlertProduct} 
            />
         </div>
      );
   }
}

export default ProductList;
