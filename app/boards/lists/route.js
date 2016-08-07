import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('list', {board: params.boardId}).catch(() => {
      return null;
    });
  },
  actions: {
    createTask(list) {
      this.store.createRecord('task', {
        title: this.controller.get('taskName'),
        list: list
      }).save().then(() => {
        this.refresh();
      });
    },
    createList() {
      this.store.findRecord('board', this.paramsFor('boards.lists').boardId)
        .then((board) =>  {
          this.store.createRecord('list', {
            title: this.controller.get('listName'),
            board: board
          }).save().then(() => {
            this.refresh();
          });
        });
    }
  }
});
