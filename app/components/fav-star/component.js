import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  tagName: 'span',

  favorites: storageFor('favorites'),

  favorited: false,

  isFavorited: Ember.computed('id', 'favorited', function () {
    const id = this.get('id');

    if (!id) return false;

    const fave = this.get('favorites').includes(id);

    if (fave) {
      this.set('favorited', true);
      return true;
    }

    return false;
  }),

  actions: {
    addFavorite(id) {
      this.get('favorites').addObject(id);
      this.set('favorited', true);
    },

    removeFavorite(id) {
      this.get('favorites').removeObject(id);
      this.set('favorited', false);
    }
  }
});
