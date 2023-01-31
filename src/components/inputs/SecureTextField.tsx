import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../assets/colors';

interface SecureTextFieldProps {
  placeholder: string;
  type: keyof typeof type;
  size: keyof typeof size;
}
const SecureTextField = (props: SecureTextFieldProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  return (
    <View style={[defaultStyle.textField, size[props.size]]}>
      <TextInput
        secureTextEntry={true}
        style={type[props.type].placeholder}
        placeholder={props.placeholder}
      />
      <Text>error pass</Text>
    </View>
  );
};
const defaultStyle = StyleSheet.create({
  textField: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.basic,
  },
});
const size = {
  sm: {
    width: 155,
    height: 45,
  },
  lg: {
    width: 331,
    height: 45,
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
