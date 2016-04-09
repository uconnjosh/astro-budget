/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
 'monthly-income': faker.list.random(3000, 2000, 5000, 0),
 'monthly-saving': faker.list.random(0, 100, 200, 500, 1000, 1500, 1800),
 'monthly-debt':   faker.list.random(0, 100, 400, 500, 1000, 3500),
 'monthly-rent':   faker.list.random(0, 400, 500, 600, 700, 800, 900, 1000, 1200, 1300, 1400, 2000),
 'monthly-bills':  faker.list.random(0, 10, 20, 50, 70, 100, 200, 300, 1000)
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
