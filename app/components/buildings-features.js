import Ember from 'ember';

export default Ember.Component.extend({
  didRender(){
    window.fitText( document.querySelectorAll(".feature"), 1.2, {
      maxFontSize: '17px'
    } );

  }
});
