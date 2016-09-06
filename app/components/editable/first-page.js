import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['first-page', 'presentation__slide'],
  localConfig: {
    backgroundPhoto: null,
    clientName: null
  },
  init(){
    this._super(...arguments);
    let originalConf = this.get('config');
    this.set('localConfig', originalConf);
  },
  actions:{
    saveConfig(){
      this.sendAction('saveConfig', 'first_slide', this.get('localConfig'));
    },
    edit(){
      this.set('openedEditor', 'main-pic');
    },
    hide(){
      this.set('openedEditor', null);
    },
    setColor(val){
      this.set('localConfig.font_color', val);
    }
  },

  /*openedEditorObserver: Em.observer('openedEditor', function(sender){
    debugger;
  }),*/
  preloadedPics: Ember.A([
    '/main_pic.jpg',
    '/main_pic2.jpg',
    '/main_pic3.jpg',
    '/main_pic4.jpg',
    '/main_pic5.jpg'
  ])

});
