import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

class HeaderTitle extends Component {
  render() {
    return (
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitleText}>
          {' '}{this.props.title}{' '}
        </Text>
        <Text style={styles.headerSubTitleText}>
          {' '}{this.props.subTitle}{' '}
        </Text>
      </View>
    );
  }
}

HeaderTitle.propTypes = {
  title: PropTypes.any,
  subTitle: PropTypes.any
};

export default HeaderTitle;
