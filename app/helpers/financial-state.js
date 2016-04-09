import Ember from 'ember'

export function financialState(params) {
  let remainingFunds = params[0]

  if (remainingFunds > 0) {
    return 'have money....'
  } else {
    return 'we are broke.......'
  }

}

export default Ember.Helper.helper(financialState)
