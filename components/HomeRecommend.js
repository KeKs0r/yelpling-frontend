import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui';
import FilteredLocationList from './FilteredLocationList';


export default class HomeRecommendationsView extends Component {
  render() {
    return (
      <FilteredLocationList />
    );
  }
}
