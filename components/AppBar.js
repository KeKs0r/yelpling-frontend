'use babel'
import React, { Component, PropTypes } from 'react';
import { ToolBar, AppBar, TextField, FontIcon, IconButton  } from 'material-ui';
import FilterButton from './FilterButton';
export default class App extends Component {
  render() {
    return (
        <AppBar
          title="Yelpling"
          showMenuIconButton={true}
          iconElementRight={<FilterButton />}
          style={{paddingButtom:'5px'}}/>
    );
  }
}
