import React, {Component,PropTypes} from 'react';
import {Tabs, Tab, FontIcon, SwipeableView} from 'material-ui';
import LocationList from './LocationList';
import LocationMap  from './LocationMap';
import Pin from './Pin';

import { connect } from 'react-redux';
import filterLocations from '../selectors/filterLocations';
import recommendations from '../selectors/recommendations';
import selectLocationSelector from '../selectors/selectLocation';
import { selectLocation, loadMyLocation, loadLocations } from '../actions/locations';

@connect(
  state => ({
    locations:
      filterLocations(
        selectLocationSelector(
          recommendations(
            state.locations.getIn(['recommendations', state.auth.get('user')]),
            state.locations.get('businesses')),
          state.locations.get('selected')
          ),
        state.filter),
    myLocation: state.myLocation,
    auth: state.auth
  }),
  { selectLocation, loadMyLocation, loadLocations }
)
export default class HomeView extends Component {
  static propTypes = {
    locations: PropTypes.object.isRequired,
    selectLocation: PropTypes.func.isRequired,
    loadMyLocation: PropTypes.func.isRequired,
    myLocation: PropTypes.object
  }
  componentDidMount() {
    const {myLocation, loadMyLocation} = this.props;
    if(!myLocation){
      loadMyLocation();
    }
    const {locations, loadLocations, auth } = this.props;
    if(!locations || locations.size === 0){
      loadLocations(auth.get('user'));
    }
  }
  componentDidUpdate(prevProps){
      if(prevProps.auth !== this.props.auth){
          const {locations, loadLocations, auth } = this.props;
          loadLocations(auth.get('user'));
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
            <div style={{height:'700', width:'100%'}}>
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
