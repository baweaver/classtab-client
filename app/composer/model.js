import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  birthYear: DS.attr('number'),
  deathYear: DS.attr('number'),
  tabs: DS.hasMany('tab')
});
