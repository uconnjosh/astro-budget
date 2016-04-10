import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  monthlyIncome: attr('number'),
  monthlySaving: attr('number'),
  monthlyDebt:   attr('number'),
  monthlyRent:   attr('number'),
  monthlyBills:  attr('number'),
  // pouchDB:
  rev: 			 attr('string')
})
