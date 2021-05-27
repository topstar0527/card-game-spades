import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
  contactRowBorder: {},
  contactRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '.75rem',
    paddingBottom: '.75rem',
    borderBottomWidth: 1,
    borderBottomColor: '$secondaryBlueLight'
  },
  contactRowText: {
    fontFamily: '$fontLight',
    color: '$white',
    fontSize: '1.5rem',
    paddingLeft: '1.25rem'
  },

  contactListContainer: {
    marginHorizontal: '1rem'
  }
});
