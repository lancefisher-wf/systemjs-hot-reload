var React = require('react');

var Hello = React.createClass({
    displayName: 'Hello',

    componentWillMount: function() {
    },

    handleButtonClick: function() {
        this.setState({ counter: this.state.counter + 1 });
    },

    getInitialState: function() {
        var state = {
            counter: 1
        };

        if (window.helloState) {
            return window.helloState;
        }
        return state;
    },

    getState: function() {
        return this.state;
    },

    render: function() {
        window.helloState = this.state;
        console.log('render');
        return React.createElement('div',
            null,
            'Hi ',
            this.props.name,
            this.state.counter,
            React.createElement('button', { onClick: this.handleButtonClick }, 'increment')
        );
    }
});

console.log('loaded Hello');

module.exports = Hello;