import Ember from 'ember';

export default Ember.Component.extend({
  clientFilters: Ember.inject.service(),

  addFilter(name, value) {
    this.get('clientFilters').addFilter(name, value);
  },

  removeFilter(name) {
    this.get('clientFilters').removeFilter(name);
  }
});
