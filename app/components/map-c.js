import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['map page__map'],
  didRender(){

    let selector = '#'+this.get('elementId')+' .map__container';
    let cont = document.querySelector(selector);
    ymaps.ready(init);
    var myMap;

    function init(){
      myMap = new ymaps.Map(cont, {
        center: [55.76, 37.64],
        zoom: 15
      });
      myMap.behaviors.disable("scrollZoom");
    }
  }
});
