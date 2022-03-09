import React from 'react';
import { allCategories } from '../../api/frontEndActions';
import Spinner from '../Spinner';

class Categories extends React.Component {

   state = { categories: [], loading: true };

   async componentDidMount () {
      const categories = await allCategories();
      this.setState({ categories: categories.data, loading: false });
   }

   renderList = () => {
      const { categories } = this.state;
      const categoryLen = categories.length;
      return categories.map((category, id) =>
         <div key={id} className={`px-6 ${id === categoryLen - 1 ? '' : 'border-b'}`}>
            <li className="flex justify-between py-3 text-left text-xs font-medium uppercase tracking-wide">
               <div>{category.name}</div> <div className="font-bold">creado por: {category.user.name}</div>
            </li>
            <div className="flex space-x-1">
               <div>Productos:</div>
               {
                  category.products.map((product, id) => 
                     <div key={id}>
                        {product.name}
                        {id === category.products.length - 1 ? '' : ' |' }
                     </div>
                  )
               }
               {
                  category.products.length == 0 && <div>no hay resultados...</div> 
               }
            </div>
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
                  <h1 className="text-4xl pt-4">Categorías</h1>
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

export default Categories;
