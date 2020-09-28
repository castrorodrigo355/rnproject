import React from 'react';
import {View, Image} from 'react-native';
import {iconStyles} from './iconAppStyles';

export const IconApp = ({icon}) => {
  return (
    <View style={iconStyles.mainContainer}>
      <Image style={iconStyles.image} source={icon} />
    </View>
  );
};
