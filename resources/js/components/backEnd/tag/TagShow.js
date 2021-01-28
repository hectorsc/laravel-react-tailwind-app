import React from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../../api/crudActions';
import Spinner from '../../Spinner';
import history from '../../../history';
import DataTable from '../datatable/DataTable';
import { columnsPost } from '../datatable/config';
import { HiOutlineArrowLeft } from "react-icons/hi";

class TagShow extends React.Component {

   constructor(props) {
      super(props);
      this.state = { 
         tag: [], loading: true
      };
   }

   async componentDidMount() {
      const response = await this.fetchTag();
      if (response.exception) {
         history.push('/page-404');
         return;
      }
      this.setState({ 
         tag: response.data, 
         loading: false,
      });
   }

   fetchTag = async () => {
      const response = await fetchData('tag', this.props.match.params.id);
      return response;
   }

   fetchPostsOfTag = async () => {
      const response = await this.fetchTag();
      const posts = response.exception ? [] : response.data.posts;
      return posts;
   }

   render() {
      const { tag, loading } = this.state;
      return (
         <React.Fragment>
            {
               loading ? 
                  <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
                     <Spinner />
                  </div> 
               :
                  <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
                     <h1 className="mb-4 font-bold text-2xl">
                        {tag.name} tiene las siguientes noticias asociadas
                     </h1>
                     <DataTable 
                        data={this.fetchPostsOfTag} 
                        columns={columnsPost}
                        simpleTable={true}
                     />
                     <div className="mt-6">
                        <Link to='/tag' className="inline-flex p-2 pr-4 bg-indigo-600 text-white rounded hover:bg-indigo-900">
                           <HiOutlineArrowLeft size={25} />
                           <p className="pl-3">Volver</p>
                        </Link>
                     </div>
                  </div>
            }
         </React.Fragment>  
      );
   }
};

export default TagShow;
