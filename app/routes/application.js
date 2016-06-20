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
    return this.getJSON('/presentations/data/landing_data?id=' + this.get('presID')).then(function (json) {
      // on fulfillment
      return json;
    }, function (reason) {
      // on rejection
      console.log('Иизвините, произошла ошибка.');
    });
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
