var React = require('react');

var NavBar = require('../components/nav/NavBar.jsx');
var navLinks = require('../componentsData/nav/NavList');

var BasePage = React.createClass({
  render: function() {

    return (
      <div>
        <NavBar navData={navLinks} bgColor="#FFF" titleColor="#3097d1" />
        <div className="container">
            {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = BasePage;
