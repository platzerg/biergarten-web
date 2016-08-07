import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      username: null,
      password:  null
    };
  },
  actions: {
    loginUser() {
      this.store.query('user', {
        username: this.controller.model.username
      }).then((users) => {
        if (users.get('length') === 1) {
          var user = users.objectAt(0);
          if (user.get('password') !== this.controller.model.password) {
            this.controller.set('message', 'Invalid credentials');
            return;
          }
          this.controllerFor('application').set('user', user);
          this.transitionTo('boards', user.get('id'));
        } else {
          this.controller.set('message', 'User was not found');
        }
      });
    }
  }
});
