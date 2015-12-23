import React, { Component, PropTypes } from 'react';
import { Card, Avatar, CardTitle, CardHeader, CardText, CardMedia, Badge } from 'material-ui';
import LocationIcon from './LocationIcon';


export default class Location extends Component {
  static propTypes: {
    name: React.PropTypes.string.required,
    categories: React.PropTypes.array.required,
    score: React.PropTypes.number,
    fullImage: React.PropTypes.string,
    description: React.PropTypes.string,
    optDescription: React.PropTypes.string,
    selected: React.PropTypes.bool
  }
  render() {
    const {name, categories, fullImage, description, optDescription, selected } = this.props;
    let media, descText, optDescText, expandable = false, style = {};
    const avatar = <Avatar icon={(
      <LocationIcon categories={categories}/>
    )} />

    if(fullImage){
      media =  (<CardMedia overlay={<CardTitle title={name} subtitle={categories.join(', ')} />} expandable={true}>
                    <img src={fullImage}/>
                  </CardMedia>)
      expandable = true;
    }
    if(description){
      descText = <CardText expandable={false}>{description}</CardText>;
    }
    if(optDescription){
      optDescText = <CardText expandable={true}>{optDescription}</CardText>;
        expandable = true;
    }
    if(selected){
        style.border = '3px solid rgb(255, 64, 129)';
    }
    return (
        <Card
          style={style}
          initiallyExpanded={selected}
          >
          <CardHeader
            title={name}
            subtitle={categories.join(', ')}
            avatar={avatar}
            actAsExpander={expandable}
            showExpandableButton={expandable}
             />
          {media}
          {descText}
          {optDescText}
        </Card>
    );
  }
}
