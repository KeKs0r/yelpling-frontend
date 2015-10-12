import React, { Component, PropTypes } from 'react';
import Style from 'animate.css/animate.css';
import { List, Card, Avatar, CardTitle } from 'material-ui';
import User from './User';
import Shuffle from 'react-shuffle';


export default class UserList extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired
  }
  render() {
    const { users } = this.props;
    const listContent = users
      .sortBy((u) => u.getIn(['stats', 'score']))
      .reverse()
      .map((user) => {
        return (<User key={user.get('id')} user={user}
            rightAvatar={<Avatar>{user.getIn(['stats', 'score'])}</Avatar>}
          />);
      }).valueSeq()
    return (
        <Card>
          <Shuffle duration={500} fade={false}>
            {listContent}
          </Shuffle>
          </Card>
    );
  }
}
