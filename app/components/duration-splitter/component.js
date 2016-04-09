import Ember from 'ember'

export default Ember.Component.extend({
  monthlyBudget: Ember.computed('budget', function() {
    return this.get('budget')
  }),
  weeklyBudget: Ember.computed('budget', function() {
    return (this.get('monthlyBudget') / 4 )
  }),
  dailyBudget: Ember.computed('budget', function() {
    return (this.get('weeklyBudget') / 7)
  }),
  yearlyBudget: Ember.computed('budget', function() {
  	return (this.get('budget') * 12 )
  })
})
