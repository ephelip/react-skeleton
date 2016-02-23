var React = require('react');
var ReactDOM = require('react-dom');

//List components
var ListManager = require('./components/list/ListManager.jsx');
ReactDOM.render(<ListManager title="Cake" />, document.getElementById('cake'));
ReactDOM.render(<ListManager title="Pie" />, document.getElementById('pie'));
ReactDOM.render(<ListManager title="Sushi" headingColor="pink" />, document.getElementById('sushi'));

//Form components
var LeadCapture = require('./components/form/LeadCapture.jsx');
ReactDOM.render(<LeadCapture />, document.getElementById('IDform'));
