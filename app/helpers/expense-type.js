import Ember from 'ember';

export function expenseType() {
  return Types.all
}

var Types = {
  all: [
    { 'display_name': 'Day', 'value': 'day' },
    { 'display_name': 'Month', 'value': 'month' },
  ]
}

export default Ember.Helper.helper(expenseType);
