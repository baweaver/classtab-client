import QUnit from 'qunit';

function scopeWithVal(scope, val) {
  return find(scope).filter((i, element) => $(element).val() === val);
}

function scopeContains(scope, text) {
  return find(`${scope || ''}:contains(${text})`);
}

function renderedText(element) {
  return element.text().trim().replace(/\s+/g, ' ');
}

export default (function() {
  QUnit.assert.hasText = function(scope, text, message) {
    const element = scopeContains(scope, text);
    QUnit.assert.ok(element.length, message || `Expected to find text "${text}" in "${renderedText(element)}"`);
  };

  QUnit.assert.hasClass = function(selector, className) {
    const element = find(selector);
    QUnit.assert.ok(
      element[0].className.indexOf(className) > -1,
      `Expected element classes "${element.className}" to contain "${className}"`
    );
  };

  QUnit.assert.disabled = function(selector) {
    const element = find(selector);
    QUnit.assert.ok(
      !!element[0].attributes.disabled,
      `Expected element "${selector}" to be disabled"`
    );
  };

  QUnit.assert.enabled = function(selector) {
    const element = find(selector);
    QUnit.assert.ok(
      !element[0].attributes.disabled,
      `Expected element "${selector}" to be enabled"`
    );
  };

  QUnit.assert.hasAttribute = function(selector, attributeName) {
    const element = find(selector);
    QUnit.assert.ok(
      !!element[0].attributes[attributeName],
      `Expected element "${selector}" to have attribute "${attributeName}"`
    );
  };

  QUnit.assert.missingAttribute = function(selector, attributeName) {
    const element = find(selector);
    QUnit.assert.ok(
      !element[0].attributes[attributeName],
      `Expected element "${selector}" not to have attribute "${attributeName}"`
    );
  };

  QUnit.assert.containsText = function(element, ...texts) {
    const elementText = renderedText(element);

    texts.forEach(function(text) {
      QUnit.assert.ok(elementText.indexOf(text) > -1, `Found "${text}" within "${renderedText}".`);
    });
  };

  QUnit.assert.hasValue = function(scope, val, message) {
    const element = scopeWithVal(scope, val);
    QUnit.assert.ok(element.length, message || `Found val "${val}" within scope "${scope}"`);
  };

  QUnit.assert.present = function(scope, message) {
    const element = find(scope);
    QUnit.assert.ok(element.length, message || `${scope} should be present on the page`);
  };

  QUnit.assert.absent = function(scope, message) {
    const element = find(scope);
    QUnit.assert.ok(!element.length, message || `${scope} should be absent from the page`);
  };

  QUnit.assert.hasLink = function(href, text, message) {
    const scope = `a[href*="${href}"]`;
    const element = scopeContains(scope, text);
    QUnit.assert.ok(element.length, message || `Found link "${text}" with reference "${href}" within scope "${scope}"`);
  };
})();
