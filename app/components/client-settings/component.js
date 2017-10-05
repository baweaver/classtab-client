import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  tagName: 'span',

  settings: storageFor('settings'),

  actions: {
    toggleSetting(name) {
      const value = this.get('settings.' + name);

      this.set('settings.' + name, !value);
    }
  }
});
