
import axios from 'axios';
const API_URL = 'https://proguardpeercover.herokuapp.com';
class AuthService {
  login(user) {
    return axios
      .post(API_URL + '/consultant_auth', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
 
}
export default new AuthService();