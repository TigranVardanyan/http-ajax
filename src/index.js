import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
//TODO create real server for CRUD
axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";
axios.defaults.headers.post['Content-Type'] = 'application/xml';


let request = axios.interceptors.request.use(request => {
  console.log(request);
  //you can edit config before return it
  return request;
}, error => {
  console.log(error);
  return Promise.reject((error))
})

//axios.interceptors.request.eject(request);

let response = axios.interceptors.response.use(response => {
  console.log(response);
  //you can edit config before return it
  return response;
}, error => {
  console.log(error);
  return Promise.reject((error))
})

//axios.interceptors.response.eject(response);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
