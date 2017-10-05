import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tab-viewer', 'Integration | Component | tab viewer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('tab', {
    name:    'test',
    tabFile: 'foo'
  });

  this.render(hbs`{{tab-viewer tab=tab}}`);

  assert.equal(this.$('a[href="foo"]').text().trim(), 'test');
});
