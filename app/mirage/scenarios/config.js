export default function() {

  this.get('/budgets', function(db /*, request */) {
    return {
      data: db.budgets.map(attrs => (
        { type: 'budgets', id: attrs.id, attributes: attrs }))
    }
  })
}
