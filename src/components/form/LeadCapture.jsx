var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function(e) {
    if (this.refs.fieldFirstName.state.value == "") {
      alert("First name cannot be empty");
    } else if (this.refs.fieldLastName.state.value == "") {
      alert("Last name cannot be empty");
    } else if (!this.refs.fieldEmail.state.valid) {
      alert("Email not Valid");
    } else {
      //Send request to email host or server
      var httpRequestBody = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldFirstName.state.value,
        lastName: this.refs.fieldLastName.state.value
      };
      //clear the fields
      this.refs.fieldEmail.clear();
      this.refs.fieldFirstName.clear();
      this.refs.fieldLastName.clear();
    }
  },
  render: function() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField nametype="First" ref="fieldFirstName"/>
            <br/>
            <NameField nametype="Last" ref="fieldLastName"/>
            <br/>
            <EmailField ref="fieldEmail"/>
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
