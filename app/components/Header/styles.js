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
    fontSize: '1.25rem',
    color: '$white'
  },
  headerSubTitleText: {
    backgroundColor: 'transparent',
    fontFamily: '$fontRegular',
    fontSize: '0.8rem',
    color: '$whiteStrong'
  }
});
