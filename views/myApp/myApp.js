import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';
import {IconApp} from '../iconApp/iconApp';
import {getUsers} from '../../redux/actions';
import {Home} from '../home/home';
import {Form} from '../../views/form/form';
import {Users} from '../../views/users/users';
import {styles} from './myAppStyles';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const MyApp = () => {
  const state = useSelector(state => state);
  const {loadingUsers} = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      {/* <IconApp /> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home Page'}}
        />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );

  // if (loadingUsers) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // } else {
  //   return (
  //     <View style={styles.container}>
  //       <Image style={styles.photo} source={icon} />
  //       <Form />
  //       <Users />
  //     </View>
  //   );
  // }
};
