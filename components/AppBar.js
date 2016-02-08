'use babel'
import React, { Component, PropTypes } from 'react';
import { AppBar, MenuItem, LeftNav, Divider  } from 'material-ui';
import FilterButton from './FilterButton';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

const userIds = [
  {
    name: 'Herbert Müller',
    id:'15SdjuK7DmYqUAj6rjGowg'
  },
  {
    name:'2',
    id: 2,
  },
  {
    name:'3',
    id: 3,
  },
  {
    name:'4',
    id: 4,
  },
  {
    name:'5',
    id: 5,
  }
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
    const items = userIds.map((u) => {
      return  <MenuItem key={u.id} checked={(u.id === user)} insetChildren={true} onTouchTap={() => {login(u.id)}}>{u.name}</MenuItem>
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
