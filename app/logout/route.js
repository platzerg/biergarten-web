import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.controllerFor('application').set('user', null);
    this.transitionTo('/');
  }
});
