import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    mutateCustomImg(value) {
      this.get('mutateCustomImg')(value);
    }
  }
});
