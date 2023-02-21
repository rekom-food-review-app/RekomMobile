import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Colors} from '../../assets/colors';
import {Button, CsText, Select, SelectDate, TextField} from '../../components';
import Icon from 'react-native-vector-icons/Feather'
import DateTimePicker from '@react-native-community/datetimepicker';

interface UpdateProfileFormProps
{
  imageUri ?: string | null
}

const UpdateProfileForm = (props: UpdateProfileFormProps) => {
  const nav = useNavigation<any>()
  const [imageUri, setImageUri] = useState<UpdateProfileFormProps>({imageUri: null});
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
  };

  const showDatepicker = () => {
    setShow(true);
    setMode('date');
  };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

  const LoadLib = async () => {
    try {
      const chooseImg = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
      }).then(image => {
          setImageUri({imageUri: image.path})
      })
    } catch (error) {console.log(error);
    }
  };

  const submit = () => {
    nav.navigate("RestaurantScreen")
  }

  return (
     <View>
        <Text style={{marginBottom: 15, textAlign: 'center'}}>
          Let's update your profile
        </Text>

        <TouchableOpacity onPress={LoadLib} style={{alignSelf: 'center', marginBottom: 10}}>
          <Image
            style={styles.setAvt}
            source={imageUri.imageUri ? { uri: imageUri.imageUri } : require('../../assets/image/avt.jpg')}
            />
            <View style={{padding: 5, borderRadius: 100, position: 'absolute', bottom: 5, left: 5, backgroundColor: Colors.B}}>
              <Icon name="edit" size={15} color={Colors.E}/>
            </View>
        </TouchableOpacity>

        <TextField
          wrapperStyle={{marginVertical: 15, width: '100%'}}
          placeholder={'Your full name'}
          type={'left'}
          size={'lg'}
        />
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}} onPress={showDatepicker}>
          <SelectDate day={date.getDay()} month={date.getMonth()} year={date.getFullYear()}/>
        </TouchableOpacity>
        {show && (
        <DateTimePicker
        testID="dateTimePicker"
        value={date}
        // mode={mode}
        is24Hour={true}
        display="default"
        onChange={(e, d) => onChange(d)}
        />
    )}
        <TextField
          wrapperStyle={{marginVertical: 15, width: '100%'}}
          placeholder={'Description'}
          type={'left'}
          size={'lg'}
        />
        <Button
          onPress={submit}
          wrapperStyle={{width: '100%', zIndex: -1}}
          type={'primary'}
          size={'lg'}
          label={"Let's go babe"}
        />

    </View>
  );
};
const styles = StyleSheet.create({
  containInput: {
    width: '100%',
    alignSelf: 'center',
  },
  setAvt: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: 100,
    borderBottomLeftRadius: 25
  },
});
export {UpdateProfileForm};
