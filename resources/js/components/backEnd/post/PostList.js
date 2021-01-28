import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAllData } from '../../../api/crudActions';
import DataTable from '../datatable/DataTable';
import { columnsPost, sweetAlertPost } from '../datatable/config';

class PostList extends React.Component {

   fetchPosts = async () => {
      const response = await fetchAllData('post');
      return response.data;
   }
   
   render() {
      return (
         <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between mb-4">
               <h1 className="font-bold text-2xl">Noticias</h1>
               <Link to='/post/new' className="btn-create">Crear noticia</Link>
            </div>
            <DataTable 
               data={this.fetchPosts} 
               columns={columnsPost}
               path={'post'}
               sweetAlert={sweetAlertPost} 
            />
         </div>
      );
   }
}

export default PostList;
