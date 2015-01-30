var React = require('react');
var Hello = require('Hello');

console.log('loaded app.js', name);

var container = document.getElementById('react');
reactElement = React.createElement(Hello, { name: 'World'});
window.re = reactElement;
React.render(
    reactElement,
    container
);