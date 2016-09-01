import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bc-gallery'],
  didRender(){


  },
  actions: {
    openGallery(index){
      var pswpElement = document.querySelectorAll('.pswp')[0];

      let items = [];
      this.get('building.images').forEach(el=> {
        items.push({
          src: 'http://sophie.of.ru'+el,
          w: 600,
          h: 400
        })
      });
      // define options (if needed)
      var options = {
        // optionName: 'option value'
        // for example:
        index: index // start at first slide
      };

      // Initializes and opens PhotoSwipe
      var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();

    }
  }
});
