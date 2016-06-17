/**
 * Created by costa on 14.06.16.
 */
export default Ember.Route.extend({
  model(){
    let model = this.getJSON('/presentations/data/landing_data').then(function(json) {
      // on fulfillment
      return json;
    }, function(reason) {
      // on rejection
      console.log('Иизвините, произошла ошибка.');
    });

    return model;
    /*return Ember.Object.create({
     h1: 'Коммерческая<br /> недвижимость в&nbsp;Москве',
     h2: 'презентация для компании «Альфа-групп»',
     "bc-class": 'A',
     backgroundPhoto: '/main_pic.png',
     building: {
     name: 'МФК Башня Федерация',
     shortDescription: `Бизнес-центр «Башня Федерация» &mdash; самый известный объект в ММДЦ «Москва-Сити». Большую известность
     объект приобрел, когда начиналось его строительство и принадлежал он известному предпринимателю Сергею Полонскому`,
     description: `Бизнес-центр «Башня Федерация» &mdash; самый известный объект в ММДЦ «Москва-Сити». Большую известность
     объект приобрел, когда начиналось его строительство и принадлежал он известному предпринимателю Сергею Полонскому.
     Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла
     Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла
     Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла
     Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла
     Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла
     Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла
     Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла Бла-бла бла бла бла `,
     firstImg: 'http://of.ru/images/Object26/7724f42572-2.jpg',
     secondImg: 'http://www.layoverguide.com/wp-content/uploads/2010/01/Moscow-city-center-Russia.jpg'
     },
     managerPhoto: '/agent.png'

     });*/
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
