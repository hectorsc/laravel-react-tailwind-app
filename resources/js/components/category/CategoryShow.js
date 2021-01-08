import React from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../api/crudActions';
import Spinner from '../Spinner';
import history from '../../history';

class CategoryShow extends React.Component {

   constructor(props) {
      super(props);
      this.state = { 
         category: [], products: [],
         loading: true, result: ''
      };
   }

   async componentDidMount() {
      const response = await fetchData('category', this.props.match.params.id);
      console.log('esto.....', response);
      response.exception && history.push('/page-404');
      let result = response.data.products.length == 0 ? 'no hay resultados...': '';
      this.setState({ 
         category: response, 
         products:response.products,
         loading: false,
         result
      });
   }

   renderList() {
      return this.state.products.map(product => {
         return(
            <div className="item" key={product.id}>
               <div className="content" style={{ paddingTop: '10px' }}>
                  <strong>{product.name}</strong> &nbsp; | &nbsp; 
                  <strong>REF:</strong> {product.REF} &nbsp; | &nbsp; 
                  <strong>Precio:</strong> {product.price} &nbsp; | &nbsp;
                  <strong>Precio en oferta :</strong> {product.offer_price}
               </div>
            </div>
         );
      })
   }

   render() {
      const { category, loading, result } = this.state;
      return (
         <React.Fragment>
            {
               loading ? <Spinner /> :
               <div className="ui card" style={{ width: '100%' }}>
                  <div className="content">
                     <div className="header">{category.name}</div>
                  </div>
                  <div className="content"> 
                     <div className="my-list-divided ui list divided segment" style={{ padding: '10px'}} >
                        {/* {this.renderList()} */}
                        {result}
                     </div>
                  </div>
                  <div className="extra content">
                     <Link to={'/category'} className="ui labeled icon button primary">
                        <i className="left arrow icon"></i>
                        Volver
                     </Link>
                  </div>
               </div>
            }
         </React.Fragment>
      );
   }
};

export default CategoryShow;
