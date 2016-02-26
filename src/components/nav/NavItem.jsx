var React = require('react');

var NavItem = React.createClass({
  getInitialState: function() {
    return {hover: false};
  },
  mouseOver: function(e) {
    this.setState({hover:true});
  },
  mouseOut: function(e) {
    this.setState({hover:false});
  },
  render: function() {
    return (
      //if hover state is on, use the active bootstrap class
        <li className={this.state.hover ? "active" : " "} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <a style={this.props.aStyle} href={this.props.href}>
            {this.props.title}
          </a>
        </li>
    );
  }
});

module.exports = NavItem;
