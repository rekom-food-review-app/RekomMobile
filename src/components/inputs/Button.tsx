import React, { useEffect, useState } from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../assets/colors';
import {CsText} from '../data_displays';

interface ButtonProps {
  type?: keyof typeof type;
  size?: keyof typeof size;
  label: string;
  wrapperStyle?: any;
  onPress?: () => void;
  isLoading?: boolean
}

function Button(props: ButtonProps) {
  const [isLoading, setIsLoading] = useState<boolean>(props.isLoading as boolean)

  useEffect(() => {
    setIsLoading(props.isLoading as boolean)
  }, [props.isLoading])

  return (
    <TouchableOpacity
      disabled={props.type == "disable"}
      onPress={props.onPress}
      style={[
        size[props.size || 'md'].button,
        type[props.type || 'primary'].button,
        defaultStyle.button,
        props.wrapperStyle,
      ]}>
      <CsText
        style={{alignSelf: 'center'}}
        weight={'bold'}
        color={type[props.type || 'primary'].label}
        size={size[props.size || 'md'].label}>
        {
          isLoading ? "Loading..." : props.label
        }
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
  xs: StyleSheet.create<any>({
    label: 'xs' as 'xs',
    button: {
      paddingHorizontal: 15,
      height: 30
    },
  }),
  sm: StyleSheet.create<any>({
    label: 'sm' as 'sm',
    button: {
      paddingHorizontal: 30,
      height: 40
    },
  }),
  md: {
    label: 'md' as 'md',
    button: {
      paddingHorizontal: 45,
      height: 45
    },
  },
  lg: {
    label: 'lg' as 'lg',
    button: {
      paddingHorizontal: 60,
      height: 45
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
  disable: StyleSheet.create<any>({
    label: 'C' as 'C',
    button: {
      backgroundColor: Colors.F,
      borderColor: Colors.B,
    },
  }),
};

export {Button};
