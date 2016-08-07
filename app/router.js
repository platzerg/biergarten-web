import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register');
  this.route('login');
  this.route('logout');
  this.route('boards', {path: 'boards/:userId'}, function() {
    this.route('lists', {path: 'lists/:boardId'});
  });
});

export default Router;
