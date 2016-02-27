var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');
var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var EmailStore = require('../../reflux/EmailStore.jsx');

var LeadCapture = React.createClass({
  mixins:[Reflux.listenTo(EmailStore, 'onChange')],
  getInitialState: function() {
    return {submitted: false};
  },
  onSubmit: function(e) {
    if (this.refs.fieldFirstName.state.value == "") {
      alert("First name cannot be empty");
    } else if (this.refs.fieldLastName.state.value == "") {
      alert("Last name cannot be empty");
    } else if (!this.refs.fieldEmail.state.valid) {
      alert("Email not Valid");
    } else {
      //Send request to email host or server
      var subscriber = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldFirstName.state.value,
        lastName: this.refs.fieldLastName.state.value
      };
      //clear the fields
      this.refs.fieldEmail.clear();
      this.refs.fieldFirstName.clear();
      this.refs.fieldLastName.clear();

      Actions.submitEmail(subscriber);
    }
  },
  onChange: function(msg) {
    console.log(msg);
    this.setState({submitted: true});
    alert("Hello " + this.refs.fieldFirstName.state.value + " you registered succesfully");

  },
  render: function() {

    var successStyle = {
      color: "green",
      visibility: this.state.submitted ? "visible" : "hidden"
    }

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>Register</h4>
          </div>
          <div className="panel-body">
            <NameField nametype="First" ref="fieldFirstName"/>
            <br/>
            <NameField nametype="Last" ref="fieldLastName"/>
            <br/>
            <EmailField ref="fieldEmail"/>
            <div className="row">
              <div className="col-sm-6">
                <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
              </div>
              <div className="col-sm-2">
                <h5 style={successStyle}>Success</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
