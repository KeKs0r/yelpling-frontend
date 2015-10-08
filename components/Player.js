import React, { Component, PropTypes } from 'react';
import PlayerEvents from './PlayerEvents';
import { ListItem, Avatar, CardHeader, FontIcon, Styles } from 'material-ui';
const { Colors } = Styles;
import blacklist from 'blacklist';

const color = ( a, b, inverse = false) => {
  if(a < b) {
    return (inverse) ? Colors.green300 : Colors.red300;
  }
  if(a > b) {
    return (inverse) ? Colors.red300 : Colors.greem300;
  }
}


export default class Player extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    compare: PropTypes.object
  }
  render() {
    const player = this.props.player.toJS();
    const compare = (this.props.compare) ? this.props.compare.toJS().stats : undefined;
    const { stats } = player;
    let propTypes = Object.keys(Player.propTypes);
    const curated = blacklist(this.props, ...propTypes);

    let tendency;
    if(stats.last > stats.prelast){
      tendency = <FontIcon style={{fontSize:12, paddingRight:12}} className="fa fa-arrow-up" color={Colors.green300} />
    } else if (stats.last < stats.prelast){
      tendency = <FontIcon style={{fontSize:12, paddingRight:12}} className="fa fa-arrow-down" color={Colors.red300} />
    }

    let compareOut
    if(compare){
      const priceColor = color(compare.price, player.price, true);
      const playedColor = color(compare.played, player.played);
      const avgColor = color(compare.score/ compare.played,stats.score / stats.played);
      compareOut = [
        (<br key="break"/>),
        (<FontIcon key="price" style={{fontSize:12, paddingRight:12}} className="fa fa-usd" color={priceColor}> {compare.price} </FontIcon>),
        (<FontIcon key="played" style={{fontSize:12, paddingRight:12}} className="fa fa-male" color={playedColor}> {compare.played }</FontIcon>),
        (<FontIcon key="avg" style={{fontSize:12, paddingRight:5}} className="fa fa-align-center" color={avgColor}> {Math.floor(compare.score / compare.played)}</FontIcon>)
      ];
    }

    const statsOut = (<div>
      <FontIcon style={{fontSize:12, paddingRight:12}} className="fa fa-usd"> {stats.price}</FontIcon>
      <FontIcon style={{fontSize:12, paddingRight:12}} className="fa fa-male"> {stats.played}</FontIcon>
      <FontIcon style={{fontSize:12, paddingRight:5}} className="fa fa-align-center"> {Math.floor(stats.score / stats.played)}</FontIcon>
      {tendency}
      {compareOut}
    </div>)



    return (
        <ListItem
        leftAvatar={<Avatar src={player.image} />}
        primaryText={player.name}
        secondaryText={statsOut}
        secondaryTextLines={(compare) ? 2 : 1}
        {...curated}
        />
    )
  }
}
