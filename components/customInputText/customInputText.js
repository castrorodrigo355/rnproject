import React from 'react';
import {TextInput} from 'react-native';
import {inputStyles} from './customInputTextStyle';

export const CustomInputText = ({
  defaultValue,
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <TextInput
      style={inputStyles.mainContainer}
      placeholder={placeholder}
      onChangeText={onChangeText}
      defaultValue={defaultValue}
      value={value}
    />
  );
};
