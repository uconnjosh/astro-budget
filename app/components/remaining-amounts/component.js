import Ember from 'ember'

export default Ember.Component.extend({
  monthlyBudget: Ember.computed('budget', 'totalDebit', function() {
    return this.get('budget')
  }),
  dailyBudget: Ember.computed('budget', 'weeklyBudget', 'dayDebit', function() {
    const dayDebit = this.get('dayDebit')
    const extraDeduction = dayDebit ? dayDebit : 0

    return this.get('dayCredit') - extraDeduction
  }),
  yearlyBudget: Ember.computed('budget', function() {
  	return (this.get('budget') * 12 )
  })
})
