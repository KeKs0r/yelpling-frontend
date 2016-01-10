import React, {Component,PropTypes} from 'react';
import {Tabs, Tab, FontIcon, SwipeableView} from 'material-ui';
import LocationList from './LocationList';
import LocationMap  from './LocationMap';
import Pin from './Pin';

import { connect } from 'react-redux';
import filterLocations from '../selectors/filterLocations';
import { selectLocation, loadMyLocation } from '../actions/locations';

@connect(
  state => ({
    locations: filterLocations(state.locations,state.filter),
    myLocation: state.myLocation,
  }),
  { selectLocation, loadMyLocation }
)
export default class HomeView extends Component {
  static propTypes = {
    locations: PropTypes.object.isRequired,
    selectLocation: PropTypes.func.isRequired,
    loadMyLocation: PropTypes.func.isRequired,
    myLocation: PropTypes.object
  }
  componentDidMount() {
    const {myLocation, loadMyLocation } = this.props;
    if(!myLocation){
      loadMyLocation();
    }
  }
  render() {
    const {locations, selectLocation, myLocation} = this.props;
    return (
        <Tabs>
          <Tab label="Recommendations">
            <LocationList locations={locations} />

          </Tab>
          <Tab label="Around You">
            <div style={{height:'850', width:'100%'}}>
              <LocationMap
                locations={locations}
                onSelectLocation={selectLocation}
                myLocation={myLocation}
                />
            </div>
            </Tab>
        </Tabs>
    );
  }
}
