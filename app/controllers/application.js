/**
 * Created by costa on 16.05.16.
 */

export default Ember.Controller.extend({
  queryParams: ['id'],
  id: null,
  editMode: true,
  isMobileMenuOpened: false,
  openedEditor: false,
  items: [
    {
      src: 'http://placekitten.com/g/600/400',
      w: 800,
      h: 400,
      title: 'whooa'
    },
    {
      src: 'http://placekitten.com/g/600/400',
      w: 800,
      h: 400,
      title: 'whooa'
    },
    {
      src: 'http://placekitten.com/g/600/400',
      w: 800,
      h: 400,
      title: 'whooa'
    }
  ],
  newConfig: {},
  blockItems: [
    {
      src: 'http://of.ru/images/Block16466/67322a0495-8_800x600.JPG',
      w: 800,
      h: 600,
      title: 'whooa'
    },
    {
      src: 'http://of.ru/images/Block16466/9d9b8fb275-1_800x600.JPG',
      w: 800,
      h: 600,
      title: 'whooa'
    },
    {
      src: 'http://of.ru/images/Block16466/48028f30ea-2_800x600.JPG',
      w: 800,
      h: 600,
      title: 'whooa'
    }
  ],
  init: function () {
    this._super();
    Ember.run.schedule("afterRender", this, function () {
      this.send("afterRender");
    });
  },

  setBackground(element, imgUrl){
    /*let prefixes = ["-webkit-background-size",
      "-moz-background-size",
      "-o-background-size",
      "background-size"];
    prefixes.forEach(el=>{
      element.style[el] = '100%';
    });*/
    //imgUrl = 'http://sophie.of.ru/system/pres'+imgUrl;
    element.style["background"] = `url(${imgUrl}) no-repeat center center`;
    //element.style["background"] = `url(${imgUrl}) top center`;
    element.style.backgroundSize = 'cover';
  },

  actions: {
    setEditableModal(name){
      this.set('openedEditor', name);
    },
    hideEditing(){

      this.set('openedEditor', false);
    },
    afterRender(){
      this.send('setBackgrounds');
    },
    saveConfig(localConfPath, data){
      this.set('newConfig'+localConfPath, data);
      let r = new XMLHttpRequest();
      let that = this;
      r.open("POST", "/presentations/data/update_config", true);
      r.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        that.send('setBackgrounds');
        that.set('openedEditor', null);
        alert('Данные сохранены!');

      };


      r.send(
        JSON.stringify({
          new_config: this.get('newConfig'),
          id: this.get('id')
        })
      );

    },
    setBackgrounds(){

      //Main image
      let firstPage = document.querySelectorAll('div.first-page')[0];
      let imgUrl = this.get('model.first_slide.backgroundPhoto');
      this.setBackground(firstPage, imgUrl);

      //Building-view images
     /* let firstBuilingImageEl = document.querySelectorAll('div.building-view__img')[0];
      let secondBuilingImageEl = document.querySelectorAll('div.building-view__img')[1];

      let firstBuildingImageUrl = this.get('model.building.firstImg');
      let secondBuildingImageUrl = this.get('model.building.secondImg');


      this.setBackground(firstBuilingImageEl, firstBuildingImageUrl);
      this.setBackground(secondBuilingImageEl, secondBuildingImageUrl);*/



      //this.setBackground(firstPage, imgUrl);


    }
  }
});

