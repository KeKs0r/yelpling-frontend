import React, {Component,PropTypes} from 'react';
import {Tabs, Tab, FontIcon} from 'material-ui';
import LocationList from './LocationList';
import LocationMap  from './LocationMap';
import Pin from './Pin';

import { connect } from 'react-redux';
import filterLocations from '../selectors/filterLocations';

@connect(
  (state) => { return {
    locations: filterLocations(state.locations,state.filter) ,
  }}
)
export default class HomeView extends Component {
  static propTypes = {
    locations: PropTypes.object.isRequired
  }
  render() {
    return (
        <Tabs>
          <Tab label="Recommendations"><LocationList locations={this.props.locations} /></Tab>
          <Tab label="Around You">
            <div style={{height:'600px', width:'400px'}}>
              <LocationMap locations={this.props.locations} />
            </div>
            </Tab>
        </Tabs>
    );
  }
}
