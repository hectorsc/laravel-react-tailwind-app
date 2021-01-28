import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';

const Index = ()  => {
   return (
      <div>
         <App /> 
      </div>
   );
}

export default Index;

if (document.getElementById('front-app')) {
   ReactDOM.render(<Index />, document.getElementById('front-app'));
}