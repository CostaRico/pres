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
  }),
  didRender(){

    let that = this;
    let selector = '#'+this.get('elementId')+' .map-cont';
    let cont = document.querySelector(selector);
    ymaps.ready(init);
    var myMap;

    function init(){
      let coords = [that.get("model.buildings.firstObject.building.coords.lat"), that.get("model.buildings.firstObject.building.coords.lon")];
      myMap = new ymaps.Map(cont, {
        center: coords,
        zoom: 15
      });

      that.get('model.buildings').forEach(el=>{
        let b_coords = [el.building.coords.lat, el.building.coords.lon];
        let myPlacemark = new ymaps.Placemark(b_coords);
        myMap.geoObjects.add(myPlacemark);
      });


      myMap.behaviors.disable("scrollZoom");
      let w = window.innerWidth;
      if(w < 500){
        myMap.behaviors.disable("drag");
      }

      let collection = myMap.geoObjects;//.getBounds();

      let centerAndZoom = ymaps.util.bounds.getCenterAndZoom(

        collection.getBounds(),

        myMap.container.getSize(),

        myMap.options.get('projection')

      );
      myMap.setZoom(centerAndZoom.zoom-0.2);
      myMap.setCenter(centerAndZoom.center);
    }
  }
});
