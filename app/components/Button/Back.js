import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

class Back extends Component {
  render() {
    return (
      <Icon
        raised
        name={Platform.OS === 'ios' ? 'chevron-left' : 'arrow-back'}
        color="white"
        underlayColor={styles.backFeedback.color}
        size={28}
        containerStyle={styles.backContainer}
        onPress={() => this.props.onPress()}
      />
    );
  }
}

Back.propTypes = {
  onPress: PropTypes.any
};

export default Back;
