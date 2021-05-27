import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

class Forward extends Component {
  render() {
    return (
      <Icon
        raised
        name={Platform.OS === 'ios' ? 'chevron-right' : 'arrow-forward'}
        color="white"
        size={28}
        iconStyle={{ marginTop: 0 }}
        containerStyle={styles.forwardContainer}
        onPress={() => this.props.onPress()}
      />
    );
  }
}

Forward.propTypes = {
  onPress: PropTypes.any
};

export default Forward;
