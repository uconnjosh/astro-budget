import DS from 'ember-data';

const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  createdAt: attr(),
  totalDebit: attr('number'),
  dayDebit: attr('number'),
  dayBeginStamp: attr(),
  budget: belongsTo('budget'),
  expenses: hasMany('expense'),
  // pouchDB:
  rev: 		 attr('string'),

  dayCredit: Ember.computed('budget', 'day', 'totalDebit', function() {
    let remainingMoney = this.get('budget.remainingMonthly') - this.get('totalDebit')
    let remainingTime = 30 - this.get('day')

    return remainingMoney / remainingTime
  }),
  day: Ember.computed(function() {
    let oneDay = 86400000
    let now = Date.now()

    return Math.floor( (now - this.get('createdAt')) / oneDay)
  }),
  currentDay: Ember.computed('day', function() {
    return this.get('day') + 1
  })
})
