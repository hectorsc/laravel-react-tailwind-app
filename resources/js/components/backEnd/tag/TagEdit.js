import React from 'react';
import TagForm from './TagForm';
import { Link } from 'react-router-dom';
import { fetchData, edit } from '../../../api/crudActions';
import history from '../../../history';

class TagEdit extends React.Component {

   constructor(props) {
      super(props);
      this.state = { response: [] }; 
   }

   componentDidMount = async () => {
      const response = await fetchData('tag', this.props.match.params.id);
      if (response.exception) {
         history.push('/page-404');
         return;
      }
      this.setState({ response: response.data });
   }

   onSubmit = async formValues => {
      return await edit('tag', this.state.response.id, formValues);
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
               <span className="text-indigo-400 font-medium">/</span> Editar
            </h1>
 
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
               <div className="p-6 sm:px-10 bg-white">
                  <TagForm 
                     onSubmit={this.onSubmit} 
                     initialValues={this.state.response}
                  />
               </div>
            </div>
         </div>
      );
   }
};

export default TagEdit;
