import React from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../api/crudActions';
import Spinner from '../Spinner';
import history from '../../history';
import DataTable from '../datatable/DataTable';
import { columnsProduct } from '../datatable/config';
import { HiOutlineArrowLeft } from "react-icons/hi";

class CategoryShow extends React.Component {

   constructor(props) {
      super(props);
      this.state = { 
         category: [], products: [],
         loading: true
      };
   }

   async componentDidMount() {
      const response = await this.fetchCategory();
      if (response.exception) {
         history.push('/page-404');
         return;
      }
      this.setState({ 
         category: response.data, 
         loading: false,
      });
   }

   fetchCategory = async () => {
      const response = await fetchData("category", this.props.match.params.id);
      return response;
   }

   fetchProductsOfCategory = async () => {
      const response = await this.fetchCategory();
      const result = response.exception ? [] : response.data.products;
      return result;
   }

   render() {
      const { category, loading } = this.state;
      return (
         <React.Fragment>
            {
               loading ? 
                  <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
                     <Spinner />
                  </div> 
               :
                  <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
                     <h1 className="mb-4 font-bold text-2xl">
                        {category.name} tiene los siguientes productos asociados
                     </h1>
                     <DataTable 
                        data={this.fetchProductsOfCategory} 
                        columns={columnsProduct}
                        simpleTable={true}
                     />
                     <div className="mt-6">
                        <Link to='/category' className="inline-flex p-2 pr-4 bg-indigo-600 text-white rounded hover:bg-indigo-900">
                           <HiOutlineArrowLeft size={25} />
                           <p className="pl-3">Volver</p>
                        </Link>
                     </div>
                  </div>
            }
         </React.Fragment>  
      );
   }
};

export default CategoryShow;
