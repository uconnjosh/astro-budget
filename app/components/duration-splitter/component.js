import Ember from 'ember'

export default Ember.Component.extend({
  monthlyBudget: Ember.computed('budget', 'totalDebit', function() {
    const totalDebit = this.get('totalDebit')
    const extraDeduction = totalDebit ? totalDebit : 0

    return this.get('budget') - extraDeduction
  }),
  weeklyBudget: Ember.computed('budget', 'monthlyBudget', 'weekDebit', function() {
    const weekDebit = this.get('weekDebit')
    const extraDeduction = weekDebit ? weekDebit : 0

    return (this.get('monthlyBudget') / 4 ) - extraDeduction
  }),
  dailyBudget: Ember.computed('budget', 'weeklyBudget', 'dayDebit', function() {
    const dayDebit = this.get('dayDebit')
    const extraDeduction = dayDebit ? dayDebit : 0

    return (this.get('weeklyBudget') / 7) - extraDeduction
  }),
  yearlyBudget: Ember.computed('budget', function() {
  	return (this.get('budget') * 12 )
  })
})
