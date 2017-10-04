import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  difficulty: DS.attr(),
  tabFile: DS.attr(),
  midis: DS.attr(),
  videos: DS.attr(),
  tuning: DS.attr(),
  timeSignature: DS.attr(),
  tempo: DS.attr(),
  key: DS.attr(),
  composer: DS.belongsTo('composer')
});
