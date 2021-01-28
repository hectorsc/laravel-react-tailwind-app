import React from 'react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import { create, fetchAllData } from '../../../api/crudActions';

class PostCreate extends React.Component {

   state = { tags: [], tagEmpty: false };

   onSubmit = async formValues => {
      return await create('post', formValues);
   }

   async componentDidMount () {
      const response = await fetchAllData('tag');
      const tags = this.fixedDataForSelect(response.data);
      this.setState({ tags, tagEmpty: true }); 
   }

   fixedDataForSelect(tags) {
      let data = [];
      tags.map((tag) => {
         data = [ ...data, { value: tag.id, label: tag.name }];
      })
      return data;
   }

   render() {
      const { tags, tagEmpty } = this.state;
      return (
         <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
            <h1 className="mb-2 font-bold text-2xl">
               <Link
                  to='/post'
                  className="text-indigo-500 hover:text-indigo-600"
               >
                  Noticias
               </Link>{" "}
               <span className="text-indigo-400 font-medium">/</span> Crear
            </h1>
 
            <div className="bg-white shadow-xl sm:rounded-lg">
               <div className="p-6 sm:px-10 bg-white">
                  <PostForm 
                     onSubmit={this.onSubmit}
                     tags={tags} 
                  />
               </div>
            </div>

            {
               tags.length == 0 && tagEmpty &&
                  <div className="my-5 p-4 bg-red-50 bg-opacity-75 border border-red-300 rounded">
                     <div className="text-red-600">
                        <h2 className="font-bold ">¡ATENCIÓN! NO EXISTEN ETIQUETAS.</h2>
                        <p className="font-medium">Para poder crear una noticia tiene que crear primero una etiqueta.</p>
                     </div>  
                  </div>
            } 
         </div>
      );
   }
};

export default PostCreate;
