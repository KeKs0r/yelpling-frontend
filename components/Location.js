import React, { Component, PropTypes } from 'react';
import { Card, Avatar, CardTitle, CardHeader, CardText, CardMedia, Badge } from 'material-ui';
import LocationIcon from './LocationIcon';


export default class Location extends Component {
  static propTypes: {
    name: React.PropTypes.string.required,
    type: React.PropTypes.string.required,
    icon: React.PropTypes.string,
    score: React.PropTypes.number,
    fullImage: React.PropTypes.string,
    description: React.PropTypes.string,
    optDescription: React.PropTypes.string
  }
  render() {
    const {name, type, icon, fullImage, description, optDescription } = this.props;
    let media, descText, optDescText;
    if(fullImage){
      media =  (<CardMedia overlay={<CardTitle title={name} subtitle={type} />} expandable={true}>
                    <img src={fullImage}/>
                  </CardMedia>)
    }
    if(description){
      descText = <CardText expandable={false}>{description}</CardText>;
    }
    if(optDescription){
      optDescText = <CardText expandable={true}>{optDescription}</CardText>
    }
    const avatar = (icon) ? <Avatar src={icon} /> : <Avatar icon={(
      <LocationIcon type={type} icon={icon}/>
    )} />
    return (
        <Card>
          <CardHeader
            title={name}
            subtitle={type}
            avatar={avatar}
            actAsExpander={true}
            showExpandableButton={true} />
          {media}
          {descText}
          {optDescText}
        </Card>
    );
  }
}
