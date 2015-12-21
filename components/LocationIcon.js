import React, { Component, PropTypes } from 'react';
import { FontIcon } from 'material-ui';
import { ICONS } from '../constants';


export default class LocationIcon extends Component {
  static propTypes: {
    type: PropTypes.string.required,
  }
  render() {
    return (<FontIcon className="material-icons"
              style={{paddingTop:'8px'}}
            >
              {ICONS[this.props.type]}
            </FontIcon>)
  }
}
