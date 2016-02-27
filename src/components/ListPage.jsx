var React = require('react');
var ListManager = require('../components/list/ListManager.jsx');

var ListPage = React.createClass({
  componentDidMount: function() {
    //grabs the route parameter /list/:listId
    this.setState({lid: this.props.params.listId});
  },
  //componentWillReceiveProps is called everytime a prop is changed
  componentWillReceiveProps: function() {
    this.setState({lid: nextProps.params.listId});
  },
  getInitialState: function(){
    return {lid: ""};
  },
  render: function() {
    return (
      <div>
        <h1>
            This is list number {this.state.lid}
        </h1>
        <ListManager title={this.state.lid} headingColor="pink" />
      </div>
    );
  }
});

module.exports = ListPage;
