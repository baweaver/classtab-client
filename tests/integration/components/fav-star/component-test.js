import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fav-star', 'Integration | Component | fav star', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fav-star}}`);

  assert.equal(this.$().text().trim(), '');
  assert.equal(this.$().find('.glyphicon-star-empty').length, 1);
});

test('it can favorite', function (assert) {
  this.set('favorites', [1]);

  this.render(hbs`{{fav-star favorites=favorites id=1}}`);

  assert.equal(this.$().find('.glyphicon-star').length, 1, "The star appears");
});
