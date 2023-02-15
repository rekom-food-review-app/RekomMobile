import {Image, StyleSheet, View, Text} from 'react-native'
import { Colors } from '../../assets/colors'
import { ScrollView } from 'react-native-virtualized-view';
import { Button, CsText, HeaderBack, NavigateBar } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from "axios"
import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../app/store'
import { RestaurantNewsletter } from './RestaurantNewsletter'
import { RestaurantMenu } from './RestaurantMenu'
import { RestaurantGallery } from './RestaurantGallery'
import { RestaurantInfo } from './RestaurantInfo'
import { setResTab } from '../../global-states'
import { StarLine } from '../../components/data_displays/StartLine'


const RestaurantLayout = () => {
  const tabRes = useSelector((state: RootState) => state.restaurantTab.tabRes)
  const dispatch = useDispatch()

  useEffect(() => {
    return() => {
      dispatch(setResTab(1))
    }
  }, [])

  return(
    <ScrollView style={{position: 'relative', width: '100%', backgroundColor: Colors.B}}>

      <HeaderBack type='primary' wrapperStyle={{position: 'absolute', padding: 20}}/>

      <Image source={require('../../assets/image/res-cover.png')}
        style={styles.cover}/>
      <View style={styles.content}>
        <Text style={styles.resName}>Dong Phuong Restaurant</Text>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing.</Text>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15}}>
          <Text style={{alignSelf: 'center', fontWeight: '900', fontSize: 17}}>Awwward</Text>
          <Button wrapperStyle={{height: 35}} type={'primary'} size={'sm'} label={'new review'}/>
        </View>
        <View style={styles.rating}>
          <View style={{width: '40%', alignItems: 'center'}}>
            <Text style={{fontSize: 40, fontWeight: '700'}}>4.9</Text>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Icon name="star" size={20} color={Colors.A} />
              <Icon name="star" size={20} color={Colors.A} />
              <Icon name="star" size={20} color={Colors.A} />
              <Icon name="star" size={20} color={Colors.A} />
              <Icon name="star" size={20} color={Colors.A} /> 
            </View>
            <Text>2611 ratings</Text>
          </View>
          <View style={{width:'55%'}}>
            <StarLine point={80}>5</StarLine>
            <StarLine point={20}>4</StarLine>
            <StarLine point={30}>3</StarLine>
            <StarLine point={50}>2</StarLine>
            <StarLine point={10}>1</StarLine>
          </View>
        </View>
      </View>
      <NavigateBar tab={tabRes}/>
      <View style={styles.dashedLine}></View>
      {
        tabRes == 1 ? <RestaurantNewsletter /> : null
      }
      {
        tabRes == 2 ? <RestaurantMenu /> : null
      }
      {
        tabRes == 3 ? <RestaurantGallery ImageList={[]} /> : null
      }
      {
        tabRes == 4 ? <RestaurantInfo /> : null
      }
      {/* <View><Text>this is footer</Text></View> */}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: 160,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  resName: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.E,
    marginTop: 10,
    marginBottom: 3,
    alignItems: 'center'
  },
  containStarLine:{
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
  },
  starLine: {
    width: '90%', 
    height: 7, 
    backgroundColor: Colors.A, 
    borderRadius: 20,
  },
  rating: {
    borderColor: Colors.C, 
    borderWidth: 1, 
    borderRadius: 20, 
    padding: 20,
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  dashedLine: {
    borderBottomColor: Colors.C,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    width: '40%',
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom: 30
  }
})
export {RestaurantLayout}