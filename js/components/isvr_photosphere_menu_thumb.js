AFRAME.registerComponent('isvr-photosphere-menu-thumb', {

    init: function() {

      /*this.el.addEventListener('click', this.onClick.bind(this));*/
      
      var elem=this;
      var timer;

      this.el.addEventListener('mouseenter', function () {
        timer = setTimeout(function(){ changePhoto(elem); }, 1500);
        document.querySelector('#cursor').setAttribute("material","color","red");
      });

      this.el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
        document.querySelector('#cursor').setAttribute("material","color","blue");
      });

    },

    /*onClick: function(evt) {

      var position = this.el.getAttribute('position');

      if (this.el.parentEl.getAttribute('visible') && position.z == 0.5) {

        var id = this.el.getAttribute('data-image-id');
        id = '#img-photosphere-' + id;

        if (document.querySelector('#photosphere').getAttribute('material').src != id) {

          //document.querySelector('#photosphere-menu').setAttribute('visible', false);
          //document.querySelector('#cursor').setAttribute('visible', false);
          document.querySelector('#img-photosphere-displayer-img').setAttribute('material', 'src', id);

        }
      }

    },*/

    update: function(oldData) {
    },

    remove: function() {
    }

});

function changePhoto(elem){

    //console.log(elem);

      var position = elem.el.getAttribute('position');

    /* prevent immediate selection of image after menu appears */
    if (elem.el.parentEl.getAttribute('visible')) {

      var id = elem.el.getAttribute('data-image-id');
      //console.log(id);
      photo_id = '#img-photosphere-' + id;
      arrow_id = '#arrow-' + id;

      /* keep menu if material is the same */
      if (document.querySelector('#photosphere').getAttribute('material').src != photo_id) {

        //document.querySelector('#photosphere-menu').setAttribute('visible', false);
        //document.querySelector('#cursor').setAttribute('visible', false);
        document.querySelector('#img-photosphere-displayer-img').setAttribute('material', 'src', photo_id);
        document.querySelector('#e-arrow-3').setAttribute('visible', true);
        document.querySelector('#i-arrow-3').setAttribute('src', arrow_id);

        document.querySelector('#e-arrow-4').setAttribute('visible', true);
        document.querySelector('#i-arrow-4').setAttribute('src', arrow_id);
      }
    }
}