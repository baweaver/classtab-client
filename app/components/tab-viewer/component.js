import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  ajax: Ember.inject.service(),

  tabContent: '',

  showModal: false,

  actions: {
    openTab(fileName) {
      this.get('ajax').request('/tabs/' + fileName, {
        dataType: 'text'
      }).then(result => {
        this.set('tabContent', result);
        this.set('showModal', true);
      });
    }
  }
});
