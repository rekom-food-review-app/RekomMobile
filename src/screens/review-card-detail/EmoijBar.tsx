import {View} from 'react-native'
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { IconButton } from '../../components/inputs/IconButton'
import { setResTab } from '../../global-states';
import { ReviewCardType } from '../../@types/ReviewCardType';
import { emitter } from '../../app/emitter';

interface EmoijBarProps
{
  wrapperStyle ?: any
  tab: number
  amountDisagree: number,
  amountAgree: number,
  amountUseful: number,
  amountReply: number,
  reviewId: string
}

const EmoijBar = (props: EmoijBarProps) => {

  const [index, setIndex] = useState<number>(props.tab);
  const dispatch = useDispatch()

  const [reaction, setReaction] = useState({
    "1": props.amountAgree,
    "2": props.amountDisagree,
    "3": props.amountUseful,
    "4": props.amountReply
  })

  const [reactIcon, setReactIcon] = useState<string>('');
  const react = (tag: string) => {
    if (tag == reactIcon) {
       setReactIcon('')
    } else {
       setReactIcon(tag)
    }
  }

  useEffect(() => {
    var token = emitter.addListener(`NewComment-${props.reviewId}`, () => {
      console.log("you right")
      setReaction((pre) => {
          pre["4"] = pre["4"] + 1
          return {...pre}
      })
    });
    
    return () => {
      token.remove();
    }
  }, [])

  return(
    <View style={{flexDirection: 'row', gap: 10, marginBottom: 20}}>
      <IconButton 
        onPress={() => {dispatch(setResTab(1)); react('D')}} size={'sm'}
        typeBtn={index == 1 ? 'active' : 'inactive'}
        source={require('../../assets/image/cmt.png')}>{reaction["4"]}</IconButton>
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