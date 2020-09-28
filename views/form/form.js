import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Alert} from 'react-native';
import {CustomInputText} from '../../components/customInputText/customInputText';
import {CustomButton} from '../../components/customButton/customButton';
import {addUser} from '../../redux/actions';
import {IconApp} from '../iconApp/iconApp';
import {formStyles} from './formStyles';

export const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');

  const insertUser = () => {
    if (name === '' || userName === '') {
      Alert.alert('Incomplete Data...', 'Please complete all fields !', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Accept',
        },
      ]);
    } else {
      const user = {
        id: Math.floor(Math.random() * 100000) + 1,
        name,
        userName,
      };
      dispatch(addUser(user));
      setName('');
      setUserName('');
    }
  };
  return (
    <View style={formStyles.mainContainer}>
      {/* <IconApp /> */}
      <CustomInputText
        value={name}
        placeholder={'Input Name'}
        onChangeText={x => setName(x)}
      />
      <CustomInputText
        value={userName}
        placeholder={'Input User Name'}
        onChangeText={x => setUserName(x)}
      />
      <CustomButton title={'Submit'} onPress={() => insertUser()} />
    </View>
  );
};
