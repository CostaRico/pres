import Ember from 'ember';
import {getJSON} from 'present/ajax'
export default Ember.Component.extend({
  buildingId: Em.computed('building.id', function(){
    return '#bld_'+this.get('building.id');
  }),
  buildingIdClean: Em.computed('building.id', function(){
    return 'bld_'+this.get('building.id');
  }),
  bldConfig: Em.computed('config', 'building.id', function(){
    let bldId = this.get('building.id');
    let config = this.get('config');
    let res = false;
    config.forEach(bld=>{
      if(bld.building.id == bldId){
        res = bld.building;
      }
    });
    return res;
  }),
  blocksConfig: Em.computed('config', 'building.id', function(){
    let bldId = this.get('building.id');
    let config = this.get('config');
    let res = false;
    config.forEach(bld=>{
      if(bld.building.id == bldId){
        res = bld.blocks;
      }
    });
    return res;
  }),
  preloadedPicsLoader: function(){
    let buildingID = this.get('building.id');
    if(!buildingID){return;}
    getJSON(`/buildings/${buildingID}/images?type=public_images`).then(({data})=>{
      let res = [];
      data.forEach(el=>{
        res.push(`http://sophie.of.ru/${el.attributes.url}`);
      });
      this.set('preloadedPics', Ember.A(res));
    }, error=>{console.log(error);})
  }.on('didReceiveAttrs'),


  actions:{
    setEditableModal(p){
      this.sendAction('setEditableModal', p);
    },
    saveConfig(){
      this.sendAction('saveConfig', 'buildings', this.get('config'));
    },
    editFirstPic(){
      this.set('openedEditor', 'editFirstPic');
    },
    hide(){
      this.set('openedEditor', null);

    }
  }
});
