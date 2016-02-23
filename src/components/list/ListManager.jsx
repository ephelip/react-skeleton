var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function() {
    return {items: [], newItemText:''};
  },
  onChange: function(e) {
    //Update the state property every time a keystroke is typed
    this.setState({newItemText: e.target.value});
  },
  handleSubmit: function(e) {
    //Stop the button from getting clicks since we are using form onSubmit
    e.preventDefault();

    //grab the current list of items
    var currentItems = this.state.items;
      //this.state is for data that can change !
      //this.props is read only

    //Add the new item to the list
    currentItems.push(this.state.newItemText);

    //Update the main item list with the new list and clear the newItemText
    this.setState({items: currentItems, newItemText:''});
  },
  render: function() {
    var divStyle = {
      marginTop: 10
    };

    //style for the heading of the lists
    var headingStyle = {
    }

    if (this.props.headingColor){
      //If there is a headingColor property, pass it inside headingStyle
      headingStyle.backgroundColor = this.props.headingColor;
    }

    return (
      //in jsx use className instead of class
      <div style={divStyle} className="col-sm-4">
          <div className="panel panel-primary">
              <div style={headingStyle} className="panel-heading">
                  <h3>{this.props.title}</h3>
              </div>
              <div className="row panel-body">
                  <form onSubmit={this.handleSubmit}>
                      <div className="col-sm-9">
                          <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                      </div>
                      <div className="col-sm-2">
                          <button className="btn btn-primary">Add</button>
                      </div>
                  </form>
              </div>
              <List items={this.state.items} />
          </div>
      </div>
    );
          //items property called in List class
  }
});

module.exports = ListManager;
