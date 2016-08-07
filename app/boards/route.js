import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('board', {user: params.userId}).catch(() => {
      return null;
    });
  },
  actions: {
    createBoard() {
      var boardName = this.controller.get('boardName');
      this.store.createRecord('board', {
        title: boardName,
        user: this.controllerFor('application').get('user')
      }).save().then(() => {
        console.log('Board created');
        this.refresh();
      });
    }
  }
});
