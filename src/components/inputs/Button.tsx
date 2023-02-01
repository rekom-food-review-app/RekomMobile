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
        size[props.size].button,
        type[props.type].button,
        defaultStyle.button,
        props.wrapperStyle,
      ]}>
      <CsText
        weight={'bold'}
        color={type[props.type].label}
        size={size[props.size].label}>
        {props.label}
      </CsText>
    </TouchableOpacity>
  );
}

const defaultStyle = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
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
  primary: StyleSheet.create<any>({
    label: 'B' as 'B',
    button: {
      backgroundColor: Colors.A,
      borderColor: Colors.A,
    },
  }),
  secondary: StyleSheet.create<any>({
    label: 'E' as 'E',
    button: {
      backgroundColor: Colors.B,
      borderColor: Colors.C,
    },
  }),
  basic: StyleSheet.create<any>({
    label: 'C' as 'C',
    button: {
      backgroundColor: Colors.B,
      borderColor: Colors.B,
    },
  }),
};

export {Button};
