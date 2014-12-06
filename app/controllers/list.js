import Ember from 'ember';

export default Ember.ArrayController.extend({

  sortProperties: ['name'],
  sortAscending: true,

  actions: {

    addItem: function() {
      var newItem = this.store.createRecord('list', {
        name: this.get('listItem').capitalize(),
        timestamp: new Date()
      });
      this.set('listItem', '');
      newItem.save();
    },

    deleteItem: function(item) {
      this.store.find('list', item.id).then(function(list) {
        list.deleteRecord();
        list.save();
      });
    },

    toggleList: function() {
      if (this.get('sortProperties.0') === 'timestamp') {
        this.set('sortProperties', ['name']);
        this.set('listType', 'Alphabetical');
      } else {
        this.set('sortProperties', ['timestamp']);
        this.set('listType', 'By timestamp');
      }
    },
    toggleSort: function() {
      this.toggleProperty('sortAscending');
      if (this.get('sortAscending') === false) {
        this.set('sortType', 'Ascending');
      } else {
        this.set('sortType', 'Descending');
      }
    }
  }
});
