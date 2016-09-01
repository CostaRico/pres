import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('icons/provider-svg', 'Integration | Component | icons/provider svg', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{icons/provider-svg}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#icons/provider-svg}}
      template block text
    {{/icons/provider-svg}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
