import axios from 'axios';

const environment = process.env.NODE_ENV || 'development';
const serverURL = {
  production: 'https://hk-wedding-backend.herokuapp.com',
  development: 'http://localhost:8085',
};
const optionsConfig = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  }
};

axios.defaults.baseURL = serverURL[environment];

export default {
  getAllGuests() {
    return axios.get('/allguests')
      .then(response => response.data);
  },
  getGuestById(anId) {
    return axios.get(`/guest/${anId}`)
      .then(response => response.data);
  },
  updateGuestById(anId, guestData) {
    return axios.post(`/guest/${anId}`, guestData)
      .then((response) =>  response.data);
  },
};
