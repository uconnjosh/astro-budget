import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('budget');
  this.route('home');
  this.route('new');
  this.route('month');
});

export default Router;
