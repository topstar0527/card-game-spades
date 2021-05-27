import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '5rem',
    backgroundColor: '$blackUltraLight'
  },
  headerTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitleText: {
    backgroundColor: 'transparent',
    fontFamily: '$fontMedium',
    fontSize: '1.2rem',
    color: '$white',
    textShadowColor: '$blackMedium',
    textShadowOffset: '$textShadowOffsetRegular',
    textShadowRadius: '$textShadowRadiusRegular'
  },
  headerSubTitleText: {
    backgroundColor: 'transparent',
    fontFamily: '$fontRegular',
    fontSize: '0.8rem',
    color: '$whiteStrong'
  }
});
