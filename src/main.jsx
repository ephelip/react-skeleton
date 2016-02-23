var React = require('react');
var ReactDOM = require('react-dom');

//List components
var List = require('./components/list/List.jsx');
ReactDOM.render(<List />, document.getElementById('ingredients'));

//Form components
var LeadCapture = require('./components/form/LeadCapture.jsx');
ReactDOM.render(<LeadCapture />, document.getElementById('IDform'));
