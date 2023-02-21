import React from 'react';
import {StyleSheet, Text, TextInput, View, Keyboard} from 'react-native';
import {Colors} from '../../assets/colors';

interface TextFieldProps {
  placeholder: string;
  onChangeText?: (text: string) => void;
  type?: keyof typeof type;
  size?: keyof typeof size;
  wrapperStyle?: any;
  keyboardType?: any;
  error?: string;
}
const TextField = (props: TextFieldProps) => {
  return (
    <View style={[size[props.size ?? 'sm'].contain, defaultStyle.wrapper, props.wrapperStyle]}>
      <TextInput
        onBlur={() => Keyboard.dismiss()}
        onChangeText={props.onChangeText}
        style={[defaultStyle.textField, type[props.type ?? 'left'].placeholder]}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
      />
      {props.error ? (
        <Text style={defaultStyle.error}>{props.error}</Text>
      ) : null}
    </View>
  );
};
const defaultStyle = StyleSheet.create({
  wrapper: {
    // height: 50
  },
  textField: {
    backgroundColor: "white",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.C,
    // height: "100%"
  },
  error: {
    color: 'red',
    fontSize: 11,
    textAlign: 'right',
    marginRight: 10,
  },
});
const size = {
  xs: StyleSheet.create({
    contain: {
      width: 65,
    },
  }),
  sm: StyleSheet.create({
    contain: {
      width: 155,
    },
  }),
  md: StyleSheet.create({
    contain: {
      width: 270,
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
