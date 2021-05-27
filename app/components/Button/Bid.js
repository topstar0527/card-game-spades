import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

class Bid extends Component {
  render() {
    return (
      <View style={styles.bidContainer}>
        <Text style={styles.bidText}>
          {this.props.value}
        </Text>
      </View>
    );
  }
}

Bid.propTypes = {
  onPress: PropTypes.any,
  value: PropTypes.string
};

Bid.defaultProps = {
  value: ''
};

export default Bid;
