var React = require('react');

var LeadCapture = require('../components/form/LeadCapture.jsx');


var FormPage = React.createClass({
  render: function() {

    return (

        <div>
          <LeadCapture />
          {/*{this.props.children}*/}
        </div>
    );
  }
});

module.exports = FormPage;
