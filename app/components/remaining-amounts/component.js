import Ember from 'ember'

export default Ember.Component.extend({
  monthlyBudget: Ember.computed('budget', 'totalDebit', function() {
    return this.get('budget')
  }),
  dailyBudget: Ember.computed('dayDebit', 'dayCredit', function() {
    return this.get('dayCredit') - this.get('dayDebit')
  }),
  yearlyBudget: Ember.computed('budget', function() {
  	return (this.get('budget') * 12 )
  })
})
