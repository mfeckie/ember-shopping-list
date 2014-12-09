/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var compileSASS = require('broccoli-sass');

var app = new EmberApp();

var styles = 'styles';

compileSASS([styles], './app/styles/app.scss', './app/styles/app.css')

module.exports = app.toTree();
