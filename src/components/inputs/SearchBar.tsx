import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native'
import { TextField } from './TextField'
import Icon from 'react-native-vector-icons/Feather'
import React, { Ref } from 'react'

interface SearchBarProps
{
  wrapperStyle?: any
  placeholder: string
  onPress?: () => void
  inputRef?: Ref<TextInput>;
}

const SearchBar = React.forwardRef<TextInput, SearchBarProps>((props, ref) => {
  return(
    <View style={[defaultStyle.searchBar, props.wrapperStyle]}>
      <TouchableOpacity style={{position: 'absolute', zIndex: 1, right: 5, padding: 10}}>
        <Icon name='search' size={30} />
      </TouchableOpacity>
      <TextField ref={ref} placeholder={props.placeholder} wrapperStyle={{width: '100%'}}/>
    </View>
  )
})

// const SearchBar = (props: SearchBarProps) => {
//   return(
//     <View style={[defaultStyle.searchBar, props.wrapperStyle]}>
//       <TouchableOpacity style={{position: 'absolute', zIndex: 1, right: 5, padding: 10}}>
//         <Icon name='search' size={30} />
//       </TouchableOpacity>
//       <TextField ref={props.inputRef} placeholder={props.placeholder} wrapperStyle={{width: '100%'}}/>
//     </View>
//   )
// }

const defaultStyle = StyleSheet.create({
  searchBar: {
  position: 'relative', 
  flexDirection: 'row', 
  justifyContent: 'center', 
  alignItems: 'center'
}
})

export {SearchBar}