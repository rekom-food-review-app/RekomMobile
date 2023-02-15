import { View, Image, StyleSheet, Text } from "react-native"
import { CsText, UserActionInfo } from "./index";
import { Colors } from "../../assets/colors";
import Icon from 'react-native-vector-icons/Feather'
import { IconButton } from "../inputs/IconButton";
import { useState } from "react";

interface ReviewCardProps
{
  numberOfLines?: number
  isEmoijDisplay?: boolean
}

function ReviewCard(props: ReviewCardProps)
{
  const [reactIcon, setReactIcon] = useState<string>('');

  const react = (tag: string) => {
    if(tag == reactIcon) {
      setReactIcon('')
    } else {
      setReactIcon(tag)
    }
  }

  return (
    <View>
      <UserActionInfo wrapperStyle={{marginBottom: 10, paddingHorizontal: 20}}/>
      <View>
        <Image style={{width: "100%", height: 300}} source={{uri: "https://i.pinimg.com/736x/a9/5c/3e/a95c3e3b368ddc76ffcec63fa02d456f.jpg"}}/>
        <View style={{marginHorizontal: 20, paddingVertical: 10}}>
          <CsText numberOfLines={props.numberOfLines}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem sunt delectus, accusamus cupiditate sequi suscipit fugit atque culpa ipsa excepturi aliquid ratione! Necessitatibus molestias eos repudiandae quaerat praesentium soluta officia.</CsText>
          <View style={{flexDirection: 'row', gap: 5, marginVertical: 10}}>
            <Icon name='map-pin' size={20}/>
            <CsText weight={600}>An Hai Dong Restaurant - 5kms</CsText>
          </View>
          {
            props.isEmoijDisplay === undefined || props.isEmoijDisplay
            ? (
              <>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <IconButton onPress={() => react('A')} size={'sm'} typeBtn={reactIcon == 'A' ? 'active' : 'inactive'} source={{uri: 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f499.png'}}>{100}</IconButton>
                  <IconButton onPress={() => react('B')} size={'sm'} typeBtn={reactIcon == 'B' ? 'active' : 'inactive'} source={{uri: 'https://vnreview.vn/image/19/45/88/1945885.jpg?t=1559311281453'}}>{10}</IconButton>
                  <IconButton onPress={() => react('C')} size={'sm'} typeBtn={reactIcon == 'C' ? 'active' : 'inactive'} source={{uri: 'https://vnreview.vn/image/19/45/89/1945894.jpg?t=1559311281453'}}>{10}</IconButton>
                </View>
                <IconButton size={'sm'} typeBtn={'inactive'} source={require('../../assets/image/cmt.png')}>{10}</IconButton>
              </View>
              <View style={defaultStyle.dashedLine}></View>
              </>
            ) : null
          }
          
        </View>
      </View>
    </View>
  )
}
const defaultStyle = StyleSheet.create ({
  dashedLine: {
    borderBottomColor: Colors.C,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    width: '100%',
    marginTop: 30
  }
})
export {ReviewCard}