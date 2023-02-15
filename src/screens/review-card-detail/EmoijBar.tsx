import {View} from 'react-native'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { IconButton } from '../../components/inputs/IconButton'
import { setResTab } from '../../global-states';

interface EmoijBarProps 
{
  wrapperStyle ?: any
  tab: number
}

const EmoijBar = (props: EmoijBarProps) => {

  const [index, setIndex] = useState<number>(props.tab);

  const dispatch = useDispatch()
  return(
    <View style={{flexDirection: 'row', gap: 10, marginBottom: 20}}>
      <IconButton onPress={()=>dispatch(setResTab(1))} size={'sm'} typeBtn={index == 1 ? 'active' : 'inactive'} source={require('../../assets/image/cmt.png')}>{10}</IconButton>
      <IconButton onPress={()=>dispatch(setResTab(2))} size={'sm'} typeBtn={index == 2 ? 'active' : 'inactive'} source={{uri: 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f499.png'}}>{100}</IconButton>
      <IconButton onPress={()=>dispatch(setResTab(3))} size={'sm'} typeBtn={index == 3 ? 'active' : 'inactive'} source={{uri: 'https://vnreview.vn/image/19/45/88/1945885.jpg?t=1559311281453'}}>{10}</IconButton>
      <IconButton onPress={()=>dispatch(setResTab(4))} size={'sm'} typeBtn={index == 4 ? 'active' : 'inactive'} source={{uri: 'https://vnreview.vn/image/19/45/89/1945894.jpg?t=1559311281453'}}>{10}</IconButton>
    </View>
  )
}
export {EmoijBar}