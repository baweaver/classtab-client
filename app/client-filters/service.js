import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.filters = Ember.Object.create();
  },

  addFilter(name, value) {
    this.set(`filters.${name}`, value);
  },

  removeFilter(name) {
    delete this.get('filters')[name];
  }
});
