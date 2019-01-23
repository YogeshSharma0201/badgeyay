import Component from '@ember/component';

export default Component.extend({
  backColor      : '',
  defColor       : '',
  defImageName   : 'red_futuristic',
  imageData      : '/images/badge_backgrounds/red_futuristic.png',

  actions: {
    CustomBgClicked() {
      let idx = this.get('idx');
      document.getElementById('custimg'+idx).style.display = 'none';
      document.getElementById('custbg'+idx).style.display = 'block';
      document.getElementById('custcol'+idx).style.display = 'none';
    },

    CustomColClicked() {
      let idx = this.get('idx');
      document.getElementById('custimg'+idx).style.display = 'none';
      document.getElementById('custbg'+idx).style.display = 'none';
      document.getElementById('custcol'+idx).style.display = 'block';
    },

    CustomImgClicked() {
      let idx = this.get('idx');
      document.getElementById('custimg'+idx).style.display = 'block';
      document.getElementById('custbg'+idx).style.display = 'none';
      document.getElementById('custcol'+idx).style.display = 'none';
    },

    mutateCustomImg(image) {
      let idx = this.get('idx');
      this.send('customImg', idx, image);
    },

    mutateDefColor(color) {
      let idx = this.get('idx');
      this.send('defColor', idx, color);
    },

    mutateBackground(id) {
      let idx = this.get('idx');
      this.send('background', idx, id);
    }
  }
});
