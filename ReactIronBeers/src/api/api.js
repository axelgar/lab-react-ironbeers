import axios from 'axios';

class Api {
  constructor() {
    axios.create({
      baseURL: 'https://ironbeer-api.herokuapp.com/beers',
    })
  }

}

const api = new Api();

export default api;