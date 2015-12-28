import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';

import Marker from './LocationMarker';
// import Marker  from './Pin';

export default class LocationMap extends Component {
  static propTypes = {
    locations: PropTypes.object.isRequired,
    onSelectLocation: PropTypes.func.isRequired
  }
  // static defaultProps = {
  //   center: {lat: 59.938043, lng: 30.337157},
  //   zoom: 9,
  //   greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  // };
  _onChildClick = (key, childProps) => {
      const index = parseInt(key);
      this.props.onSelectLocation(index);
  }
  render() {
    const { locations, onSelectLocation } = this.props;
    const markers = locations.map((l, index) => {
      return <Marker
          key={l.get('business_id')}
          lng={l.get('longitude')}
          lat={l.get('latitude')}
          text={l.get('name')}
          selected={l.get('selected')}
          categories={l.get('categories')}
          number={index}
          onSelect={() => {
            alert(l.get('business_id'));
            onSelectLocation(l.get('business_id'))
          }
        }/>
    }).toArray();
    return (
       <GoogleMap
         defaultCenter={{lat:52.51375, lng:13.34080}}
         onChildClick={this._onChildClick}
         zoom={14}
         >
         {markers}
      </GoogleMap>
    );
  }
}
