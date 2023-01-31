import {StyleSheet, Text} from 'react-native';

interface CsTextProps {
  size: keyof typeof size;
  // weight: keyof typeof size;
  children: string;
}

function CsText(props: CsTextProps) {
  return <Text style={[size[props.size].text]}>{props.children}</Text>;
}

const defaultStyle = {};

const size = {
  xs: StyleSheet.create({
    text: {
      fontSize: 11,
    },
  }),
  sm: StyleSheet.create({
    text: {fontSize: 13},
  }),
  md: StyleSheet.create({
    text: {
      fontSize: 17,
    },
  }),
  lg: StyleSheet.create({
    text: {
      fontSize: 20,
    },
  }),
  xxl: StyleSheet.create({
    text: {
      fontSize: 27,
    },
  }),
};

const weight = {};

export {CsText};
