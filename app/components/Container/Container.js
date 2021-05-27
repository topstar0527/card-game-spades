import React from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';
import { View, StatusBar } from 'react-native';

import styles from './styles';

const Container = ({ children }) =>
  <View style={styles.container}>
    <LinearGradient
      colors={['#548CB7', '#8D61DE']}
      style={styles.containerBg}
    />
    <StatusBar translucent={false} barStyle="light-content" />
    {children}
  </View>;

Container.propTypes = {
  children: PropTypes.any
};

export default Container;
