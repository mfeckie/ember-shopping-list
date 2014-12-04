import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var data = {
      comments: this.store.findAll('comments'),
      posts: this.store.findAll('posts'),
      users: this.store.findAll('users')
    };

    return data;
  }
});
