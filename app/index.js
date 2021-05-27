import React, { Component } from 'react';
import { Font } from 'expo';

import Styles from './config/styles';
import Root from './config/routes';

class App extends Component {
  state = {
    appIsReady: false,
    fontsLoaded: false
  };

  componentWillMount() {
    this.loadFontsAsync();
  }

  async loadFontsAsync() {
    await Font.loadAsync({
      'oriya-mn-regular': require('../assets/fonts/OriyaMNRegular.ttf'),
      'qanelas-Light': require('../assets/fonts/QanelasLight.ttf'),
      'qanelas-medium': require('../assets/fonts/QanelasMedium.ttf'),
      'qanelas-regular': require('../assets/fonts/QanelasRegular.ttf'),
      'qanelas-semibold': require('../assets/fonts/QanelasSemiBold.ttf'),
      'qanelas-thin': require('../assets/fonts/QanelasThin.ttf'),
      'qanelas-ultraLight': require('../assets/fonts/QanelasUltraLight.ttf')
    });

    this.setState({ fontsLoaded: true });
  }

  render() {
    return this.state.fontsLoaded ? <Root /> : null;
  }
}

export default App;
