import React from 'react';
import { Link } from 'react-router-dom';
import ProductForm from './ProductForm';
import { create, fetchAllData } from '../../api/crudActions';

class ProductCreate extends React.Component {

   state = { categories: [], categoryEmpty: false };

   onSubmit = async formValues => {
      return await create('product', formValues);
   }

   async componentDidMount () {
      const response = await fetchAllData('category');
      this.setState({ categories: response.data, categoryEmpty: true }); 
   }

   render() {
      const { categories, categoryEmpty } = this.state;
      return (
         <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
            <h1 className="mb-2 font-bold text-2xl">
               <Link
                  to='/product'
                  className="text-indigo-500 hover:text-indigo-600"
               >
                  Productos
               </Link>{" "}
               <span className="text-indigo-400 font-medium">/</span> Crear
            </h1>
 
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
               <div className="p-6 sm:px-10 bg-white">
                  <ProductForm 
                     onSubmit={this.onSubmit}
                     categories={categories} 
                  />
               </div>
            </div>

            {
               categories.length == 0 && categoryEmpty &&
                  <div className="ui negative message">
                     <div className="header">
                        ATENCIÓN! NO EXISTEN CATEGORÍAS.
                     </div>
                     <p>Para poder crear un producto tiene que crear primero una categoría.</p>
                  </div>
            }


            
         </div>
      );
   }
};

export default ProductCreate;
