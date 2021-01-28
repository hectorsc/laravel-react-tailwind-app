import React from 'react';
import { allTags } from '../../api/frontEndActions';
import Spinner from '../Spinner';

class Tags extends React.Component {

   state = { tags: [], loading: true };

   async componentDidMount () {
      const tags = await allTags();
      this.setState({ tags: tags.data, loading: false });
   }

   renderList = () => {
      const { tags } = this.state;
      const tagLen = tags.length;
      return tags.map((tag, id) =>
         <div key={id} className={`px-6 ${id === tagLen - 1 ? '' : 'border-b'}`}>
            <li className="flex justify-between py-3 text-left text-xs font-medium uppercase tracking-wide">
               <div>{tag.name}</div> <div className="font-bold">creado por: {tag.user.name}</div>
            </li>
            <div className="flex space-x-1">
               <div>Noticias:</div>
               {
                  tag.posts.map((post, id) => 
                     <div key={id}>
                        {post.title}
                        {id === tag.posts.length - 1 ? '' : ' |' }
                     </div>
                  )
               }
               {
                  tag.posts.length == 0 && <div>no hay resultados...</div> 
               }
            </div>
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
                  <h1 className="text-4xl pt-4">Etiquetas</h1>
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

export default Tags;
