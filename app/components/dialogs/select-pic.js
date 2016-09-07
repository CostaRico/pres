import Ember from 'ember';
//import ss from 'npm:simple-ajax-uploader'
export default Ember.Component.extend({
  classNames: ['select-main-pic'],
  preloaded: Em.computed('preloadedPics', 'otherPics', 'imageID', function () {
    let res = Em.A([]);
    res.pushObjects(Em.A(this.get('preloadedPics')));
    res.pushObjects(Em.A(this.get('otherPics')));
    /*TODO: load other pics from server */

    return res;
  }),
  /*init(){
    this._super(...arguments);


  },*/
  didReceiveAttrs(){
    if(this.get('modelID')){
      this.getOtherPics();
    }
  },
  getOtherPics(){
    let that = this;
    new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      that.set('loadingOtherPics', true);
      xhr.open('GET', that.get('url'));
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + that.get('url') + '` failed with status: [' + this.status + ']'));
          }
        }
      }
    }).then(({data})=>{
      let res = [];
      data.forEach(el=>{
        res.push(`http://sophie.of.ru${el.attributes.url}`);
      });
      that.set('otherPics', res);
      that.set('loadingOtherPics', false);
    }, el=>{
      that.set('loadingOtherPics', false);
    });
  },
  otherPics: [],
  type: 'background_images',
  didRender(){
    let selector = '#' + this.get('elementId') + ' input[type=file]';
    let inputElement = document.querySelector(selector);
    let form = document.querySelector('#' + this.get('elementId') + ' .ajax-upload');
    let that = this;
    if(!inputElement){return;}
    inputElement.onchange = function (event) {
      let fileList = inputElement.files;
      that.set('uploadingPhotos', true);
      if (fileList.length > 0) {
        let formData = new FormData(form);
        let request = new XMLHttpRequest();
        request.open('POST', that.get('url'));
        request.send(formData);
        request.onreadystatechange = function () {
          if (request.readyState != 4 || request.status != 200) return;
          that.getOtherPics();
          that.set('uploadingPhotos', false);
          alert('Данные сохранены!');
        };
      }
    }
  },
  url: Ember.computed('type', 'modelCtrl', 'modelID', function(){
    let type = this.get('type');
    let id = this.get('modelID');
    let ctrl = this.get('modelCtrl');

    return `/${ctrl}/${id}/images?type=${type}`;
  }),
  actions: {
    selectURL(url){
      this.set('selectedURL', url);
    }
  }
});
