import axios from 'axios';

const instance = axios.create({
  baseURL: "https://us-central1-clone-d0217.cloudfunctions.net/api"
  //baseURL: "http://localhost:5001/clone-d0217/us-central1/api", /// the api {cloud function} url
});

export default instance;