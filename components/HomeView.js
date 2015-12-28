import React, {Component,PropTypes} from 'react';
import {Tabs, Tab, FontIcon, SwipeableView} from 'material-ui';
import LocationList from './LocationList';
import LocationMap  from './LocationMap';
import Pin from './Pin';

import { connect } from 'react-redux';
import filterLocations from '../selectors/filterLocations';
import { selectLocation } from '../actions/locations';

@connect(
  state => ({
    locations: filterLocations(state.locations,state.filter)
  }),
  { selectLocation }
)
export default class HomeView extends Component {
  static propTypes = {
    locations: PropTypes.object.isRequired,
    selectLocation: PropTypes.func.isRequired
  }
  render() {
    const {locations, selectLocation} = this.props;
    return (
        <Tabs>
          <Tab label="Recommendations">
            <LocationList locations={locations} /></Tab>
          <Tab label="Around You">
            <div style={{height:'600px', width:'400px'}}>
              <LocationMap locations={locations} onSelectLocation={selectLocation}/>
            </div>
            </Tab>
        </Tabs>
    );
  }
}
