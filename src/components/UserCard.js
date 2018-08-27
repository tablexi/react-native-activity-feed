// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Avatar from './Avatar';
import FollowButton from './FollowButton';
import { buildStylesheet } from '../styles';

import type { StyleSheetLike } from '../types';

export type Props = {
  styles?: StyleSheetLike,
};

export default class UserCard extends React.Component<Props> {
  static defaultProps = {};
  render() {
    let styles = buildStylesheet('userCard', this.props.styles);
    let { user } = this.props;
    return (
      <View style={styles.container}>
        <Avatar source={user.user_image} size={42} noShadow />
        <Text style={styles.text}>{user.name}</Text>

        <FollowButton />
      </View>
    );
  }
}