import Ember from 'ember';
import DS from 'ember-data';
import _ from 'npm:ramda';

export default DS.Model.extend({
  name:      DS.attr(),
  birthYear: DS.attr('number'),
  deathYear: DS.attr('number'),
  tabs:      DS.hasMany('tab'),

  musicalEra: Ember.computed('birthYear', 'deathYear', function () {
    const birthYear = this.get('birthYear');
    const deathYear = this.get('deathYear') || 2100;

    if (!birthYear) return 'Unknown';

    const life    = _.range(birthYear, deathYear);
    const livedIn = _.compose(_.length, _.intersection(life), _.range);

    // Naive
    if (livedIn(476, 1400))  return 'Medieval';
    if (livedIn(1400, 1600)) return 'Renaissance';
    if (livedIn(1600, 1760)) return 'Baroque';
    if (livedIn(1730, 1820)) return 'Classical';
    if (livedIn(1815, 1910)) return 'Romantic';
    if (livedIn(1900, 2100)) return 'Modern';

    return 'Unknown';
  })
});
