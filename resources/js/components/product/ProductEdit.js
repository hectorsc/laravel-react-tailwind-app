import React from 'react';
import { Link } from 'react-router-dom';
import { fetchData, edit, fetchAllData } from '../../api/crudActions';
import history from '../../history';
import ProductForm from "./ProductForm";

class ProductEdit extends React.Component {

   constructor(props) {
      super(props);
      this.state = { product: [], categories: [] }; 
   }

   componentDidMount = async () => {
      const product = await fetchData('product', this.props.match.params.id);
      if (product.exception) {
         history.push('/page-404');
         return;
      }
      const categories = await fetchAllData('category');
      this.setState({ product: product.data, categories: categories.data });
   }

   onSubmit = async formValues => {
      return await edit('product', this.state.product.id, formValues);
   }

   render() {
      return (
         <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
            <h1 className="mb-2 font-bold text-2xl">
               <Link
                  to='/product'
                  className="text-indigo-500 hover:text-indigo-600"
               >
                  Productos
               </Link>{" "}
               <span className="text-indigo-400 font-medium">/</span> Editar
            </h1>
 
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
               <div className="p-6 sm:px-10 bg-white">
                  <ProductForm 
                     onSubmit={this.onSubmit} 
                     initialValues={this.state.product}
                     categories={this.state.categories}
                  />
               </div>
            </div>
         </div>
      );
   }
};

export default ProductEdit;
