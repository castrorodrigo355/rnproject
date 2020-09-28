import React from 'react';
import {View, Button} from 'react-native';
import {buttonStyles} from './customButtonStyle';

export const CustomButton = ({title, onPress}) => {
  return (
    <View style={buttonStyles.mainContainer}>
      <Button color="#0B547A" title={title} onPress={onPress}></Button>
    </View>
  );
};
