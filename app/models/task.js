import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  list: DS.belongsTo('list')
});
