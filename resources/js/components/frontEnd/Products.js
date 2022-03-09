import React from 'react';
import { allProducts } from '../../api/frontEndActions';
import Spinner from '../Spinner';

class Products extends React.Component {

   state = { products: [], loading: true };

   async componentDidMount () {
      const products = await allProducts();
      this.setState({ products: products.data, loading: false });
   }

   renderList = () => {
      const { products } = this.state;
      const productLen = products.length;
      return products.map((product, id) =>
         <div key={id} className={`px-6 ${id === productLen - 1 ? '' : 'border-b'}`}>
            <li className="flex justify-between py-3 text-left text-xs font-medium uppercase tracking-wide">
               <div className="font-bold">{product.name}</div> <div className="font-bold">creado por: {product.user.name}</div>
            </li>
            <div className="flex">Referencia: {product.ref}</div>
            <div className="flex">Precio: {product.price}</div>
            <div className="flex">Precio en oferta: {product.offer_price}</div>
            <div className="flex"> Categoría: {product.category.name}</div>
         </div>
      );
   }
   
   render() {
      const { loading } = this.state;
      return (
         <React.Fragment>
            {
               loading ?
                  <Spinner />
               :
               <>
                  <h1 className="text-4xl pt-4">Productos</h1>
                  <div className="bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                     {
                        this.renderList().length == 0 ?
                           <div className="p-1 py-1">
                              <p className="p-2">no hay resultados...</p>
                           </div>
                        :
                        <div className="p-1 py-1 text-center">
                           <ul>
                              { this.renderList() }
                           </ul> 
                        </div>        
                     }       
                  </div>
               </>
            }
         </React.Fragment> 
      ); 
   }
};

export default Products;
