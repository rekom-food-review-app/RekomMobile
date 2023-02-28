import {Dimensions, TouchableOpacity, View, Image, StyleSheet} from 'react-native'
import { Colors } from '../../assets/colors';
import { Button, CsText, HeaderBack, IconButton, TextField } from '../../components'
import Icon from 'react-native-vector-icons/Feather'
import ImagePicker,{ImageOrVideo} from 'react-native-image-crop-picker';
import { useState } from 'react';
import { ScrollView } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const ReviewForm = () => {

  const [reviewImgs, setReviewImgs] = useState<ImageOrVideo[]>([])

  const upLoadReviewImg = async () => {
    try {
      await ImagePicker.openPicker({
        width: windowWidth - 40,
        height: 200,
        cropping: true,
        multiple: true,
      }).then(images => {
        setReviewImgs(images)
      })
    } catch (error) {console.log(error);
    }
  };

  return(
    <View style={{backgroundColor: Colors.B, width: '100%', height: '100%'}}>
      <HeaderBack type={'secondary'} title="Review" wrapperStyle={{paddingHorizontal: 20, paddingTop: 30, marginBottom: 20}}/>
      <ScrollView horizontal={true} style={{paddingLeft: 20, maxHeight: 200}}>
        {
          reviewImgs.map((img, index) => {
            return <Image key={index} source={{uri: img.path}} style={styles.setReviewImg}/>
          })
        }
        <TouchableOpacity style={styles.setReviewImg} onPress={upLoadReviewImg}>
          <Icon name="image" size={30} style={{alignSelf: 'center', lineHeight: 200}} />
        </TouchableOpacity>
      </ScrollView> 
      <View style={{paddingHorizontal: 20, gap: 5}}>
        <CsText size={'lg'} weight={900} style={{textTransform: 'uppercase', marginTop: 20}}>Dong Phuong restaurant</CsText>
        <CsText numberOfLines={2} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corporis iste quae atque odio sequi consequuntur. Animi aliquam modi alias, excepturi eveniet pariatur obcaecati architecto nam ullam tempore ducimus in.</CsText>
        <View style={{flexDirection: 'row', width: '100%', gap: 15, marginTop: 20}}>
          <View style={{width: '80%', gap: 10}}>
            <TextField multiline={true} type={'top'} placeholder='Let&apos;s us know what do you think, please say your honest words' 
            size={'xxl'} textFieldStyle={{height: 200, borderRadius: 30}}/>
            <Button size={'lg'} type="primary" label='Post' wrapperStyle={{width: '100%'}}/>
          </View>
          <View style={{width: '15%', flexDirection: 'column', borderWidth: 0.5, borderRadius:100, gap: 5, paddingVertical: 10}}> 
            <IconButton iconStyle={{flexDirection: null, height: 35}} typeBtn={'noBoder'} size={'md'}
              source={require('../../assets/image/i1.gif')}
            />
            <IconButton iconStyle={{flexDirection: null, height: 35}} typeBtn={'noBoder'} size={'md'}
              source={require('../../assets/image/i2.gif')}
            />
            <IconButton iconStyle={{flexDirection: null, height: 35}} typeBtn={'noBoder'} size={'md'}
              source={require('../../assets/image/i3.gif')}
            />
            <IconButton iconStyle={{flexDirection: null, height: 35}} typeBtn={'noBoder'} size={'md'}
              source={require('../../assets/image/i4.gif')}
            />
            <IconButton iconStyle={{flexDirection: null, height: 35}} typeBtn={'noBoder'} size={'md'}
              source={require('../../assets/image/i5.gif')}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  setReviewImg: {
    width: windowWidth - 60, 
    height: 200, 
    backgroundColor: Colors.F, 
    borderRadius: 25,
    marginRight: 10
  }
})
export {ReviewForm}