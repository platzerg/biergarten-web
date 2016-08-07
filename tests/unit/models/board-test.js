import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('board', 'Unit | Model | board', {
  // Specify the other units that are required for this test.
  needs: [
    'model:user',
    'model:list',
    'model:task'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('it returns the amount of lists', function(assert) {
  var board = this.subject({title: 'My board'});
  
  Ember.run(() => {
    this.store().createRecord('list', {
      title: 'My tasklist',
      board: board
    });    
  });
  
  assert.equal(board.listCount(), 1);
});
