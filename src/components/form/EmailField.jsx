var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({

  getInitialState: function() {
    //valid = true so the form shows no error on load
    //value of email field is empty by default
    return {valid: true, value: ""}
  },
  onChange: function(e) {
    //grab the value from the input
    var val = e.target.value

    //if the email is not valid, show form as not valid and update the value
    if (!validator.validate(val)) {
      this.setState({valid: false, value: val})
    } else {
      this.setState({valid: true, value: val});
    }
  },
  clear: function() {
    this.setState({valid: true, value: ""})
  },
  render: function() {
    //if the state is valid, use default bootstrap class. if not use has-error bootstrap class
    var formClass = this.state.valid
      ? "form-group"
      : "form-group has-error"

    return (
      <div className={formClass}>
        <input className="form-control"
               onChange={this.onChange}
               placeholder="Email"
               value={this.state.value}/>
      </div>
    );
  }
});

module.exports = EmailField;
