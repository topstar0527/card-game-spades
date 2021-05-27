import React, { Component } from 'react';
import Expo from 'expo';
import { ScrollView, View, Text, Platform } from 'react-native';
import { Button, Icon, Avatar } from 'react-native-elements';

import { Container } from '../../components/Container';
import { ContactList } from '../../containers/Contacts';
import { Back, Forward, Bid } from '../../components/Button';
import { Score, Won } from '../../components/Badge';
import { HeaderTitle } from '../../components/Header';
import { Thumbnail } from '../../components/Avatar';

import styles from './styles';

class NewGame extends Component {
  state = { contacts: [] };
  static navigationOptions = ({ navigation, navigationOptions }) => ({
    headerTitle: (
      <HeaderTitle
        title="New Game"
        subTitle="Choose players to start the game"
      />
    ),
    headerLeft: <Back onPress={() => navigation.goBack(null)} />,
    headerRight: <Forward onPress={() => navigation.goBack(null)} />
  });

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
      console.log('contacts', contacts.data);
      this.setState({ contacts });
    } catch (err) {
      console.log('err', err);
    }
  }

  render() {
    return (
      <Container>
        <ScrollView style={styles.container}>
          <ContactList />
        </ScrollView>
      </Container>
    );
  }
}

export default NewGame;
