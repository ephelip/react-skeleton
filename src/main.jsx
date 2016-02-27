var React = require('react');
var ReactDOM = require('react-dom');

var Routes = require('./Routes.jsx');
ReactDOM.render(Routes, document.getElementById('main'));


//NavBar components
// var NavBar = require('./components/nav/NavBar.jsx');
// var navLinks = require('./componentsData/nav/NavList');
// ReactDOM.render(<NavBar navData={navLinks} bgColor="#FFF"
//                                            titleColor="#3097d1" />, document.getElementById('nav'));

//
// //List components
// var ListManager = require('./components/list/ListManager.jsx');
// ReactDOM.render(<ListManager title="Cake" />, document.getElementById('cake'));
// ReactDOM.render(<ListManager title="Pie" />, document.getElementById('pie'));
// ReactDOM.render(<ListManager title="Sushi" headingColor="pink" />, document.getElementById('sushi'));
//
// //Form components
// var LeadCapture = require('./components/form/LeadCapture.jsx');
// ReactDOM.render(<LeadCapture />, document.getElementById('IDform'));
