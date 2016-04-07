import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  monthlyIncome: attr(),
  monthlySaving: attr(),
  monthlyDebt:   attr()
})
