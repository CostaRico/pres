import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    setEditableModal(p){
      this.sendAction('setEditableModal', p);
    },
    hide(){
      this.set('openedEditor', null);
    }
  }
});
