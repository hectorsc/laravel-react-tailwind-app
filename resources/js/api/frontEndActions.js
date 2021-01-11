import axios from 'axios';

export const allCategories = async () => {
   try {
      const response = await axios.get('/api/getCategories');
      return response.data;
   } catch (e) {
      return e.response.data;
   }
};