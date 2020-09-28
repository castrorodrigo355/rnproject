import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f2027',
    paddingTop: Platform.OS === 'ios' ? 35 : 1,
  },
  scrollView: {
    width: Dimensions.get('window').width,
  },
});
