/* eslint react/no-multi-comp: 0 */
import React from 'react';

import {
  // Input,
  ButtonInput
} from 'react-bootstrap';

const App = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <form>
        <ButtonInput
          bsSize="small">Child Text</ButtonInput>
        <ButtonInput
          type="reset"
          bsStyle="primary" />
        <ButtonInput
          type="submit"
          value="Submit Your Input"
          bsStyle="info"
          bsSize="large"
          disabled={false} />
      </form>
    );
  }
});

React.render(<App />, document.getElementById('app'));
