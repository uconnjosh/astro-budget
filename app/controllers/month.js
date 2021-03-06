import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    destroy: function() {
      let doYouReally = confirm('Do you really want to reset the day of the month to 1?? (this will erase all expenses and month related data)')
      if (doYouReally == true) {
        this.model.deleteRecord()
        this.model.save()
        this.transitionToRoute('home')
      } else {
        return;
      }
    },
    updateNewExpenseKind: function(expenseKind) {
      this.set('newExpenseKind', expenseKind.value)
    },
    addExpense: function() {
      let _this = this
      let newExpense = this.store.createRecord('expense', {
        kind: this.get('newExpenseKind'),
        amount: this.get('newExpenseAmount'),
        description: this.get('newExpenseDescription')
      })

      newExpense.save().then(function(savedExpense) {
        _this.addDebit(savedExpense)
      })
    }
  },
  balance: Ember.computed('model.totalDebit', function() {
    let remainingMonthly = this.get('model.budget.remainingMonthly')
    let debits = this.get('model.totalDebit')

    return (remainingMonthly - debits)
  }),
  newExpenseKind: Ember.computed(function() {
    return 'day'
  }),
  newExpenseAmount: Ember.computed(function() {
    return 0
  }),
  newExpenseDescrip: Ember.computed(function() {
    return ''
  }),
  addDebit: function(expense) {
    var newDebit = expense.get('amount')
    var kind = expense.get('kind')
    var month = this.get('model')
    var _this = this

    switch(kind) {
      case 'day':
        let dayDayDebit = month.get('dayDebit')
        let dayWeekDebit = month.get('weekDebit')
        let dayTotalDebit = month.get('totalDebit')

        month.set('dayDebit', (dayDayDebit + newDebit))
        month.set('totalDebit', (dayTotalDebit + newDebit))
        month.save()
        break;
      case 'month':
        let monthDebit = this.get('model.totalDebit')

        month.set('totalDebit', (monthDebit + newDebit))
        month.save().then(function() {
          _this.send('updateDayAllowanceAction', month)
        })
    }
  }
})
