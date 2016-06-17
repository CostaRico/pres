import Ember from 'ember';

export default Ember.Component.extend({
  didRender(){

    window.onscroll = ()=>{
      Ember.run.debounce(this, function() {
        this.send('setOpacity');
      }, 5);

    };
  },
  actions:{
    setOpacity(){
      let realY = window.pageYOffset;
      let ourY = parseFloat(realY/8);
      let defaultOpacity = 1.00;
      let opacity = defaultOpacity - ((ourY+40)/100)+0.6;
      /*console.log('========');
      console.log(opacity);
      console.log(defaultOpacity);
      console.log(realY+40);
      console.log(realY);*/
      if(realY>40){
        if(opacity < 0.6){
          opacity = 0.6;
        }
      }else{
        opacity = defaultOpacity;
      }


      let header = document.querySelector('.presentation-header');
      header.style.opacity = opacity;
    }
  }
});
