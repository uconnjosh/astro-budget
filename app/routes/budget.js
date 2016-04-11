import Ember from 'ember';

const {
  RSVP
} = Ember

export default Ember.Route.extend({
  model() {
  	return this._findOrCreate()
  },
  _findOrCreate: function() {
    return new RSVP.Promise((resolve) => {
      var _this = this

   	  this._budget().then(function(value) {
   	  	if (value.hasOwnProperty('id')) {
   	  	  resolve(value)
   	    } else {
   	      const newBudget = _this.store.createRecord('budget', {
   	        monthlyIncome: 0,
   	        monthlySaving: 0,
   	        monthlyDebt:   0,
   	        monthlyRent:   0,
   	        monthlyBills:  0,
   	        id:            1
   	      })
   	      newBudget.save()
   	      resolve(newBudget)
   	    }
   	  })
    }, 'Promise: `_findOrCreate')
  },
 _budget: function() {
  	return new RSVP.Promise((resolve) => {
  	  this.store.findRecord('budget', 1).catch(function(reason) {
  	    resolve(reason.message)
  	  }).then(function(value) {
  	  	resolve(value)
  	  })
  	}, 'Promise: `_budget')
  }
})

