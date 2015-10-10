import React, { Component, PropTypes } from 'react';
import { Tabs, Tab, FontIcon } from 'material-ui';


export default class HomeView extends Component {
  render() {
    return (
      <div>
        <Tabs style={{width:'82%'}}>
          <Tab label="Bald: 3">{this.props.children}</Tab>
          <Tab label="Zurzeit: 3">{this.props.children}</Tab>
          <Tab label="Vergangen: 3">{this.props.children}</Tab>
        </Tabs>
      </div>
    );
  }
}
