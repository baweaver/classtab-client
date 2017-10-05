import { moduleForModel, test } from 'ember-qunit';

moduleForModel('composer', 'Unit | Model | composer', {
  needs: ['model:tab']
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});

test('it detects a composer from the Medieval era', function (assert) {
  const model = this.subject({ birthYear: 400, deathYear: 500 });
  assert.equal(model.get('musicalEra'), 'Medieval');
});

test('it detects a composer from the Renaissance era', function (assert) {
  const model = this.subject({ birthYear: 1405, deathYear: 1450 });
  assert.equal(model.get('musicalEra'), 'Renaissance');
});

test('it detects a composer from the Baroque era', function (assert) {
  const model = this.subject({ birthYear: 1610, deathYear: 1630 });
  assert.equal(model.get('musicalEra'), 'Baroque');
});

test('it detects a composer from the Classical era', function (assert) {
  const model = this.subject({ birthYear: 1765, deathYear: 1800 });
  assert.equal(model.get('musicalEra'), 'Classical');
});

test('it detects a composer from the Romantic era', function (assert) {
  const model = this.subject({ birthYear: 1820, deathYear: 1860 });
  assert.equal(model.get('musicalEra'), 'Romantic');
});

test('it detects a composer from the Modern era', function (assert) {
  const model = this.subject({ birthYear: 1945, deathYear: null });
  assert.equal(model.get('musicalEra'), 'Modern');
});
