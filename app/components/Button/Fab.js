import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionButton from 'react-native-action-button';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

class Fab extends Component {
  render() {
    return (
      <ActionButton
        buttonColor="rgba(223,107,108,1)"
        icon={
          <MaterialIcons name="add" size={26} color="rgba(255, 255, 255, 1)" />
        }
        shadowStyle={styles.fabActionButton}
        onPress={() => this.props.onPress()}
      />
    );
  }
}

Fab.propTypes = {
  onPress: PropTypes.any
};

export default Fab;
