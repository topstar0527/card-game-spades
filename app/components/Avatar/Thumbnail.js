import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Platform } from 'react-native';
import { Avatar } from 'react-native-elements';

import styles from './styles';

class Thumbnail extends Component {
  render() {
    const isLarge = this.props.size === 'large';
    const isAvatar = _.isEmpty(this.props.title);
    if (isAvatar) {
      return (
        <Avatar
          medium={!isLarge}
          large={isLarge}
          rounded
          avatarStyle={styles.thumbnail}
          containerStyle={styles.thumbnailContainer}
          source={this.props.source}
          onPress={() => this.props.onPress()}
          activeOpacity={0}
        />
      );
    }

    return (
      <Avatar
        medium={!isLarge}
        large={isLarge}
        rounded
        avatarStyle={styles.thumbnail}
        containerStyle={styles.thumbnailTitleContainer}
        title={this.props.title}
        titleStyle={styles.thumbnailTitle}
        onPress={() => this.props.onPress()}
        activeOpacity={0}
      />
    );
  }
}

Thumbnail.propTypes = {
  onPress: PropTypes.any,
  source: PropTypes.object,
  title: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'large'])
};

Thumbnail.defaultProps = {
  size: 'medium',
  title: '',
  source: {}
};

export default Thumbnail;
