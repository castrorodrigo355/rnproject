import React from 'react';
import {useSelector} from 'react-redux';
import {View, Button, FlatList} from 'react-native';
import {User} from '../user/user';
import {usersStyles} from './usersStyles';

export const Users = ({navigation}) => {
  const state = useSelector(state => state);
  const {users} = state;
  return (
    <View style={usersStyles.mainContainer}>
      <FlatList
        style={usersStyles.flatList}
        data={users}
        renderItem={({item}) => <User user={item} />}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};
