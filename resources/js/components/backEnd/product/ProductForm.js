import React from 'react';
import Select from "react-select";
import history from '../../../history';
import { selectStyles } from '../selectStyles';

class ProductForm extends React.Component {

   constructor(props) {
      super(props);
      this.initialStateValues = {
         loading: props.initialValues ? true : false,
         fields: { name: '', ref: '', price: '', offer_price: '', category_id: '' },
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
               category_id: this.props.categoryActive 
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
         history.push("/page-403");
         return;
      }
      if (response.errors) {
         this.setState({ errors: response.errors})
         return
      }
      history.push('/product');
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

                           <div className="col-span-6 sm:col-span-3">
                              <label
                                 htmlFor="ref"
                                 className={`block ${errors.ref ? 'label-error' : 'text-gray-900'}`}
                              >
                                 Referencia:
                              </label>
                              <input
                                 type="text"
                                 name="ref"
                                 value={fields.ref}
                                 onChange={this.onInputChange}
                                 className={`${errors.ref && 'input-error'} mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md`}
                              />
                              {
                                 errors.ref && (
                                    <div className="mt-2 inline-block border border-red-400 rounded p-1 px-2">
                                       <p className="text-red-600 text-xs font-bold">
                                          {errors.ref}
                                       </p>
                                    </div>
                                 )
                              }
                           </div>

                           <div className="col-span-6 sm:col-span-3">
                              <label
                                 htmlFor="price"
                                 className={`block ${errors.price ? 'label-error' : 'text-gray-900'}`}
                              >
                                 Precio:
                              </label>
                              <input
                                 type="number"
                                 name="price"
                                 value={fields.price}
                                 onChange={this.onInputChange}
                                 className={`${errors.price && 'input-error'} mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md`}
                              />
                              {
                                 errors.price && (
                                    <div className="mt-2 inline-block border border-red-400 rounded p-1 px-2">
                                       <p className="text-red-600 text-xs font-bold">
                                          {errors.price}
                                       </p>
                                    </div>
                                 )
                              }
                           </div>

                           <div className="col-span-6 sm:col-span-3">
                              <label
                                 htmlFor="offer_price"
                                 className={`block ${errors.offer_price ? 'label-error' : 'text-gray-900'}`}
                              >
                                 Precio en oferta:
                              </label>
                              <input
                                 type="number"
                                 name="offer_price"
                                 value={fields.offer_price}
                                 onChange={this.onInputChange}
                                 className={`${errors.offer_price && 'input-error'} mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md`}
                              />
                              {
                                 errors.offer_price && (
                                    <div className="mt-2 inline-block border border-red-400 rounded p-1 px-2">
                                       <p className="text-red-600 text-xs font-bold">
                                          {errors.offer_price}
                                       </p>
                                    </div>
                                 )
                              }
                           </div>

                           <div className="col-span-6">
                              <Select
                                 name="category_id"
                                 placeholder="Elige una categoría"
                                 styles={errors.category_id && selectStyles}
                                 value={fields.category_id}
                                 onChange={this.onInputChangeSelect}
                                 options={this.props.categories}
                              />
                              {
                                 errors.category_id && (
                                    <div className="mt-2 inline-block border border-red-400 rounded p-1 px-2">
                                       <p className="text-red-600 text-xs font-bold">
                                          {errors.category_id}
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
                           }{" "}producto
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      );
   }
};

export default ProductForm;
