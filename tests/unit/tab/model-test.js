import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tab', 'Unit | Model | tab', {
  // Specify the other units that are required for this test.
  needs: ['model:composer']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
