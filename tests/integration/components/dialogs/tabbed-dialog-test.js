import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dialogs/tabbed-dialog', 'Integration | Component | dialogs/tabbed dialog', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dialogs/tabbed-dialog}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dialogs/tabbed-dialog}}
      template block text
    {{/dialogs/tabbed-dialog}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
