import React, { Component } from 'react';
import Expo from 'expo';
import { View, Text } from 'react-native';

import { Container } from '../../components/Container';
import ContactRow from './ContactRow';

import styles from './styles';

class ContactList extends Component {
  state = { contacts: [] };
  async componentDidMount() {
    try {
      const permission = await Expo.Permissions.askAsync(
        Expo.Permissions.CONTACTS
      );
      if (permission.status !== 'granted') {
        return;
      }
      const contacts = await Expo.Contacts.getContactsAsync({
        fields: [
          Expo.Contacts.PHONE_NUMBERS,
          Expo.Contacts.EMAILS,
          Expo.Contacts.THUMBNAIL
        ]
      });
      this.setState({ contacts: contacts.data });
    } catch (err) {
      console.log('err===', err);
    }
  }

  render() {
    const contacts = this.state.contacts;
    console.log('contacts', contacts);
    console.log('contacts.length', contacts.length);
    if (contacts.length === 0) {
      const noContactsText = 'No Contacts Found';
      return (
        <View>
          <Text>
            {noContactsText}
          </Text>
        </View>
      );
    }
    // const contactRows = contacts.map(con => {
    //   return <ContactRow contact={con} />;
    // });
    // return { contactRows };

    return (
      <View style={styles.contactListContainer}>
        <ContactRow contact={contacts[0]} />
      </View>
    );
  }
}

export default ContactList;
