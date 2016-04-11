# Astro-budget

### www.astrobudget.com


A [WIP] ember cli app designed to show the big picture when it comes to money.
Enter in simple monthly budget info (income and expenses) and see your
allowances (or free-to-spend) money broken down into how much money you
have per day, week, month, and year. Saving the record will persist your budget
information to the browser's datastore (via pouchDB!!).


ToDo:

- [ ] As a user, I'd like the ability to add purchases, and see how my daily,
weekly, monthly, and yearly allowance changes accordingly.

- [ ] As a user, I'd like the ability to track my budget and see how my
  daily, weekly, monthly, and yearly allowance changes daily if I *don't* spend.

- [ ] As a user, I'd like the ability to take my saving/investment input and see
the future value of my money based on different interest rate scenarios and duration of savings.

- [ ] As a user, I'd like to see how my everyday purchases affect my future weath.
  ie.. a coffee purchased today for $2.50 comes out to $305.86 in 30 years (if invested in the stock market and inflation-adjusted return is 8%)



## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

and visit /budget

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

