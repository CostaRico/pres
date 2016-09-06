/**
 * Created by costa on 14.06.16.
 */

export default Ember.Route.extend({
  beforeModel(transition){
    if (!transition.queryParams.id) {
      console.log('NO ID FOR PRESENTATION');
    }
    this.set('presID', transition.queryParams.id);
  },
  model(params){
    let url = 'http://localhost:3000/presentations/data/landing_data?id=' + this.get('presID');
    let localUrl = '/presentations/data/landing_data?id='+this.get('presID');

    if (this.get('fastboot.isFastBoot')) {

    }else{
      return this.getJSON(localUrl).then(function (data) {
        return data;
      }, function (reason) {
        // on rejection
        console.log('Иизвините, произошла ошибка.');
      });
    }


  },
  afterModel(model){
    this.controllerFor('application').set('newConfig', model);
  },
  getJSON(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      }
    });
  }
});
