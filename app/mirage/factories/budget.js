/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  monthlyIncome: faker.list.random(3000, 2000, 5000),
  monthlySaving: faker.list.random(0, 100, 200, 500, 1000, 1500, 1800),
  monthlyDebt:   faker.list.random(0, 100, 400, 500, 1000, 3500)
  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode
});
