import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  monthlyIncome: attr('number'),
  monthlySaving: attr('number'),
  monthlyDebt:   attr('number'),
  monthlyRent:   attr('number'),
  monthlyBills:  attr('number'),
  months:        hasMany('month'),
  remainingMonthly: Ember.computed('model.monthlyIncome', 'model.monthlySaving', 'model.monthlyDebt', 'model.monthlyRent', 'model.monthlyBills', function() {
    let totalExpense = parseInt(this.get('monthlyDebt')) + parseInt(this.get('monthlySaving')) + parseInt(this.get('monthlyRent')) + parseInt(this.get('monthlyBills'))
    return this.get('monthlyIncome') - totalExpense
  }),
  // pouchDB:
  rev: 			 attr('string')
})
