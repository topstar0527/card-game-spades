import React, { Component } from 'react';

import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { Header } from '../../components/Header';
import { Fab } from '../../components/Button';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo />
        </Header>
        <Fab onPress={() => this.props.navigation.navigate('NewGame')} />
      </Container>
    );
  }
}

export default Home;
