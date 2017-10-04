import { Model } from 'ember-cli-mirage';

export default Model.extend({
  name: DS.attr(),
  birthYear: DS.attr('number'),
  deathYear: DS.attr('number'),
  tabs: DS.hasMany('tab')
});

