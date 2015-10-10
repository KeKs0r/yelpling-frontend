import React, { Component, PropTypes } from 'react';
import { ToolBar, AppBar } from 'material-ui';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title="Draftling" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={true} style={{paddingButtom:'5px', width:'82%'}}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
