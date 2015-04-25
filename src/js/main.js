import React from 'react';
import {Button, ListGroup, ListGroupItem} from 'react-bootstrap';

var App = React.createClass({

  render: function() {
    var items = [
      <ListGroupItem>Item 1</ListGroupItem>
    ];
    return (
      <div>
        <Button bsStyle='primary'>This is the Button 2</Button>
        <ListGroup>
          {items}
        </ListGroup>
      </div>
    );
  }

});

React.render(<App />, document.getElementById('app'));
