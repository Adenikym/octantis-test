import axios from 'axios';
import authHeader from './auth.header';
const API_URL = 'https://proguardpeercover.herokuapp.com';
class UserService {

  getConsultants() {
    return axios.get(API_URL + '/marketers', { headers: authHeader() });
  }
  addConsultants(data) {
    return axios.post(API_URL + '/marketers', data, { headers: authHeader() });
  }
  fetchConsultant(id) {
    return axios.get(API_URL + '/marketers/'+ id , { headers: authHeader() });
  }
  updateConsultant(data) {
    return axios.put(API_URL + '/marketers',{data}, { headers: authHeader() });
  }
  deleteConsultant(id) {
    return axios.delete(API_URL + '/marketers/'+ id , { headers: authHeader() });
  }
 
  

}
export default new UserService();