var React = require('react');
var ReactBoostrap = require('react-bootstrap');

var ListGroup = ReactBoostrap.ListGroup;
var ListGroupItem = ReactBoostrap.ListGroupItem;

var App = React.createClass({

  render: function() {
    var items = [
      <ListGroupItem>Item 1</ListGroupItem>
    ];
    return (
      <div>
        <ListGroup>
          {items}
        </ListGroup>
      </div>
    );
  }

});

React.render(<App />, document.getElementById('app'));
