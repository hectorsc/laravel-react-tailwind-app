import React from 'react';
import { Link } from 'react-router-dom';
import TagForm from './TagForm';
import { create } from '../../api/crudActions';

class TagCreate extends React.Component {

   onSubmit = async formValues => {
      return await create('tag', formValues);
   }

   render() {
      return (
         <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
            <h1 className="mb-2 font-bold text-2xl">
               <Link
                  to='/tag'
                  className="text-indigo-500 hover:text-indigo-600"
               >
                  Etiquetas
               </Link>{" "}
               <span className="text-indigo-400 font-medium">/</span> Crear
            </h1>
 
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
               <div className="p-6 sm:px-10 bg-white">
                  <TagForm onSubmit={this.onSubmit} />
               </div>
            </div>
         </div>
      );
   }
};

export default TagCreate;