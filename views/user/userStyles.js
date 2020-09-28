import {StyleSheet} from 'react-native';

export const userStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: '100%',
    marginTop: 5,
    padding: 5,
    height: 90,
  },
  data: {
    flex: 2,
    color: 'white',
    fontSize: 16,
    paddingLeft: 10,
  },
  button: {
    flex: 1,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    margin: 20,
    borderRadius: 30,
  },
});
