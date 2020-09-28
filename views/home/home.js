import React from 'react';
import {View} from 'react-native';
import {IconApp} from '../iconApp/iconApp';
import {homeStyles} from './homeStyles';
import {useDispatch} from 'react-redux';
import {CustomButton} from '../../components/customButton/customButton';
import iconLogo from '../../icons/iconlogo.png';
import {getUsers} from '../../redux/actions';

export const Home = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={homeStyles.mainContainer}>
      <IconApp icon={iconLogo} />
      <CustomButton title="Form" onPress={() => navigation.push('Form')} />
      <CustomButton
        title="Users"
        onPress={() => navigation.navigate('Users')}
      />
      <CustomButton title="Reload Users" onPress={() => dispatch(getUsers())} />
    </View>
  );
};
