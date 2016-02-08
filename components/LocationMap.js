import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';

import Marker from './LocationMarker';
import MyselfPin from './MySelfPin';
// import Marker  from './Pin';

export default class LocationMap extends Component {
  static propTypes = {
    locations: PropTypes.object.isRequired,
    myLocation: PropTypes.object,
    onSelectLocation: PropTypes.func.isRequired
  }
  _onChildClick = (key, childProps) => {
      this.props.onSelectLocation(key);
  }
  render() {
    const lat = (myLocation) ? myLocation.coords.latitude : 49.0035;
    const long = (myLocation) ? myLocation.coords.longitude : 8.3958208;
    const { locations, onSelectLocation, myLocation } = this.props;
    let markers = locations.toList().map((l, index) => {
      return <Marker
          key={l.get('yelp_id')}
          lng={l.get('longitude')}
          lat={l.get('latitude')}
          text={l.get('name')}
          selected={l.get('selected')}
          categories={l.get('categories')}
          number={index+1}
          onSelect={() => {
            alert(l.get('yelp_id'));
            onSelectLocation(l.get('yelp_id'))
          }
        }/>
    }).toArray();
    if(myLocation){
      markers.push(<MyselfPin
                 key="myself"
                 lng={myLocation.coords.longitude}
                 lat={myLocation.coords.latitude}
                 />);
    }
    return (
       <GoogleMap
         center={{lat:lat, lng:long}}
         onChildClick={this._onChildClick}
         zoom={13}
         >
         {markers}
      </GoogleMap>
    );
  }
}
