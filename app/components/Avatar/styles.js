import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
  thumbnailContainer: {
    shadowColor: '$black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: '$shadowOpacityLight'
  },
  thumbnail: {
    borderWidth: 1,
    borderColor: '$secondaryBlue'
  },

  thumbnailTitle: {
    fontFamily: '$fontLight'
  },

  thumbnailTitleContainer: {
    backgroundColor: 'black'
  }
});
