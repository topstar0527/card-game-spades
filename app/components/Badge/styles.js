import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
  scoreContainer: {
    backgroundColor: '$primaryViolet',
    borderColor: '$whiteStrong',
    borderWidth: 1,
    width: 50
  },
  scoreText: {
    color: '$white',
    fontFamily: '$fontMedium'
  },

  wonContainer: {
    backgroundColor: '$primaryViolet',
    borderColor: '$white',
    borderWidth: 1
  },
  wonIcon: {
    color: '$white'
  },
  wonText: {
    color: '$white',
    fontFamily: '$fontMedium',
    marginLeft: 5
  }
});
