import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dialogs/tab-d', 'Integration | Component | dialogs/tab d', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dialogs/tab-d}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dialogs/tab-d}}
      template block text
    {{/dialogs/tab-d}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
