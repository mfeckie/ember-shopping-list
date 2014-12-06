import Ember from 'ember';

export function formatDate(input) {
  return  moment(input).format("h:mm a, dddd");
}

export default Ember.Handlebars.makeBoundHelper(formatDate);
