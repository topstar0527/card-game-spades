import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        {this.props.children}
      </View>
    );
  }
}

Header.propTypes = {
  children: PropTypes.any
};

export default Header;
