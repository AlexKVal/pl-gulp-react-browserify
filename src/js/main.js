/* eslint react/no-multi-comp: 0 */
import React from 'react';

import {
  Navbar,
  Nav,
  MenuItem,
  DropdownMenu
} from 'react-bootstrap';

const Auth = React.createClass({
  render: function () {
    return (
      <DropdownMenu title="Hello" noCaret>
        <h6>Login with</h6>
        <MenuItem href="/auth/facebook">
          Facebook
        </MenuItem>
        <MenuItem href="/auth/twitter">
          Twitter
        </MenuItem>
      </DropdownMenu>
    );
  }
});

const App = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <Navbar inverse>
        <Nav right>
          <Auth />
        </Nav>
      </Navbar>
    );
  }
});

React.render(<App />, document.getElementById('app'));
