import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    setEditableModal(p){
      this.sendAction('setEditableModal', p);
    },
    editFirstPic(){
      this.set('openedEditor', 'editFirstPic');
    },
    hide(){
      this.set('openedEditor', null);
    }
  }
});
