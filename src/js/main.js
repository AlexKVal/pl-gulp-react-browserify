var React = require('react');
var ReactBoostrap = require('react-bootstrap');

var Input = ReactBoostrap.Input;
var Button = ReactBoostrap.Button;

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Input type='text' placeholder='Enter text'/>
        <Button bsStyle='primary'>Default</Button>
      </div>
    );
  }

});

React.render(<App />, document.getElementById('app'));
