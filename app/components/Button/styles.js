import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
  forwardContainer: {
    backgroundColor: '$primaryRed',
    shadowOffset: '$shadowOffsetRegular',
    shadowRadius: '$shadowRadiusRegular',
    shadowOpacity: '$shadowOpacityRegular',
    marginRight: 15,
    width: '2.4rem',
    height: '2.4rem'
  },

  backContainer: {
    backgroundColor: 'transparent',
    shadowOpacity: '$shadowOpacityNone',
    marginLeft: -5
  },

  backFeedback: {
    color: '$whiteLight'
  },

  fabActionButton: {
    shadowColor: '$black',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5
  },

  bidContainer: {
    width: '2.25rem',
    height: '2.25rem',
    borderRadius: 5,
    backgroundColor: '$primaryRed',
    shadowOffset: '$shadowOffsetRegular',
    shadowRadius: '$shadowRadiusRegular',
    shadowOpacity: '$shadowOpacityRegular',
    alignItems: 'center',
    justifyContent: 'center'
  },

  bidText: {
    fontFamily: '$fontSemiBold',
    fontSize: '1.2rem',
    color: '$white'
  }
});
