'use babel'
import React, { Component, PropTypes } from 'react';
import { AppBar, MenuItem, LeftNav, Divider  } from 'material-ui';
import FilterButton from './FilterButton';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

const userIds = [
  1,2,3,4,5,6
];

@connect(
  state => ({
    user: state.auth.get('user'),
  }),
  { login }
)
export default class MyAppBar extends Component {
  constructor(props) {
  super(props);
  this.state = {open: false};
}

  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    const {user, login} = this.props;
    const items = userIds.map((id) => {
      return  <MenuItem checked={(id === user)} insetChildren={true} onTouchTap={() => {login(id)}}>User {id}</MenuItem>
    })
    return (
        <AppBar
          title="Yelpling"
          onLeftIconButtonTouchTap={ this.handleToggle }
          showMenuIconButton={true}
          iconElementRight={<FilterButton />}
          style={{paddingButtom:'5px'}} >
          <LeftNav
            open={this.state.open}
            docked={false}>
            <MenuItem onTouchTap={this.handleToggle} leftIcon={<NavigationClose />}>Close</MenuItem>
            <Divider />
            {items}
          </LeftNav>
        </AppBar>
    );
  }
}
