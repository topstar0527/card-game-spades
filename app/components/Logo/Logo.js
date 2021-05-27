import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

class Logo extends Component {
  render() {
    return (
      <View style={styles.centerAlign}>
        <View style={styles.logoStyle}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('./images/logo.png')}
          />
        </View>
        <Text style={styles.titleStyle}>spades</Text>
      </View>
    );
  }
}

export default Logo;
