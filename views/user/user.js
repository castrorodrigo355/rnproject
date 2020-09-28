import React, {useState} from 'react';
import iconProfile from '../../icons/iconlogo.png';
import {useDispatch} from 'react-redux';
import {View, Text, Modal, Alert} from 'react-native';
import {CustomButton} from '../../components/customButton/customButton';
import {removeUser} from '../../redux/actions';
import {IconApp} from '../iconApp/iconApp';
import {ActionButton} from '../../components/actionButton/actionButton';
import {userStyles} from './userStyles';

export const User = ({user}) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const createDialog = () =>
    Alert.alert(
      'Close Modal',
      'Are you sure to close detail modal ?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Accept',
          onPress: () => setModal(false),
        },
      ],
      {
        cancelable: false,
      },
    );
  return (
    <View style={userStyles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        style={userStyles.modal}>
        <View style={userStyles.center}>
          <View style={userStyles.content}>
            <Text>Rodrigo</Text>
            <CustomButton
              style={userStyles.button}
              title={'Close'}
              onPress={() => createDialog()}
            />
          </View>
        </View>
      </Modal>
      <IconApp icon={iconProfile} />
      <Text style={userStyles.data} onPress={() => setModal(true)}>
        {user.name}
      </Text>
      <ActionButton title={'?'} onPress={() => setModal(true)} />
      <ActionButton title={'x'} onPress={() => dispatch(removeUser(user.id))} />
    </View>
  );
};
