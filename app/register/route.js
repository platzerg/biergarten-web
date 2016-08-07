import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      username: null,
      password:  null,
      passwordcnf:  null
    };
  },
  actions: {
    createUser() {
      var username = this.controller.model.username;
      var password = this.controller.model.password;
      var passwordcnf = this.controller.model.passwordcnf;
      if (password !== passwordcnf) {
        this.controller.set('message', 'Passwords do not match');
        return;
      }
      this.store.createRecord('user', {
        username: username,
        password: password
      }).save().then(() => {
        this.controller.set('username', null);
        this.controller.set('password', null);
        this.controller.set('passwordcnf', null);
        this.controller.set('message', 'User was created');
      }).catch(() => {
        this.controller.set('message', 'User was not created');
      });
      console.log('Create user: ' + username);
    }
  }
});
