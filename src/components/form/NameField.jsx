var React = require('react');

var NameField = React.createClass({
  //name field is empty by default
  getInitialState: function() {
    return {value: ""};
  },
  onChange: function(e) {
    this.setState({value: e.target.value});
  },
  clear: function() {
    this.setState({value: ""})
  },
  render: function(){

    return(
      <div>
        <input className="form-control"
               placeholder={this.props.nametype + " Name"}
               onChange={this.onChange} value={this.state.value} />
      </div>

    );
  }
});

module.exports = NameField;
