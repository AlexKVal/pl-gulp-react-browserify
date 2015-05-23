/* eslint react/no-multi-comp: 0 */
import React from 'react';

import {
  Navbar,
  Nav,
  MenuItem,
  DropdownButton
} from 'react-bootstrap';

const Auth = React.createClass({
  render: function () {
    return (
      <DropdownButton title="Hello" noCaret navItem>
        <h6>Login with</h6>
        <MenuItem href="/auth/facebook">
          Facebook
        </MenuItem>
        <MenuItem href="/auth/twitter">
          Twitter
        </MenuItem>
      </DropdownButton>
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
