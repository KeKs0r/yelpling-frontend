import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserList from './UserList';
import Container from 'react-container';
import * as UserActions from '../actions/users';


@connect(
  (s) => {return {users: s.users}},
  dispatch => bindActionCreators(UserActions, dispatch)
)
export default class TableView extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    rankingPointsChange: PropTypes.func.isRequired
  }
  render() {
    const { users, rankingPointsChange } = this.props;
    const triggerEvent = () => {
      let i = 0;
      const trigger = () => {
        const user = Math.ceil(Math.random() * 14);
        const score = Math.floor(Math.random() * 20) - 4;
        rankingPointsChange(user, score);
        if(i < 20) {
          setTimeout(trigger,800);
        }
        i++;
      }
      trigger();
    }
    return (
      <Container style={{width:'82%'}}>
        <h2>Rankings</h2>
        <button onClick={triggerEvent}> Simulate</button>
        <UserList users={users} />
      </Container>
    );
  }
}
