import React, { Component, PropTypes } from 'react';
import { FontIcon } from 'material-ui';
import { ICONS, BAR } from '../constants';


export default class LocationIcon extends Component {
  static propTypes: {
    categories: PropTypes.array.required,
  }
  getIcon(){
    const {categories} = this.props;
    for (var i = 0; i < categories.length; i++) {
      if(ICONS[categories[i]]){
        return ICONS[categories[i]]
      }
    }
  }
  render() {
    return (<FontIcon className="material-icons"
              style={{paddingTop:'8px'}}
            >
              {this.getIcon()}
            </FontIcon>)
  }
}
