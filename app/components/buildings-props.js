import Ember from 'ember';

export default Ember.Component.extend({
  pares: Em.computed('model.building.props', function(){
    let i,j,temparray,chunk = 2, result = [];
    let array = this.get('model.building.props');
    if(!array){
      return [];
    }
    for (i=0,j=array.length; i<j; i+=chunk) {
      temparray = array.slice(i,i+chunk);
      result.push(temparray);
    }
    return result;
  })
});
