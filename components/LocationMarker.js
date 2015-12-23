import React, {PropTypes, Component} from 'react';
import Pin from './Pin';


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
    number: PropTypes.number.isRequired,
    selected: PropTypes.bool
  }
  render() {
    const {text, number, $hover, selected} = this.props;
    const highlight = $hover || selected;
    return (
       <Pin number={number} highlight={highlight} />
    );
  }
}
