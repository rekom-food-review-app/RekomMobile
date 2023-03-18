import {Dimensions, TouchableOpacity, View, Image, StyleSheet, Keyboard} from 'react-native'
import { Colors } from '../../assets/colors';
import { Button, CsText, HeaderBack, IconButton, TextField } from '../../components'
import Icon from 'react-native-vector-icons/Feather'
import ImagePicker,{ImageOrVideo} from 'react-native-image-crop-picker';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import RekomAxios from '../../api/axios';
import { InputStateType } from '../../@types/InputStateType';
import { inputInitState } from '../../constant/inputInitState';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addReviewToTop } from '../../global-states';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const windowWidth = Dimensions.get('window').width;

const ReviewForm = () => {
  const nav = useNavigation<any>()
  const route = useRoute()
  const dispatch = useDispatch()

  const selectedRestaurant = useSelector((state: RootState) => state.selectedRestaurant)
  const auth = useSelector((state: RootState) => state.auth)

  const [reviewImgs, setReviewImgs] = useState<ImageOrVideo[]>([])
  const [content, setContent] = useState<InputStateType>(inputInitState)
  const [rating, setRating] = useState('')
  const [reactIcon, setReactIcon] = useState('')

  const [isSubmiting, setIsSubmiting] = useState<boolean>(false)
  const [submitButtonLabel, setSubmitButtonLabel] = useState<string>("Post")
  const [submitButtonState, setSubmitButtonState] = useState<never>("disable" as never)
  
  useEffect(() => {
    if (reviewImgs.length > 0 && content.value.toString().trim().length > 0 && rating.length > 0) {
      setSubmitButtonState("primary" as never)
    }
  }, [reviewImgs, content.value, rating])

  const react = (tag: string) => {
    if(tag == reactIcon){
      setReactIcon(tag)
    } else {
      setReactIcon(tag)
    }
  }

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
  function post () {
      Keyboard.dismiss()
      setSubmitButtonState("disable" as never)
      setSubmitButtonLabel("Submiting...")
      setIsSubmiting(true)
      let reviewData = new FormData();
      reviewData.append('content', content.value)
      reviewData.append('rating', rating)
      reviewImgs.forEach((image, index) => {
        reviewData.append('images',
        {
          uri: image.path,
          type: "multipart/form-data",
          name: image.path.split("/").pop()
        })
      })
      RekomAxios({
        method: 'post',
        url: `restaurants/${selectedRestaurant.info!.id}/reviews`,
        headers: {
          "Content-Type": 'multipart/form-data'
        },
        data: reviewData
      })
      .then(res => {
        dispatch(addReviewToTop({
          ...res.data.review,
          images: reviewImgs.map((value, index) => value.path)
        }))
        nav.goBack()
      })
      .catch(e => {
        console.log(e)
      })
  }
  return(
    <View style={{backgroundColor: Colors.B, width: '100%', height: '100%'}}>
      <HeaderBack type={'secondary'} title="Review" wrapperStyle={{paddingHorizontal: 20, paddingTop: 30, marginBottom: 20}}/>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{paddingHorizontal: 20, maxHeight: 200}}>
        {
          reviewImgs.map((img, index) => {
            return <Image key={index} source={{uri: img.path}} style={[styles.setReviewImg, {width: windowWidth -60}]}/>
          })
        }
        <TouchableOpacity style={[styles.setReviewImg, styles.imgSlt]} onPress={upLoadReviewImg}>
          <View style={{alignSelf: 'center', paddingVertical: 75}}>
            <Icon name="image" size={30} style={{alignSelf: 'center'}} />
            <CsText>Please upload at least one image !</CsText>
          </View>
        </TouchableOpacity>
      </ScrollView> 
      <View style={{paddingHorizontal: 20, gap: 5}}>
        <CsText size={'lg'} weight={900} style={{textTransform: 'uppercase', marginTop: 20}}>{selectedRestaurant.info.name}</CsText>
        <CsText numberOfLines={3} >{selectedRestaurant.info.description}</CsText>
        <View style={{flexDirection: 'row', width: '100%', gap: 15, marginTop: 20}}>
          <View style={{width: '80%', gap: 10}}>
            <TextField onChangeText={(content) => setContent({value: content, error: ''})} 
            multiline={true} type={'top'} placeholder='Let&apos;s us know what do you think, please say your honest words' 
            size={'xxl'} textFieldStyle={{height: 200, borderRadius: 20}}/>
            <Button size={'lg'} type={submitButtonState} label={submitButtonLabel} wrapperStyle={{width: '100%'}} onPress={post}/>
          </View>
          <View style={{width: '15%', flexDirection: 'column', borderWidth: 0.5, borderRadius:20, justifyContent: "space-evenly"}}> 
            <IconButton 
              onPress={() => {setRating('5'); react('5')}}
              iconStyle={{flexDirection: null, height: 35, paddingVertical: 5}} typeBtn={reactIcon == '5' ? 'active':'dot'} size={'md'}
              source={require('../../assets/image/i1.gif')}
            />
            <IconButton 
              onPress={() => {setRating('4'); react('4')}}
              iconStyle={{flexDirection: null, height: 35, paddingVertical: 5}} typeBtn={reactIcon == '4' ? 'active':'noBoder'} size={'md'}
              source={require('../../assets/image/i2.gif')}
            />
            <IconButton 
              onPress={() => {setRating('3'); react('3')}}
              iconStyle={{flexDirection: null, height: 35, paddingVertical: 5}} typeBtn={reactIcon == '3' ? 'active':'noBoder'} size={'md'}
              source={require('../../assets/image/i3.gif')}
            />
            <IconButton 
              onPress={() => {setRating('2'); react('2')}}
              iconStyle={{flexDirection: null, height: 35, paddingVertical: 5}} typeBtn={reactIcon == '2' ? 'active':'noBoder'} size={'md'}
              source={require('../../assets/image/i4.gif')}
            />
            <IconButton 
              onPress={() => {setRating('1'); react('1')}}
              iconStyle={{flexDirection: null, height: 35, paddingVertical: 5}} typeBtn={reactIcon == '1' ? 'active':'noBoder'} size={'md'}
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
    width: windowWidth - 40, 
    height: 200, 
    backgroundColor: "#F5F5F5", 
    borderRadius: 25,
    marginRight: 10
  },
  imgSlt: {
    borderWidth: 0.5,
    borderStyle: 'dashed'
  }
})
export {ReviewForm}