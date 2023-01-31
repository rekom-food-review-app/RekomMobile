import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../assets/colors';
import {CsText} from '../data_displays';

interface ButtonProps {
  type: keyof typeof type;
  size: keyof typeof size;
  label: string;
  wrapperStyle?: any;
  onPress?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        props.wrapperStyle,
        size[props.size].button,
        type[props.type].button,
        defaultStyle.button,
      ]}>
      <CsText size={size[props.size].label}>{props.label}</CsText>
    </TouchableOpacity>
  );
}

const defaultStyle = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
  },
});

const size = {
  sm: StyleSheet.create<any>({
    label: 'xs' as 'xs',
    button: {
      paddingHorizontal: 30,
      paddingVertical: 8,
    },
  }),
  md: {
    label: 'md' as 'md',
    button: {
      paddingHorizontal: 45,
      paddingVertical: 10,
    },
  },
  lg: {
    label: 'lg' as 'lg',
    button: {
      paddingHorizontal: 60,
      paddingVertical: 10,
    },
  },
};

const type = {
  primary: StyleSheet.create({
    label: {
      color: Colors.secondary,
    },
    button: {
      backgroundColor: Colors.primary,
      borderColor: Colors.primary,
    },
  }),
  secondary: StyleSheet.create({
    label: {
      color: Colors.dark,
    },
    button: {
      backgroundColor: Colors.secondary,
      borderColor: Colors.basic,
    },
  }),
  basic: StyleSheet.create({
    label: {
      color: Colors.dark,
    },
    button: {
      backgroundColor: Colors.secondary,
      borderColor: Colors.secondary,
    },
  }),
};

export {Button};
