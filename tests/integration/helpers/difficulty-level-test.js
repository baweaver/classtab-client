import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('difficulty-level', 'helper:difficulty-level', {
  integration: true
});

let description = '';

test('it renders', function(assert) {
  this.render(hbs`{{difficulty-level "easy"}}`);

  description = 'It renders a green circle for easy';
  assert.equal(this.$().text().trim(), 'fa-circle text-success', description);

  this.render(hbs`{{difficulty-level "intermediate"}}`);

  description = 'It renders a blue square for intermediate';
  assert.equal(this.$().text().trim(), 'fa-square text-info', description);

  this.render(hbs`{{difficulty-level "advanced"}}`);

  description = 'It renders a yellow diamond for advanced';
  assert.equal(this.$().text().trim(), 'fa-diamond text-warning', description);

  this.render(hbs`{{difficulty-level "expert"}}`);

  description = 'It renders a red danger sign for expert';
  assert.equal(this.$().text().trim(), 'fa-exclamation-triangle text-danger', description);

  this.render(hbs`{{difficulty-level "none"}}`);

  description = 'It renders an empty circle when no difficulty is defined';
  assert.equal(this.$().text().trim(), 'fa-circle-o', description);
});

