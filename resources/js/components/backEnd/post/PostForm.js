import React from 'react';
import history from '../../../history';
import { selectStyles } from '../selectStyles';
import Select from "react-select";
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

class PostForm extends React.Component {

   constructor(props) {
      super(props);
      this.initialStateValues = {
         loading: props.initialValues ? true : false,
         fields: { title: '', sub_title: '', body: '', tags: '' },
         errors: ''
      };
      this.state = this.initialStateValues; 
   }

   //necesario para el editar
   componentDidUpdate(prevProps) {
      if (prevProps.initialValues !== this.props.initialValues) {
         this.setState({
            fields: { 
               ...this.props.initialValues, 
               tags: this.props.tagsActive 
            }, 
            loading: false
         });
      }
   }
   
   onInputChange = event => {
      const { name, value } = event.target;
      this.setState(state => ({
         fields: {...state.fields, [name]: value},
         errors: {
            ...state.errors, 
            [name]: ''
         }
      }));
   };

   onInputChangeSelect = (event, action) => {
      this.setState({
         fields: {...this.state.fields, [action.name]: event},
         errors: {...this.state.errors, [action.name]: ''}
      });
   };

   onFormSubmit = async event => {
      event.preventDefault();
      const response = await this.props.onSubmit(this.state.fields);
      if (response.exception) {
         history.push('/admin/page-403');
         return;
      }
      if (response.errors) {
         this.setState({ errors: response.errors})
         return
      }
      
      history.push('/admin/post');
   };

   render() {
      const { errors, fields } = this.state;
      const loading = this.state.loading && 'loading';
      return (
         <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-6">
               <div className="mt-5 md:mt-0 md:col-span-2">
                  <form onSubmit={this.onFormSubmit} className={`ui form ${loading}`}>
                     <div className="px-4 py-5 sm:p-2">
                        <div className="grid grid-cols-6 gap-6">

                           <div className="col-span-6 sm:col-span-3">
                              <label
                                 htmlFor="title"
                                 className={`block ${errors.title ? 'label-error' : 'text-gray-900'}`}
                              >
                                 Título:
                              </label>
                              <input
                                 type="text"
                                 name="title"
                                 value={fields.title}
                                 onChange={this.onInputChange}
                                 className={`${errors.title && 'input-error'} mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md`}
                              />
                              {
                                 errors.title && (
                                    <div className="mt-2 inline-block border border-red-400 rounded p-1 px-2">
                                       <p className="text-red-600 text-xs font-bold">
                                          {errors.title}
                                       </p>
                                    </div>
                                 )
                              }
                           </div>

                           <div className="col-span-6 sm:col-span-3">
                              <label
                                 htmlFor="sub_title"
                                 className={`block ${errors.ref ? 'label-error' : 'text-gray-900'}`}
                              >
                                 Subtítulo:
                              </label>
                              <input
                                 type="text"
                                 name="sub_title"
                                 value={fields.sub_title}
                                 onChange={this.onInputChange}
                                 className={`${errors.sub_title && 'input-error'} mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md`}
                              />
                              {
                                 errors.sub_title && (
                                    <div className="mt-2 inline-block border border-red-400 rounded p-1 px-2">
                                       <p className="text-red-600 text-xs font-bold">
                                          {errors.sub_title}
                                       </p>
                                    </div>
                                 )
                              }
                           </div>

                           <div className="col-span-6">
                              <label
                                 htmlFor="body"
                                 className={`block ${errors.body ? 'label-error' : 'text-gray-900'}`}
                              >
                                 Contenido:
                              </label>
                              <textarea
                                 type="text"
                                 name="body"
                                 value={fields.body}
                                 onChange={this.onInputChange}
                                 className={`${errors.body && 'input-error'} mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md`}
                              />
                              {
                                 errors.body && (
                                    <div className="mt-2 inline-block border border-red-400 rounded p-1 px-2">
                                       <p className="text-red-600 text-xs font-bold">
                                          {errors.body}
                                       </p>
                                    </div>
                                 )
                              }
                           </div>

                           <div className="col-span-6">
                              <Select
                                 name="tags"
                                 value={fields.tags}
                                 components={animatedComponents}
                                 isMulti
                                 placeholder="Elige una o varias etiquetas"
                                 styles={errors.tags && selectStyles}
                                 onChange={this.onInputChangeSelect}
                                 options={this.props.tags}
                              />
                              {
                                 errors.tags && (
                                    <div className="mt-2 inline-block border border-red-400 rounded p-1 px-2">
                                       <p className="text-red-600 text-xs font-bold">
                                          {errors.tags}
                                       </p>
                                    </div>
                                 )
                              }
                           </div>
                        </div>
                     </div>
                     <div className="px-4 py-3 text-right sm:px-2">
                        <button
                           type="submit"
                           className="inline-flex justify-center py-2 px-4 shadow-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                        >
                           {
                              this.props.initialValues ?  "Editar" : "Crear"
                           }{" "}noticia
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      );
   }
};

export default PostForm;
