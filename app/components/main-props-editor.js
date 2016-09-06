import Ember from 'ember';

export default Ember.Component.extend({
  toEdit: Em.computed('path', 'config', function(){
    return this.get('config.'+this.get('path'));
  })
});
