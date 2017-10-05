
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tuning-name', 'helper:tuning-name', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{tuning-name "E A D G B E"}}`);
  assert.equal(this.$().text().trim(), 'Standard Tuning');

  this.render(hbs`{{tuning-name "D A D G B E"}}`);
  assert.equal(this.$().text().trim(), 'Drop D Tuning');

  this.render(hbs`{{tuning-name "D G D G B E"}}`);
  assert.equal(this.$().text().trim(), 'Drop DG Tuning');

  this.render(hbs`{{tuning-name "E A D F# B E"}}`);
  assert.equal(this.$().text().trim(), 'Lute Tuning');

  this.render(hbs`{{tuning-name "A B C D E F"}}`);
  assert.equal(this.$().text().trim(), 'Unknown Tuning');
});

