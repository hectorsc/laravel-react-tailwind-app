import React from 'react';
import { Link } from 'react-router-dom';
import { fetchData, edit, fetchAllData } from '../../api/crudActions';
import history from '../../history';
import PostForm from "./PostForm";

class PostEdit extends React.Component {

   constructor(props) {
      super(props);
      this.state = { post: [], tags: [], tagsActive: [] }; 
   }

   componentDidMount = async () => {
      const post = await fetchData('post', this.props.match.params.id);
      if (post.exception) {
         history.push('/page-404');
         return;
      }
      const tags = await fetchAllData('tag');
      this.setState({ 
         post: post.data, 
         tags: this.fixedDataForSelect(tags.data),
         tagsActive: this.fixedDataForSelect(post.data.tags)
      });
   }

   fixedDataForSelect(tags) {
      let data = [];
      tags.map((tag) => {
         data = [ ...data, { value: tag.id, label: tag.name }];
      })
      return data;
   }

   onSubmit = async formValues => {
      return await edit('post', this.state.post.id, formValues);
   }

   render() {
      const { post, tags, tagsActive } = this.state;
      return (
         <div className="w-full mx-auto sm:px-6 lg:px-8 py-6">
            <h1 className="mb-2 font-bold text-2xl">
               <Link
                  to='/post'
                  className="text-indigo-500 hover:text-indigo-600"
               >
                  Noticias
               </Link>{" "}
               <span className="text-indigo-400 font-medium">/</span> Editar
            </h1>
 
            <div className="bg-white shadow-xl sm:rounded-lg">
               <div className="p-6 sm:px-10 bg-white">
                  <PostForm 
                     onSubmit={this.onSubmit} 
                     initialValues={post}
                     tags={tags}
                     tagsActive={tagsActive}
                  />
               </div>
            </div>
         </div>
      );
   }
};

export default PostEdit;
