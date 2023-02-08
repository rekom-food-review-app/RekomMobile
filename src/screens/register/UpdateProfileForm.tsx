import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Colors} from '../../assets/colors';
import {Button, CsText, Select, TextField} from '../../components';


interface UpdateProfileFormProps
{
}


const UpdateProfileForm = (props: UpdateProfileFormProps) => {
  const nav = useNavigation<any>()
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];
  const LoadLib = async () => {
    try {
      const chooseImg = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
      });
    } catch (error) {console.log(error);
    }
  };

  const submit = () => {
    nav.navigate("IntroScreen")
  }

  return (
     <View>
        <Text style={{marginBottom: 15, textAlign: 'center'}}>
          Let's update your profile
        </Text>

        <TouchableOpacity onPress={LoadLib} style={{alignSelf: 'center'}}>
          <Image
            style={styles.setAvt}
            source={require('../../assets/image/avt.png')}
          />
        </TouchableOpacity>

        <TextField
          wrapperStyle={{marginVertical: 15, width: '100%'}}
          placeholder={'Your full name'}
          type={'left'}
          size={'lg'}
        />

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <Select
            wrapperStyle={{width: '48%'}}
            placeholder={'Country'}
            setSelected={(val: React.SetStateAction<string>) =>
              setSelected(val)
            }
            data={data}
            save="value"
          />
          <Select
            wrapperStyle={{width: '48%'}}
            placeholder={'City'}
            setSelected={(val: React.SetStateAction<string>) =>
              setSelected(val)
            }
            data={data}
            save="value"
          />
        </View>

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
  },
});
export {UpdateProfileForm};
