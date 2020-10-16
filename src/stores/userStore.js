import {observable, action} from 'mobx';

class UserStore {
  @observable user = {
    googleId: '',
    imageUrl: '',
    email: '',
    name: '',
    givenName: '',
    familyName: ''
  };

  @action
  login = (value) => {
    console.log("userStore.login");
    console.log(value);
  }
}
export default UserStore;