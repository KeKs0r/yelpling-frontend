import React, {PropTypes, Component} from 'react';
import { Avatar } from 'material-ui';

import Pin from './Pin';
import Tooltip from './Tooltip';
import LocationIcon from './LocationIcon';


const MARKER_SIZE = 40;
const greatPlaceStyle = {
  position: 'absolute',
  width: MARKER_SIZE,
  height: MARKER_SIZE,
  left: -MARKER_SIZE / 2,
  top: -MARKER_SIZE / 2
}

export default class LocationMarker extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    number: PropTypes.number.isRequired,
    selected: PropTypes.bool
  }
  render() {
    const {text, categories, number, $hover, selected} = this.props;
    const highlight = $hover || selected;
    const avatar = <Avatar icon={(
      <LocationIcon categories={categories}/>
    )} />
    return (
       <div>
         <Tooltip showTooltip={highlight}
           component={<Pin number={number} highlight={highlight} />}>
           <div style={{fontSize:15, fontWeight:'bold'}}>{text}</div>
           <div>{categories.join(', ')}</div>
         </Tooltip>
       </div>
    );
  }
}
