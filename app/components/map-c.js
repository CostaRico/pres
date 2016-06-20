import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['map page__map'],
  didRender(){

    let that = this;
    let selector = '#'+this.get('elementId')+' .map__container';
    let cont = document.querySelector(selector);
    ymaps.ready(init);
    var myMap;

    function init(){
      let coords = [that.get("model.building.coords.lat"), that.get("model.building.coords.lon")];
      myMap = new ymaps.Map(cont, {
        //center: [55.76, 37.64],
        center: coords,
//        center: [that.get("model.building.coords.lon"), that.get("model.building.coords.lat")],
        zoom: 15
      });

      let myPlacemark = new ymaps.Placemark(coords);
      myMap.geoObjects.add(myPlacemark);

      myMap.behaviors.disable("scrollZoom");
      let w = window.innerWidth;
      if(w < 500){
        myMap.behaviors.disable("drag");
      }
    }
  }
});
