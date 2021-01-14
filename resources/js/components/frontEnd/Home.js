import React from 'react';
import { allCategories } from '../../api/frontEndActions';

class Home extends React.Component {

   async componentDidMount () {
      const response = await allCategories();
      console.log('OK', response);

   }
   
   render() {
      return (
         <div className="bg-indigo-500 p-1 py-1 text-center">
            <p>Soy un componente Home de React</p>  
         </div>
      ); 
   }
};

export default Home;
