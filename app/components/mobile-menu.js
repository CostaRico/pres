import Ember from 'ember';

export default Ember.Component.extend({
  opened: false,
  actions:{
    beforeScroll(){
      this.set('opened', false);
    }
  }
});
