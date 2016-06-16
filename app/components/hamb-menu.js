import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  classStr: Ember.computed('isOpen', function(){
    return (this.get('isOpen')) ? 'open' : '';
  }),
  actions: {
    toggle(){
      this.toggleProperty('isOpen');
    }
  }
});
