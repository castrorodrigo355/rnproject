import React from 'react';
import {Text} from 'react-native';
import {textStyles} from './customTextStyle';

export const CustomText = ({children}) => {
  return <Text style={textStyles.mainContainer}>{children}</Text>;
};
