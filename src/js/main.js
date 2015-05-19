/* eslint react/no-multi-comp: 0 */

import React from 'react';
import mount from 'react-mount';
import { Button } from 'react-bootstrap';

const CustomComponent = React.createClass({
  displayName: 'CustomComponent',

  render: function () {
    return (
      <div>
        <Button bsStyle='primary'>{this.props.children}</Button>
        <Button bsStyle='info'>{this.props.children}</Button>
      </div>
    );
  }
});

const Simple = React.createClass({
  displayName: 'Simple',

  render: function () {
    return (
      <p>Simple Text</p>
    );
  }
});

const App = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div>
        <Simple></Simple>
        <CustomComponent>This is the Button</CustomComponent>
        <custom-component>Inner for CustomComponent</custom-component>
      </div>
    );
  }
});

mount({
  App,
  'simple': Simple,
  'custom-component': CustomComponent
});

// React.render(<App />, document.getElementById('app'));
