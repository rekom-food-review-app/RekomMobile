import {View} from 'react-native'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { IconButton } from '../../components/inputs/IconButton'
import { setResTab } from '../../global-states';
import { ReviewCardType } from '../../@types/ReviewCardType';

interface EmoijBarProps
{
  wrapperStyle ?: any
  tab: number
  amountDisagree: number,
  amountAgree: number,
  amountUseful: number,
  amountReply: number,
}

const EmoijBar = (props: EmoijBarProps) => {

  const [index, setIndex] = useState<number>(props.tab);
  const dispatch = useDispatch()

  const [reactIcon, setReactIcon] = useState<string>('');
  const react = (tag: string) => {
    if (tag == reactIcon) {
       setReactIcon('')
    } else {
       setReactIcon(tag)
    }
 }


  return(
    <View style={{flexDirection: 'row', gap: 10, marginBottom: 20}}>
      <IconButton 
        onPress={() => {dispatch(setResTab(1)); react('D')}} size={'sm'}
        typeBtn={index == 1 ? 'active' : 'inactive'}
        source={require('../../assets/image/cmt.png')}>{props.amountReply}</IconButton>
      <IconButton
        onPress={() => {dispatch(setResTab(2)); react('A')}} size={'sm'}
        typeBtn={index == 2 ? 'active' : 'inactive'}
        source={require('../../assets/image/like.png')}>{props.amountAgree}</IconButton>
      <IconButton 
        onPress={() => {dispatch(setResTab(3)); react('B')}} size={'sm'}
        typeBtn={index == 3 ? 'active' : 'inactive'}
        source={require('../../assets/image/soso.png')}>{props.amountUseful}</IconButton>
      <IconButton
        onPress={() => {dispatch(setResTab(4)); react('C')}} size={'sm'}
        typeBtn={index == 4 ? 'active' : 'inactive'}
        source={require('../../assets/image/dislike.png')}>{props.amountDisagree}</IconButton>
    </View>
  )
}
export {EmoijBar}