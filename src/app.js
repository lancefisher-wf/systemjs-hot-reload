var React = require('react');
var Hello = require('Hello');

console.log('loaded app.js', name);

var container = document.getElementById('react');
React.render(
    React.createElement(Hello, { name: 'World'}),
    container
);