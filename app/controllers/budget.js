import Ember from 'ember'

const {
  Controller
} = Ember

export default Controller.extend({
  remainingMonthly: Ember.computed('monthlyIncome', 'monthlySaving', 'monthlyDebt', function() {

    let budget = this.get('model')
    let totalExpense = budget.get('monthlyDebt') + budget.get('monthlySaving')
    return budget.get('monthlyIncome') - totalExpense
  })
})
