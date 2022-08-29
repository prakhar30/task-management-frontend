import { observable, action, makeObservable } from 'mobx';

export default class UserStore {
  @observable username = null;

  constructor(authService) {
    makeObservable(this);
    this.authService = authService;
  }

  @action
  async signin(username, password) {
    this.username = await this.authService.signin(username, password);
  }

  @action
  async signup(username, password) {
    return this.authService.signup(username, password);
  }

  @action
  signout() {
    this.username = null;
    this.authService.removeToken();
  }
}
