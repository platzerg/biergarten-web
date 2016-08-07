import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  title: DS.attr('string'),
  board: DS.belongsTo('board'),
  tasks: DS.hasMany('task')
});
