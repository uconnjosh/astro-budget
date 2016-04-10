import Ember from 'ember'

const {
  Controller
} = Ember

export default Controller.extend({
  actions: {
    save: function() {
      this.model.save()
    }
  },
  remainingMonthly: Ember.computed('model.monthlyIncome', 'model.monthlySaving', 'model.monthlyDebt', 'model.monthlyRent', 'model.monthlyBills', function() {

    let budget = this.get('model')
    let totalExpense = parseInt(budget.get('monthlyDebt')) + parseInt(budget.get('monthlySaving')) + parseInt(budget.get('monthlyRent')) + parseInt(budget.get('monthlyBills'))
    return budget.get('monthlyIncome') - totalExpense
  })
})
