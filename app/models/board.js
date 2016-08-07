import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  title: DS.attr('string'),
  user: DS.belongsTo('user'),
  lists: DS.hasMany('list'),

  listCount: function() {
    return this.get('lists.length');
  }
});
