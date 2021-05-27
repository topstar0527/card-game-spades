import React, { Component } from 'react';
import Expo from 'expo';
import { View, Text } from 'react-native';

import { Thumbnail } from '../../components/Avatar';

import styles from './styles';

class ContactRow extends Component {
  renderThumbnail() {
    const contact = this.props.contact;

    if (contact.imageAvailable) {
      return <Thumbnail source={{ uri: contact.thumbnail.uri }} />;
    }

    let initials = contact.name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') +
      (initials.pop() || '')).toUpperCase();

    return <Thumbnail title={initials} />;
  }

  render() {
    return (
      <View style={styles.contactRowBorder}>
        <View style={styles.contactRowContainer}>
          {this.renderThumbnail()}
          <Text style={styles.contactRowText}>
            {this.props.contact.name}
          </Text>
        </View>
      </View>
    );
  }
}

export default ContactRow;
