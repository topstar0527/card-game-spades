import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { Badge } from 'react-native-elements';

import styles from './styles';

class Score extends Component {
  render() {
    return (
      <Badge
        containerStyle={styles.scoreContainer}
        value={this.props.value}
        textStyle={styles.scoreText}
      />
    );
  }
}

Score.propTypes = {
  value: PropTypes.string
};

export default Score;
