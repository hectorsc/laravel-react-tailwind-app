import React from 'react';
import { allPosts } from '../../api/frontEndActions';
import Spinner from '../Spinner';

class Posts extends React.Component {

   state = { posts: [], loading: true };

   async componentDidMount () {
      const posts = await allPosts();
      this.setState({ posts: posts.data, loading: false });
   }

   renderList = () => {
      const { posts } = this.state;
      const postLen = posts.length;
      return posts.map((post, id) =>
         <div key={id} className={`px-6 ${id === postLen - 1 ? '' : 'border-b'}`}>
            <li className="flex justify-between py-3 text-left text-xs font-medium uppercase tracking-wide">
               <div className="font-bold">{post.title}</div> <div className="font-bold">creado por: {post.user.name}</div>
            </li>
            <div className="flex">Subtítulo: {post.sub_title}</div>
            <div className="flex space-x-1">
               <div>Etiquetas:</div>
               {
                  post.tags.map((tag, id) => 
                     <div key={id}>
                        {tag.name}
                        {id === post.tags.length - 1 ? '' : ' |' }
                     </div>
                  )
               }
            </div>
            <div className="flex pt-1">Contenido: {post.body}</div>
         </div>
      );
   }
   
   render() {
      const { loading } = this.state;
      return (
         <React.Fragment>
            {
               loading ?
                  <Spinner />
               :
               <>
                  <h1 className="text-4xl pt-4">Noticias</h1>
                  <div className="bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                     <div className="p-1 py-1 text-center">
                        <ul>
                           { this.renderList() }
                        </ul> 
                     </div>        
                  </div>
               </>
            }
         </React.Fragment> 
      ); 
   }
};

export default Posts;
