import axios from 'axios';
import { BASE_URL } from '../components/Register/lib/constants';

export const http = {

  get: async (path: string) => {
    
    try {
      const response = await axios.get(`${BASE_URL}${path}`);
      
      return { status: 'Success', data: response.data, message: 'Success' }

    } catch (e) {

      return { status: 'Failed', message: 'Something went wrong'}
    }
    
  },

  post: async (path: string, data: any) => {
    
    try {
      const response = await axios.post(`${BASE_URL}${path}`, data);
      
      return { status: 'Success', data: response.data, message: 'Success' }

    } catch {

      return { status: 'Failed', message: 'Something went wrong', data: null}

    }
  }
}