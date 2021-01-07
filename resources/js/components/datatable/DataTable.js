import React from 'react';
import { Link } from 'react-router-dom';
import LoadingData from '../LoadingData';
import { sweetAlert } from './sweetAlert';
import { HiOutlineTrash, HiOutlinePencilAlt, HiOutlineInformationCircle } from "react-icons/hi";

class DataTable extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         data: [], loading: true, 
         deleted: false, result: ''
      };
   }

   getData = async () => {
      const data = await this.props.data();
      let result = data.data.length == 0 ? 'No hay resultados...': '';
      this.setState({data, loading: false, result, deleted: false})
   }

   async componentDidMount() {
      await this.getData();
   }

   async componentDidUpdate() {
      if (this.state.deleted) {
         await this.getData();
      }
   }

   async alert(id, name) {
      const data = {
         id, name,
         path: this.props.path,
         ...this.props.sweetAlert
      }
      const response = await sweetAlert(data);
      response && this.setState({deleted: true}); 
   }

   renderTableData() {
      const { path, sweetAlert } = this.props;
      const { data } = this.state;
      return data.data.map(data => (
         <tr key={data.id}>
            <td className="px-6 py-4 whitespace-nowrap">
               <div className="text-sm text-gray-900">{data.name}</div>
            </td>
            {
               data.active !== undefined && (
                  <td className="px-6 py-4 whitespace-nowrap">
                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${data.active ? 'data-active' : 'data-inactive'}`}>
                        {data.active ? 'Activado' : 'Desactivado'}
                     </span>
                  </td>
               )
            }
            <td className="flex items-center justify-end gap-1 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
               <Link
                  to={`/${path}/${data.id}`}
                  className="bg-pink-700 rounded p-2 text-white hover:bg-pink-900"
               >
                  <HiOutlineInformationCircle size={22} />
               </Link>
               <Link
                  to={`/${path}/edit/${data.id}`}
                  className="bg-blue-700 rounded p-2 text-white hover:bg-blue-900"
               >
                  <HiOutlinePencilAlt size={22} />
               </Link>
               <button
                  onClick={() => this.alert(data.id, data[sweetAlert.selector])} 
                  className="bg-red-700 rounded p-2 text-white hover:bg-red-900 active:bg-red-900 focus:outline-none"
               >
                  <HiOutlineTrash size={22} />
               </button>
            </td>
         </tr>
      ));
   }

   renderTableColumns() {
      const { columns } = this.props;
      return columns.map((column, id) => 
         <React.Fragment key={id}>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               {column.name}
            </th>
         </React.Fragment>
      );
   }

   render() {
      const { loading, result } = this.state;
      return (
         <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
               <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 bg-white">
                     <thead className="bg-gray-50">
                        <tr>
                           { loading ? <td className="py-5"></td> : this.renderTableColumns()  }
                           <th key="edit" scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Edit</span>
                           </th>
                        </tr>
                     </thead>
                     <tbody className="bg-white divide-y divide-gray-200">
                        { 
                           loading ? 
                              <tr>
                                 <td><LoadingData /></td>   
                              </tr> 
                           : 
                              this.renderTableData()
                        }
                        {
                           result ? 
                              <tr>
                                 <td>
                                    <div className="px-6 py-3">{result}</div>
                                 </td>
                              </tr> 
                           :
                              null
                        }
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      );
   }
};

export default DataTable;
