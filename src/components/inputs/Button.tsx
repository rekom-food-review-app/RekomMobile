import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../assets/colors';

interface ButtonProps {
  type: keyof typeof type;
  size: keyof typeof size;
  label: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={[size[props.size].button, type[props.type].bg, defaultStyle.btn]}>
      <Text style={[type[props.type].label]}>{props.label}</Text>
    </TouchableOpacity>
  );
}

const defaultStyle = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

const size = {
  sm: StyleSheet.create({
    button: {
      width: 78,
      height: 24,
      borderRadius: 20,
      borderWidth: 1,
    },
  }),
  md: {
    button: {
      width: 122,
      height: 36,
      borderRadius: 20,
      borderWidth: 1,
    },
  },
  lg: {
    button: {
      width: 300,
      height: 50,
      borderRadius: 25,
      borderWidth: 1,
    },
  },
};

const type = {
  primary: StyleSheet.create({
    label: {
      color: 'white',
      fontWeight: '700',
      fontSize: 15,
    },
    bg: {
      backgroundColor: Colors.primary,
      borderColor: Colors.primary
    }
    
  }),
  secondary: StyleSheet.create({
    label: {
      color: 'black',
      fontWeight: '700',
      fontSize: 15,
    },
    bg: {
      backgroundColor: Colors.secondary,
      borderColor: Colors.basic
    }
  }),
  basic: StyleSheet.create({
    label: {
      color: 'black',
      fontWeight: '700',
      fontSize: 15,
    },
    bg:{
      backgroundColor: Colors.secondary,
      borderColor: Colors.secondary,
    }
  }),
};

export {Button};
