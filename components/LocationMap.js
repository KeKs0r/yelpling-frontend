import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';

import Marker from './LocationMarker';
// import Marker  from './Pin';

export default class LocationMap extends Component {
  static propTypes = {
    locations: PropTypes.object.isRequired
  }
  // static defaultProps = {
  //   center: {lat: 59.938043, lng: 30.337157},
  //   zoom: 9,
  //   greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  // };

  render() {
    const { locations } = this.props;
    const markers = locations.map((l, index) => {
      return <Marker
          key={l.get('business_id')}
          lng={l.get('longitude')}
          lat={l.get('latitude')}
          text={l.get('name')}
          selected={l.get('selected')}
          categories={l.get('categories')}
          number={index}
        />
    })
    return (
       <GoogleMap
         center={{lat:52.51375, lng:13.34080}}
         zoom={14}
         >
         {markers}
      </GoogleMap>
    );
  }
}
