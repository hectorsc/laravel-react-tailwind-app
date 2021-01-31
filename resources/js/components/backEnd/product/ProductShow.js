import React from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../../api/crudActions';
import Spinner from '../../Spinner';
import history from '../../../history';
import { HiOutlineArrowLeft } from "react-icons/hi";

class ProductShow extends React.Component {

   constructor(props) {
      super(props);
      this.state = { 
         product: [], loading: true
      };
   }

   async componentDidMount() {
      const response = await fetchData('product', this.props.match.params.id);
      if (response.exception) {
         history.push('/admin/page-404');
         return;
      }
      this.setState({ 
         product: response.data, 
         loading: false,
      });
   }

   render() {
      const { product, loading } = this.state;
      return (
         <React.Fragment>
            {
               loading ? 
                  <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
                     <Spinner />
                  </div> 
               :
                  <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
                     <h1 className="mb-2 font-bold text-2xl">{product.name}</h1>
                     <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="p-6 sm:px-10 bg-white">
                           <div className="flex flex-col text-gray-500">
                              <div className="inline-flex">
                                 <h3 className="text-xl font-bold">Categoría:</h3>
                                 <p className="pl-2 text-xl">{product.category.name}</p>
                              </div>
                              <div className="inline-flex">
                                 <h3 className="text-xl font-bold">Referencia:</h3>
                                 <p className="pl-2 text-xl">{product.ref}</p>
                              </div>
                              <div className="inline-flex">
                                 <h3 className="text-xl font-bold">Precio:</h3>
                                 <p className="pl-2 text-xl">{product.price} €</p>
                              </div>
                              <div className="inline-flex">
                                 <h3 className="text-xl font-bold">Precio en oferta:</h3>
                                 <p className="pl-2 text-xl">{product.offer_price} €</p>
                              </div>
                           </div>
                           <div className="mt-6">
                              <Link to='/admin/product' className="inline-flex p-2 pr-4 bg-indigo-600 text-white rounded hover:bg-indigo-900">
                                 <HiOutlineArrowLeft size={25} />
                                 <p className="pl-3">Volver</p>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
            }
         </React.Fragment>  
      );
   }
};

export default ProductShow;
