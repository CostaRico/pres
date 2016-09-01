import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['buildings-list-cont'],
  buildings: Ember.computed(function(){
    return [
      {
        id: 1,
        name: 'build 1'
      },
      {
        id: 2,
        name: 'build 2'
      },
      {
        id: 3,
        name: 'build 3'
      },
      {
        id: 4,
        name: 'build 3'
      },
      {
        id: 5,
        name: 'build 3'
      }
    ]
  })
});
