import React from 'react';
import history from '../../history';

class CategoryForm extends React.Component {

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
      history.push('/category');
   }

   render() {
      const {errors, fields } = this.state;
      const loading = this.state.loading && 'loading';
      return (
         // <form onSubmit={this.onFormSubmit} className={`ui form ${loading}`}>
         //    <div className="field">
         //       <div className={errors.name ? 'field error' : 'field'}>
         //          <label>Nombre:</label>
         //          <input 
         //             type="text" name="name" placeholder="Nombre" 
         //             value={fields.name} 
         //             onChange={this.onInputChange}
         //          />
         //          {
         //             errors.name &&
         //                <div className="ui pointing red basic label prompt">
         //                   {errors.name}
         //                </div>
         //          }
         //       </div>
         //    </div>
         //    <button className="ui button primary" type="submit">{this.props.initialValues ? 'Editar' : 'Crear' }</button>
         // </form>
         <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-6">
               <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="">
                     
                        <div className="px-4 py-5 sm:p-2">
                           <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6">
                                 <label htmlFor="street_address" className="block  text-gray-900">Nombre:</label>
                                 <input type="text" name="street_address" id="street_address"  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
                              </div>
                           </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-2">
                           <button type="submit" className="inline-flex justify-center py-2 px-4 shadow-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2">
                              Crear categoría
                           </button>
                        </div>
                     
                  </form>
               </div>
            </div>
         </div>

      );
   }
};

export default CategoryForm;
