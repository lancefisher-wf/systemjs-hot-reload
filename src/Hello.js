var React = require('react');

var Hello = React.createClass({
    displayName: 'Hello',
    render: function() {
        return React.createElement(
            'div',
            null,
            'Hi ',
            this.props.name
        );
    }
});

console.log('loaded Hello');

module.exports = Hello;