import Ember from 'ember';

export default Ember.ArrayController.extend({
  start: function() {
    this.set('list', Ember.Object.create());
  }.on('init'),

  sortProperties: ['name'],
  sortAscending: true, // sorts post by timestamp

  actions: {
    addItem: function() {
      var newItem = this.store.createRecord('list', {
        name: this.get('listItem'),
        timestamp: new Date()
      });
      this.set('listItem', '');
      newItem.save();
    },
    deleteItem: function(item) {
      var what = this.store.find('list', item.id).then(function(list) {
        list.deleteRecord()
        list.save();
      })
    }
  }
});
