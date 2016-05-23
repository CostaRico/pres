import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('commentable/leave-comment', 'Integration | Component | commentable/leave comment', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{commentable/leave-comment}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#commentable/leave-comment}}
      template block text
    {{/commentable/leave-comment}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
