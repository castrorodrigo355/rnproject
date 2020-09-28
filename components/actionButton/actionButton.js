import React from 'react';
import {View, Button} from 'react-native';
import {actionButtonStyles} from './actionButtonStyle';

export const ActionButton = ({title, onPress}) => {
  return (
    <View style={actionButtonStyles.mainContainer}>
      <Button color="#0B547A" title={title} onPress={onPress} />
    </View>
  );
};
