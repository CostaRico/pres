import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bc-gallery'],
  didRender(){


  },
  actions: {
    openGallery(index){
      var pswpElement = document.querySelectorAll('.pswp')[0];


// build items array
      var items = [
        {
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        },
        {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }
      ];

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
