import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../assets/colors';

interface TextFieldProps {
  placeholder: string;
  type: keyof typeof type;
  size: keyof typeof size;
  wrapperStyle?: any;
  error?: string;
}
const TextField = (props: TextFieldProps) => {
  return (
    <View style={[size[props.size].contain, props.wrapperStyle]}>
      <TextInput
        style={[defaultStyle.textField, type[props.type].placeholder]}
        placeholder={props.placeholder}
      />
      <Text style={defaultStyle.error}>{props.error}</Text>
    </View>
  );
};
const defaultStyle = StyleSheet.create({
  textField: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.basic,
    height: 45,
  },
  error: {
    color: 'red',
    fontSize: 11,
    textAlign: 'right',
    marginRight: 10,
  },
});
const size = {
  sm: StyleSheet.create({
    contain: {
      width: 155,
    },
  }),
  lg: StyleSheet.create({
    contain: {
      width: 331,
    },
  }),
};
const type = {
  left: StyleSheet.create({
    placeholder: {
      textAlign: 'left',
      paddingHorizontal: 15,
    },
  }),
  center: StyleSheet.create({
    placeholder: {
      textAlign: 'center',
    },
  }),
};

export {TextField};
