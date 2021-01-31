import React from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../../api/crudActions';
import Spinner from '../../Spinner';
import history from '../../../history';
import { HiOutlineArrowLeft } from "react-icons/hi";

class PostShow extends React.Component {

   constructor(props) {
      super(props);
      this.state = { 
         post: [], tags: [],
         loading: true
      };
   }

   async componentDidMount() {
      const response = await fetchData('post', this.props.match.params.id);
      if (response.exception) {
         history.push('/admin/page-404');
         return;
      }
      this.setState({ 
         post: response.data, 
         tags: response.data.tags,
         loading: false,
      });
   }

   renderTagsList() {
      const rowLen = this.state.tags.length;
      return this.state.tags.map((tag, i) => {
         return(
            <li key={tag.id}>
               {tag.name}{rowLen === i + 1 ? '' : '\u00A0 | \u00A0' }
            </li>
         );
      })
   }

   render() {
      const { post, loading } = this.state;
      return (
         <React.Fragment>
            {
               loading ? 
                  <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
                     <Spinner />
                  </div> 
               :
                  <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
                     <h1 className="mb-2 font-bold text-2xl">{post.title}</h1>
                     <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="p-6 sm:px-10 bg-white">
                           <div className="flex flex-col text-gray-500">
                              <div className="inline-flex mb-1">
                                 <h3 className="text-xl font-bold">Subtítulo:</h3>
                                 <p className="pl-2 text-xl">{post.sub_title}</p>
                              </div>
                              <div className="inline-flex mb-1">
                                 <h3 className="text-xl font-bold pr-2">Etiquetas:</h3>
                                 <ul className="text-xl inline-flex">
                                    {this.renderTagsList()}
                                 </ul>
                              </div>
                              <div className="">
                                 <p className="text-xl">
                                    <strong className="font-bold">Contenido: </strong>
                                    {post.body}
                                 </p>
                              </div>
                              
                           </div>
                           <div className="mt-6">
                              <Link to='/admin/post' className="inline-flex p-2 pr-4 bg-indigo-600 text-white rounded hover:bg-indigo-900">
                                 <HiOutlineArrowLeft size={25} />
                                 <p className="pl-3">Volver</p>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
            }
         </React.Fragment>  
      );
   }
};

export default PostShow;
