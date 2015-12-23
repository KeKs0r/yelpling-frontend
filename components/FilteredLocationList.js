import React, { Component, PropTypes } from 'react';
import Location from './Location'
import { connect } from 'react-redux';

import {SHOW_ALL} from '../actions/filter';

function filterLocations(locations, filter){
    if(filter === SHOW_ALL){
      return locations;
    }
    let current = locations;
    filter.forEach((f, k) => {
      current = current.filter((l) => {
        const value = l.get(k);
        if(Array.isArray(value)){
          for (var i = 0; i < value.length; i++) {
            if(f.indexOf(value[i]) > -1){
              return true;
            }
          }
        }
        return f.indexOf(value) > -1;
      });
    })
    return current;
}


@connect(
  (state) => { return {
    locations: filterLocations(state.locations,state.filter) ,
  }}//,
  // { replaceState, pushState }
)
export default class FilteredLocationList extends Component {
  static propTypes = {
    locations: PropTypes.object.isRequired
  }
  render() {
    const {locations} = this.props;
    const locationsOut = locations.map((loc) => {
      const l = loc.toJS();
      return (<Location
        name={l.name}
        categories={l.categories}
        fullImage={l.image}
        description={l.description}
        optDescription={l.optDescription}
        score={l.score}
        />)
    })
  return <div>{locationsOut}</div>;
  }
}
