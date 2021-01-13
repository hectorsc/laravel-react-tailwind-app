import React from 'react';
import history from '../../history';

class TagForm extends React.Component {

   constructor(props) {
      super(props);
      this.initialStateValues = {
         loading: props.initialValues ? true : false,
         fields: { name: '' },
         errors: ''
      };
      this.state = this.initialStateValues; 
   }

   //necesario para el editar
   componentDidUpdate(prevProps) {
      if (prevProps.initialValues !== this.props.initialValues) {
         this.setState({fields: {...this.props.initialValues}, loading: false});
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

   onFormSubmit = async event => {
      event.preventDefault();
      const response = await this.props.onSubmit(this.state.fields);
      if (response.errors) {
         this.setState({ errors: response.errors})
         return
      }
      history.push('/tag');
   }

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
                           <div className="col-span-6">
                              <label
                                 htmlFor="name"
                                 className={`block ${errors.name ? 'label-error' : 'text-gray-900'}`}
                              >
                                 Nombre:
                              </label>
                              <input
                                 type="text"
                                 name="name"
                                 value={fields.name}
                                 onChange={this.onInputChange}
                                 className={`${errors.name && 'input-error'} mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md`}
                              />
                              {
                                 errors.name && (
                                    <div className="mt-2 inline-block border border-red-400 rounded p-1 px-2">
                                       <p className="text-red-600 text-xs font-bold">
                                          {errors.name}
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
                           }{" "}etiqueta
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      );
   }
};

export default TagForm;
