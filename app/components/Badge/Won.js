import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, View, Text } from 'react-native';
import { Icon, Badge } from 'react-native-elements';

import styles from './styles';

class Won extends Component {
  render() {
    return (
      <Badge containerStyle={styles.wonContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            type="entypo"
            name="trophy"
            iconStyle={styles.wonIcon}
            size={10}
          />
          <Text style={styles.wonText}>Won</Text>
        </View>
      </Badge>
    );
  }
}

Won.propTypes = {
  value: PropTypes.string
};

export default Won;
