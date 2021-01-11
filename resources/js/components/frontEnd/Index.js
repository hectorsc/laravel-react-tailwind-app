import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

const Index = ()  => {
   return (
      <div>
         <Home /> 
      </div>
   );
}

export default Index;

if (document.getElementById('front-app')) {
   ReactDOM.render(<Index />, document.getElementById('front-app'));
}