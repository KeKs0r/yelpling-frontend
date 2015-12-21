import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Avatar, CardHeader, FontIcon  } from 'material-ui';
import { replaceState, pushState } from 'redux-router';

// @connect(
//   (state) => { return {
//     openLeague: parseInt(state.router.location.query.league),
//     path: state.router.location.pathname
//   }},
//   { replaceState, pushState }
// )
export default class HomeRecommendations extends Component {
  static PropTypes = {
    openLeague: React.PropTypes.number,
    replaceState: React.PropTypes.func.isRequired
  }
  static defaultProps = {
    openLeague: 1
  }
  render() {
    const { openLeague, replaceState,pushState, path } = this.props;

    const tournament1 = (
      <div style={{width:'100%', textAlign:'center'}} onClick={() => pushState(null, 'team') }>
        <CardHeader style={{float:'left'}} title="5.000$" subtitle="Preisgeld" avatar={<FontIcon className="fa fa-trophy" />} />
        <CardHeader style={{float:'right'}} title="beliebig" subtitle="Spieler" avatar={<FontIcon className="fa fa-users" />} />
        <CardHeader title="3$" subtitle="Eintritt" avatar={<FontIcon className="fa fa-usd" />} />
        <div style={{clear:'both'}}></div>
    </div>);

    const tournament2 = (
          <div style={{width:'100%', textAlign:'center'}} onClick={() => pushState(null, 'team') }>
            <CardHeader style={{float:'left'}} title="100$" subtitle="Preisgeld" avatar={<FontIcon className="fa fa-trophy" />} />
            <CardHeader style={{float:'right'}} title="18/22" subtitle="Spieler" avatar={<FontIcon className="fa fa-users" />} />
            <CardHeader title="5$" subtitle="Eintritt" avatar={<FontIcon className="fa fa-usd" />} />
            <div style={{clear:'both'}}></div>
        </div>);

    const subItems = [
      <ListItem key="f" innerDivStyle={{paddingTop:'0px', paddingBottom:'0px'}} primaryText={tournament1} />,
      <ListItem key="b" innerDivStyle={{paddingTop:'0px', paddingBottom:'0px'}} primaryText={tournament2} />
    ];
    const first = (openLeague === 1) ? subItems : [];
    const second = (openLeague === 2) ? subItems : [];
    const third = (openLeague === 3) ? subItems : [];
    const forth = (openLeague === 4) ? subItems : [];
    return (
      <List>
        <ListItem primaryText="Bundesliga"
            leftIcon={<img src="http://logok.org/wp-content/uploads/2014/12/Bundesliga-logo-2010.png" />}
            nestedItems={first}
            autoGenerateNestedIndicator={false}
            onTouchTap={() => {replaceState(null, path, {league:1})}}
            initiallyOpen={true}>
          </ListItem>
        <ListItem primaryText="Champions League"
            leftIcon={<img src="http://www.calcio-culinaria.de/images/stories/BilderCC/Sonstigeab062014/International/Champions-League-Logo.jpg" />}
            nestedItems={second}
            autoGenerateNestedIndicator={false}
            onTouchTap={() => {replaceState(null, path, {league:2})}}
            initiallyOpen={true} />
        <ListItem primaryText="DFB Pokal"
            leftIcon={<img src="http://www.innwurf.de/wp-content/uploads/2013/09/DFB-Pokal-logo-Custom.jpg" />}
            nestedItems={third}
            autoGenerateNestedIndicator={false}
            onTouchTap={() => {replaceState(null, path, {league:3})}}
            initiallyOpen={true} />
        <ListItem primaryText="2. Liga"
            leftIcon={<img src="http://logok.org/wp-content/uploads/2014/12/Bundesliga-logo-2010.png" />}
            nestedItems={forth}
            autoGenerateNestedIndicator={false}
            onTouchTap={() => {replaceState(null, path, {league:4})}}
            initiallyOpen={true} />
      </List>
    );
  }
}
