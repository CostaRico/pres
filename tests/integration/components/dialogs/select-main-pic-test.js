import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dialogs/select-main-pic', 'Integration | Component | dialogs/select main pic', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dialogs/select-main-pic}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dialogs/select-main-pic}}
      template block text
    {{/dialogs/select-main-pic}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
