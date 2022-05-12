import { action, get, makeAutoObservable } from 'mobx';

export default class User {
  token = localStorage.getItem('token') || '';

  constructor() {
    makeAutoObservable(this);
  }

  @action setToken = (token: string) => {
    this.token = token;
    localStorage.setItem('token', token);
  };

  getToken() {
    return this.token;
  }
}
