import { StackNavigator } from 'react-navigation';

import { Home } from '../screens/Home';
import { NewGame } from '../screens/NewGame';

const NewGameStack = StackNavigator({
  NewGame: {
    screen: NewGame,
    navigationOptions: {
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.05)',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        height: 90
      }
    }
  }
});

export default StackNavigator(
  {
    Home: {
      screen: Home
    },
    NewGame: {
      screen: NewGameStack
    }
  },
  {
    mode: 'modal',
    lazyLoad: true,
    headerMode: 'none'
  }
);
