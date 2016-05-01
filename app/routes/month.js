import Ember from 'ember';

const {
  RSVP
} = Ember

export default Ember.Route.extend({
  model() {
  	return this._findOrCreate()
  },
  // move find or create logic here?
  afterModel: function(month, /*transition*/) {
    let now = Date.now()
    let oneDay = 86400000
    let oneWeek = oneDay * 7

    if (now - month.get('dayBeginStamp') > oneDay) {
      month.set('dayDebit', 0)
    }

    if (now - month.get('weekBeginStamp') > oneWeek) {
      month.set('weekDebit', 0)
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
              weekDebit: 0,
              // weekCredit: returnedBudget.get('remainingMonthly') / 4.33,
              weekBeginStamp: now,
              dayDebit: 0,
              // dayCredit: returnedBudget.get('remainingMonthly') / 30,
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
