import store from '@/store';
import http from './HttpService';

export function isLoggedIn() {
  const token = localStorage.getItem('token');
  return token != null;
}

function setToken(token) {
  localStorage.setItem('token', JSON.stringify(token));
  store.dispatch('authenticate');
}

export function login(user) {
  return http().post('/auth', user)
    .then((res) => {
      if (res) {
        const fakeToken = {
          token: 'my-token',
        };
        setToken(fakeToken);
      }
    });
}

export function getUserName() {
  return 'Marko'; // Hard coded for now :D
}

export function getUserId() {
  return 1; // Hard coded for now :D
}

export function registerUser(user) {
  return http().post('register', user);
}
