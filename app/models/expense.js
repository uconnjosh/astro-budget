import DS from 'ember-data'

const { Model, attr, belongsTo } = DS
export default Model.extend({
  kind: attr('string'),
  amount: attr('number'),
  description: attr('string'),
  month: belongsTo('month'),

  rev: attr('string')
})
