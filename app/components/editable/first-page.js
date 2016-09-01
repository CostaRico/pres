import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['first-page', 'presentation__slide'],
  actions:{
    edit(){
      this.set('openedEditor', 'main-pic');
    },
    hide(){
      this.set('openedEditor', null);
    }
  }
});
