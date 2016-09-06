import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['tabbed-dialog'],
  init(){
    this._super(...arguments);
    this.set('tabs', Ember.A([]));
  },
  tabs: [],

  register(tab){
    if(tab.get('isActive')){
      this.set('selection', tab.get('id'));
    }
    this.get('tabs').addObject({
      label: tab.get('label'),
      isActive: tab.get('isActive'),
      id: tab.get('id')
    });
  },
  actions: {
    saveConfig(){
      this.sendAction('saveConfig');
    },
    selectTab(tab){
      this.set('selection', tab.id);
      this.get('tabs').forEach(el=>{
        Ember.set(el, 'isActive', el.id==tab.id);
      });
    }
  }
});
