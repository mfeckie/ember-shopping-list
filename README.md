# Shopping-list
### Currently deployed at https://emberfireapp.firebaseapp.com

This is currently a wee prototype Ember version of [SHarissis Angular Shopping List App](https://github.com/sharissis/Shopping-List).
Uses:
- [ember.js](http://emberjs.com/) via [ember-cli](http://www.ember-cli.com/)
- [Ember-Data](http://emberjs.com/api/data/)
- [Firebase](http://www.firebase.com) for both the database and hosting

To run this app, follow instructions below.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)
* [Ember-CLI](http://www.ember-cli.com/) (`npm install -g ember-cli`)

## Installation

* `git clone https://github.com/JDillon522/ember-shopping-list.git`
* `cd ember-shopping-list`
* `npm install`

## Running / Development

* `ember server`
* Open your browser at [http://localhost:4200](http://localhost:4200).

### Running Tests
#### Note: currently broken because of [Content Security Policy](https://github.com/rwjblue/ember-cli-content-security-policy) issues

* `ember test`
* `ember test --server`
