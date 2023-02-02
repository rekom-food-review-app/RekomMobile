import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {Colors} from '../../assets/colors';

interface SelectListProps {
  placeholder: string;
  wrapperStyle?: any;
  size?: keyof typeof size;
  setSelected: any;
  data: any;
  dropdownStyles?: any;
  save: string;
}
const Select = (props: SelectListProps) => {
  return (
    <View style={[size[props.size || 'sm'].contain, props.wrapperStyle]}>
      <SelectList
        placeholder={props.placeholder}
        setSelected={props.setSelected}
        data={props.data}
        dropdownStyles={defaultStyle.dropdown}
        boxStyles={defaultStyle.select}
      />
    </View>
  );
};

const defaultStyle = StyleSheet.create({
  select: {
    width: '100%',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.C,
  },
  dropdown: {
    width: '100%',
    position: 'absolute',
    top: '100%',
    backgroundColor: 'white',
  }
});

const size = {
  sm: StyleSheet.create({
    contain: {
      width: 100,
    },
  }),
  md: StyleSheet.create({
    contain: {
      width: 155,
    },
  }),
  lg: StyleSheet.create({
    contain: {
      width: 330,
    },
  }),
};

export {Select};
