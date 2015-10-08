import React, { Component, PropTypes } from 'react';
import Player from './Player';
import { Map } from 'immutable';
import { Link } from 'react-router'
import { List, ListItem, Avatar, FontIcon, IconButton, Styles, Utils } from 'material-ui';
const { Colors, ThemeManager } = Styles;
const { ColorManipulator } = Utils;
import { LINEUP } from '../texts';

export default class PlayerList extends Component {
  static propTypes = {
    players: PropTypes.object,
    selectedPlayer: PropTypes.number,
    selectedPosition: PropTypes.string,
    position: PropTypes.string.isRequired,
    count: PropTypes.number,
    selectPosition: PropTypes.func.isRequired,
    selectPlayer: PropTypes.func.isRequired
  }
  static defaultProps = {
    players: new Map(),
    count: 1
  }
  static contextTypes = {
    muiTheme: React.PropTypes.object,
  }
  getPositionHeadline() {
    const key = 'POSITION_'+this.props.position;
    return LINEUP[key];
  }

  getColor() {
    const theme = this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme);
    const textColor = theme.rawTheme.palette.primary1Color;
    return ColorManipulator.fade(textColor, 0.1);
  }

  render() {
    const { players, position, selectedPlayer, selectedPosition, count, selectPlayer} = this.props;
    const fillNumber = count - players.size;



    const playersOut = players.map(
        (p) => {
          const selectedStyle = (p.get('id') === selectedPlayer) ? {backgroundColor: this.getColor()} : {};
          const button = (
            <IconButton onClick={() => { selectPlayer(p.get('id'), p.get('position'))} }>
                <FontIcon className="fa fa-exchange" color={Colors.blue300}  />
            </IconButton>);
          return (<Player key={'player_'+p.get('id')} player={p} rightIconButton={button}  style={selectedStyle} />);
      }).valueSeq();


    const fillOut = [];
    for (let i = 0; i < fillNumber; i++) {
      const selectedStyle = (i === 0 && position === selectedPosition && !selectedPlayer) ? {backgroundColor: this.getColor()} : {};
      const button = (<IconButton>
            <FontIcon className="fa fa-plus" color={Colors.blue300}  />
          </IconButton>)
      fillOut.push(<ListItem key={i}
        primaryText={this.getPositionHeadline() + ' auswählen'}
        rightIconButton={button}
        onClick={this.selectPosition}
        style={selectedStyle}
        />)
    }
    let headline = this.getPositionHeadline();
    if(count > players.size){
      headline = headline + ' ('+players.size+'/'+count+')';
    }
    return (
      <List subheader={headline}>
        {playersOut}
        {fillOut}
      </List>
    );
  }
  selectPosition = () => {
    this.props.selectPosition(this.props.position);
  }
}
