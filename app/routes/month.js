import Ember from 'ember';

const {
  RSVP
} = Ember

export default Ember.Route.extend({
  model() {
  	return this._findOrCreate()
  },
  afterModel: function(month, /*transition*/) {
    let now = Date.now()
    let oneDay = 86400000

    if (now - month.get('dayBeginStamp') > oneDay) {
      month.set('dayDebit', 0)
    }
  },
  _findOrCreate: function() {
    return new RSVP.Promise((resolve) => {
      var _this = this

      this._month().then(function(value) {
        if (value.hasOwnProperty('id')) {
          resolve(value)
        } else {
          _this.store.findRecord('budget', 1).then(function(returnedBudget) {
            let now = Date.now()
            let newMonth = _this.store.createRecord('month', {
              id: 1,
              totalDebit: 0,
              dayDebit: 0,
              dayBeginStamp: now,
              createdAt: now,
              budget: returnedBudget
            })

            newMonth.save()
            resolve(newMonth)
          })
        }
      })
    }, 'Promise: `_findOrCreate')
  },
  _month: function() {
    return new RSVP.Promise((resolve) => {
      this.store.findRecord('month', 1).catch(function(reason) {
        resolve(reason)
      }).then(function(value) {
        resolve(value)
      })
    }, 'Promise: `_month')
  }
});
