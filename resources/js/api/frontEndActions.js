import axios from 'axios';

export const allCategories = async () => {
   try {
      const response = await axios.get('/api/getCategories');
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};

export const allPosts = async () => {
   try {
      const response = await axios.get('/api/getPosts');
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};

export const allProducts = async () => {
   try {
      const response = await axios.get('/api/getProducts');
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};

export const allTags = async () => {
   try {
      const response = await axios.get('/api/getTags');
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};