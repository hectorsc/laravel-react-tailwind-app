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
      this.setState({ 
         product: product.data, 
         categories: this.fixedDataForSelect(categories.data),
         categoryActive: {
            value: product.data.category.id, 
            label: product.data.category.name
         }
      });
   }

   fixedDataForSelect(category) {
      let data = [];
      category.map((item) => {
         data = [ ...data, { value: item.id, label: item.name }];
      })
      return data;
   }

   onSubmit = async formValues => {
      return await edit('product', this.state.product.id, formValues);
   }

   render() {
      const { product, categories, categoryActive } = this.state;
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
 
            <div className="bg-white shadow-xl sm:rounded-lg">
               <div className="p-6 sm:px-10 bg-white">
                  <ProductForm 
                     onSubmit={this.onSubmit} 
                     initialValues={product}
                     categories={categories}
                     categoryActive={categoryActive}
                  />
               </div>
            </div>
         </div>
      );
   }
};

export default ProductEdit;
