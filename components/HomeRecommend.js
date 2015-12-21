import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui';
import Location from './Location';
import {BAR, REST, CAFE } from '../constants';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`


export default class HomeRecommendationsView extends Component {
  render() {
    return (
      <div>
        <Location
          name="Hopfenreich"
          type={BAR}
          icon="http://lorempixel.com/40/40/nightlife/1"
          fullImage="http://lorempixel.com/600/337/nightlife/1"
          description={lorem}
          optDescription={lorem}
          score={12}
          />
          <Location
            name="Hopfenreich"
            type={CAFE}
            fullImage="http://lorempixel.com/600/337/nightlife/2"
            description={lorem}
            optDescription={lorem}
            />
      </div>
    );
  }
}
