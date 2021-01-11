import React from 'react';
import { allCategories } from '../../api/frontEndActions';

class Home extends React.Component {

   async componentDidMount () {
      const response = await allCategories();
      console.log('OK', response);

   }
   
   render() {
      return (
         <div>
            <p>Soy un componente Home de React</p>  
         </div>
      ); 
   }
};

export default Home;
