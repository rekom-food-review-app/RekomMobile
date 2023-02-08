import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../assets/colors';

interface SecureTextFieldProps {
  placeholder: string;
  onChangeText ?: (text: string) => void;
  type?: keyof typeof type;
  size?: keyof typeof size;
  wrapperStyle?: any;
  error?: string;
}
const SecureTextField = (props: SecureTextFieldProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  return (
    <View
      style={[defaultStyle.textField, size[props.size || 'lg'], defaultStyle.wrapper, props.wrapperStyle]}>
      <TextInput
        secureTextEntry={true}
        style={type[props.type || 'left'].placeholder}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
      {props.error ? (
        <Text style={defaultStyle.error}>{props.error}</Text>
      ) : null}
    </View>
  );
};
const defaultStyle = StyleSheet.create({
  wrapper: {
    height: 50
  },
  textField: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.C,
    height: "100%"
  },
  error: {
    color: 'red',
    fontSize: 11,
    textAlign: 'right',
    marginRight: 10,
  },
});
const size = {
  sm: {
    width: 155,
  },
  lg: {
    width: 331,
  },
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

export {SecureTextField};
