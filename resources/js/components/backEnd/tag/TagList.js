import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAllData } from '../../../api/crudActions';
import DataTable from '../datatable/DataTable';
import { columns, sweetAlertTag } from '../datatable/config';

class TagList extends React.Component {

   fetchTags = async () => {
      const response = await fetchAllData('tag');
      return response.data;
   }
   
   render() {
      return (
         <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between mb-4">
               <h1 className="font-bold text-2xl">Etiquetas</h1>
               <Link to='/tag/new' className="btn-create">Crear etiqueta</Link>
            </div>
            <DataTable 
               data={this.fetchTags} 
               columns={columns}
               path={'tag'}
               sweetAlert={sweetAlertTag} 
            />
         </div>
      );
   }
}

export default TagList;
