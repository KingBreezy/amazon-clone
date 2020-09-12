import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-d0217/us-central1/api", /// the api {cloud function} url
});
//baseURL: "https://us-central1-clone-d0217.cloudfunctions.net/api"
export default instance;
