import axios from 'axios';
import store from '../store';

export default function http() {
  return axios.create({
    baseURL: store.state.apiUrl,
  });
}
