import Ember from 'ember';

export default Ember.Component.extend({
  pares: Em.computed('building.props', function(){
    let i,j,temparray,chunk = 2, result = [];
    let array = this.get('building.props');
    if(!array){
      return [];
    }
    for (i=0,j=array.length; i<j; i+=chunk) {
      temparray = array.slice(i,i+chunk);
      result.push(temparray);
    }
    return result;
  }),
  didRender(){
    window.fitText( document.querySelectorAll(".feature"), 1.2 );
  }
});
