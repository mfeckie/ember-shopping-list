import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['name'],

  actions: {
    addItem: function(item) {
      var newItem = this.store.createRecord('list', {
        name: item
      });
      this.set('listItem', '');
      newItem.save();
    }
  }
});
