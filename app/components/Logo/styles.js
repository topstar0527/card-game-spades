import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
  centerAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem'
  },

  logoStyle: {
    shadowColor: '$black',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    backgroundColor: 'transparent'
  },

  image: {
    width: 50,
    height: 50
  },

  titleStyle: {
    backgroundColor: 'transparent',
    fontFamily: '$fontLogo',
    fontSize: '2rem',
    color: '$white',
    textShadowColor: '$blackMedium',
    textShadowOffset: {
      width: 0,
      height: 1
    },
    textShadowRadius: 1
  }
});
