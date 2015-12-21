import React, {Component,PropTypes} from 'react';
import {Tabs, Tab, FontIcon} from 'material-ui';
import {replaceState} from 'redux-router';
import {connect} from 'react-redux';


export default class HomeView extends Component {

  render() {
    const { replaceState, query, path } = this.props;
    return (
      <div>
        <Tabs style={{
          width: '82%'
        }}>
          <Tab label="Recommendations">{this.props.children}</Tab>
          <Tab label="Around You">{this.props.children}</Tab>
        </Tabs>
      </div>
    );
  }
}
