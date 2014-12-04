import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var data = [{
      list: this.store.findAll('list')
    }]
    return data;
  }

  // setupController: function(controller, model) {
  //   controller.set('model', model.get('list'));
  // }
});
