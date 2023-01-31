import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../assets/colors';

interface ButtonProps {
  type: keyof typeof type;
  size: keyof typeof size;
  label: string;
  onPress?: () => void
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[size[props.size].button, type[props.type].button, defaultStyle.button]}>
      <Text style={[type[props.type].label]}>{props.label}</Text>
    </TouchableOpacity>
  );
}

const defaultStyle = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 100,
    borderWidth: 1,
  },
});

const size = {
  sm: StyleSheet.create({
    button: {
      width: 78,
      height: 24,
    },
  }),
  md: {
    button: {
      width: 122,
      height: 36,
    },
  },
  lg: {
    button: {
      width: 300,
      height: 50,
    },
  },
};

const type = {
  primary: StyleSheet.create({
    label: {
      color: Colors.secondary,
      fontWeight: '700',
      fontSize: 15,
    },
    button: {
      backgroundColor: Colors.primary,
      borderColor: Colors.primary
    }
    
  }),
  secondary: StyleSheet.create({
    label: {
      color: Colors.dark,
      fontWeight: '700',
      fontSize: 15,
    },
    button: {
      backgroundColor: Colors.secondary,
      borderColor: Colors.basic
    }
  }),
  basic: StyleSheet.create({
    label: {
      color: Colors.dark,
      fontWeight: '700',
      fontSize: 15,
    },
    button:{
      backgroundColor: Colors.secondary,
      borderColor: Colors.secondary,
    }
  }),
};

export {Button};
